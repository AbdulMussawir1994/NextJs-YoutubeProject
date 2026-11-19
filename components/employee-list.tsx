"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Employee = { id: number; name: string; department: string; salary: number };//
const apiUrl = (process.env.NEXT_PUBLIC_API_BASE_URL?.trim() || "https://localhost:7047").replace(/\/+$/, "");

export default function EmployeeList() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const deleting = useRef(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${apiUrl}/List`, { signal: controller.signal, cache: "no-store" })
      .then(async (response) => {
        const result = await response.json();
        if (!controller.signal.aborted && response.ok && result.isSuccess && result.status >= 200 && result.status < 300 && Array.isArray(result.data)) {
          setEmployees(result.data);
        }
      })
      .catch((error) => { if (!controller.signal.aborted) console.error(error); });
    return () => controller.abort();
  }, []);

  async function deleteEmployee(employee: Employee) {
    if (deleting.current || !window.confirm(`Delete ${employee.name}?`)) return;
    deleting.current = true;
    try {
      const response = await fetch(`${apiUrl}/Delete/${employee.id}`, { method: "DELETE" });
      const result = await response.json();
      if (response.ok && result.isSuccess && result.status >= 200 && result.status < 300 && result.data === true) {
        setEmployees((current) => current.filter((item) => item.id !== employee.id));
      }
    } catch (error) { console.error(error); }
    finally { deleting.current = false; }
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Employees</h1>
        <Link href="/employees/add" className="btn btn-primary">Add employee</Link>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead><tr><th>ID</th><th>Name</th><th>Department</th><th>Salary</th><th>Actions</th></tr></thead>
          <tbody>{employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td><td>{employee.name}</td><td>{employee.department}</td><td>{employee.salary}</td>
              <td><div className="d-flex gap-2">
                <Link href={`/employees/${employee.id}`} className="btn btn-sm btn-info">View</Link>
                <Link href={`/employees/${employee.id}/edit`} className="btn btn-sm btn-warning">Edit</Link>
                <button className="btn btn-sm btn-danger" onClick={() => deleteEmployee(employee)}>Delete</button>
              </div></td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </>
  );
}
