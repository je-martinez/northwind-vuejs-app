export interface Employee {
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

export type EmployeesResponse = Array<Employee>;
