export interface RegionState {
  prop: string;
}

function state(): RegionState {
  return {
    prop: "value",
  };
}

export default state;
