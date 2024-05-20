export interface ModuleState {
  prop: string;
}

function state(): ModuleState {
  return {
    prop: "value",
  };
}

export default state;
