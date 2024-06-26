import { Employee } from "@/api/types";

const getAvatarUrl = (employee: Employee) => {
  return `https://i.pravatar.cc/150?u=${employee.firstName.toLowerCase()}.${employee.lastName.toLowerCase()}@northwind.com`;
};

export { getAvatarUrl };
