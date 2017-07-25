function action(type, payload = {}) {
  return {type: `UI_ACTIONS_${type}`, payload};
}


export const editType = {
  department: "department",
  employees: "employees"
};

export const departments = {
  openToggle: () => action("DEPARTMENTS_OPEN_TOGGLE"),
  edit: (department) => action("DEPARTMENTS_EDIT",department),
};

export const employees = {
  openToggle: () => action("EMPLOYEES_OPEN_TOGGLE"),
  edit: (employees) => action("EMPLOYEES_EDIT",employees),
};
