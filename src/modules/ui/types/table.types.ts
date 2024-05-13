export interface TableHeaderDefinition {
  id: string;
  label: string;
}

export interface TableDataDefinition {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: string | number | boolean | any | unknown;
}
