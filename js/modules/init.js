async function employeesJson() {
  const response = await fetch("/data/employees.json");
  const empData = await response.json();
  return empData;
}

//employeesJson();
export default employeesJson;
