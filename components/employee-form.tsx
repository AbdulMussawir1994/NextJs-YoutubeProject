"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";

type Employee = { id: number; name: string; department: string; salary: number };//
const apiUrl = (process.env.NEXT_PUBLIC_API_BASE_URL?.trim() || "https://localhost:7047").replace(/\/+$/, "");

export default function EmployeeForm({ id }: { id?: string }) {
  const router = useRouter();
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [saving, setSaving] = useState(false);
  const active = useRef(true);

  useEffect(() => {
    const controller = new AbortController();
    active.current = true;
    if (id) {
      fetch(`${apiUrl}/GetById/${encodeURIComponent(id)}`, { signal: controller.signal, cache: "no-store" })
        .then(async (response) => {
          const result = await response.json();
          if (!controller.signal.aborted && response.ok && result.isSuccess && result.status >= 200 && result.status < 300 && result.data?.id === Number(id)) {
            setEmployee(result.data);
          }
        })
        .catch((error) => { if (!controller.signal.aborted) console.error(error); });
    }
    return () => { active.current = false; controller.abort(); };
  }, [id]);

  async function saveEmployee(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (saving) return;
    const values = new FormData(event.currentTarget);
    const input = {
      id: employee?.id ?? 0,
      name: String(values.get("name") ?? "").trim(),
      department: String(values.get("department") ?? "").trim(),
      salary: Number(values.get("salary")),
    };
    if (!input.name || !input.department) return;
    setSaving(true);
    try {
      const response = await fetch(`${apiUrl}/${id ? "Update" : "Add"}`, {
        method: id ? "PUT" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(input),
      });
      const result = await response.json();
      if (active.current && response.ok && result.isSuccess && result.status >= 200 && result.status < 300) {
        router.replace("/employees");
        return;
      }
    } catch (error) { console.error(error); }
    setSaving(false);
  }

  return (
    <>
      <h1 className="mb-3">{id ? "Edit employee" : "Add employee"}</h1>
      {(!id || employee) && <form onSubmit={saveEmployee}>
        <fieldset disabled={saving}>
          <label htmlFor="name" className="form-label">Name</label>
          <input id="name" name="name" className="form-control mb-3" defaultValue={employee?.name} autoComplete="name" required />
          <label htmlFor="department" className="form-label">Department</label>
          <input id="department" name="department" className="form-control mb-3" defaultValue={employee?.department} required />
          <label htmlFor="salary" className="form-label">Salary</label>
          <input id="salary" name="salary" className="form-control mb-3" type="number" min="0" step="0.01" defaultValue={employee?.salary} required />
          <button type="submit" className="btn btn-primary me-2">Save</button>
        </fieldset>
      </form>}
      <Link href="/employees" className="btn btn-secondary mt-3">Back to list</Link>
    </>
  );
}
