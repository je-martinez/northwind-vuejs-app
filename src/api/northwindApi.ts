import axios from "axios";
import { EmployeeResponse } from "@/api/types";

const northwindApi = axios.create({
  baseURL: "https://northwind.vercel.app/api",
});

/**------------------------------------------------------------------------
 *                           Employees
 *------------------------------------------------------------------------**/

const getEmployees = async () => {
  return northwindApi.get<EmployeeResponse[]>("/employees");
};

const getEmployee = async (id: number) => {
  return northwindApi.get<EmployeeResponse>(`/employees/${id}`);
};

export { getEmployees };
