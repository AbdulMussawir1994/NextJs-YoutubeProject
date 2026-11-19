import EmployeeForm from "@/components/employee-form";

export default async function EditEmployeePage({ params }: PageProps<"/employees/[id]/edit">) {
  const { id } = await params;
  return <EmployeeForm key={id} id={id} />;
}
