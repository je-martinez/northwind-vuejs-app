import { Order } from "./orders.types";
import { Territory } from "./regions.types";

export interface Employee extends EmployeeRelations {
  id: number;
  lastName: string;
  firstName: string;
  title: string;
  titleOfCourtesy: string;
  birthDate: Date;
  hireDate: Date;
  address: EmployeeAddress;
  notes: string;
  reportsTo: number | string;
  territoryIds: number[];
}

export interface EmployeeAddress {
  street: string;
  city: string;
  region: string;
  postalCode: number | string;
  country: string;
  phone: string;
}

interface EmployeeRelations {
  reportsToEmployee?: Employee;
  territories?: Territory[];
  orders?: Order[];
}

export type EmployeesResponse = Array<Employee>;
