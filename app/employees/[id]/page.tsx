import EmployeeView from "@/components/employee-view";

export default async function ViewEmployeePage({ params }: PageProps<"/employees/[id]">) {
  const { id } = await params;
  return <EmployeeView key={id} id={id} />;
}
