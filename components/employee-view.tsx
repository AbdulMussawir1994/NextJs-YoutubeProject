"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Employee = { id: number; name: string; department: string; salary: number };//
const apiUrl = (process.env.NEXT_PUBLIC_API_BASE_URL?.trim() || "https://localhost:7047").replace(/\/+$/, "");

export default function EmployeeView({ id }: { id: string }) {
  const [employee, setEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${apiUrl}/GetById/${encodeURIComponent(id)}`, { signal: controller.signal, cache: "no-store" })
      .then(async (response) => {
        const result = await response.json();
        if (!controller.signal.aborted && response.ok && result.isSuccess && result.status >= 200 && result.status < 300 && result.data?.id === Number(id)) {
          setEmployee(result.data);
        }
      })
      .catch((error) => { if (!controller.signal.aborted) console.error(error); });
    return () => controller.abort();
  }, [id]);

  return (
    <>
      <h1 className="mb-3">View employee</h1>
      {employee && <>
        <dl>
          <dt>ID</dt><dd>{employee.id}</dd>
          <dt>Name</dt><dd>{employee.name}</dd>
          <dt>Department</dt><dd>{employee.department}</dd>
          <dt>Salary</dt><dd>{employee.salary}</dd>
        </dl>
        <Link href={`/employees/${employee.id}/edit`} className="btn btn-primary me-2">Edit</Link>
      </>}
      <Link href="/employees" className="btn btn-secondary">Back to list</Link>
    </>
  );
}
