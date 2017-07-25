function action(type, payload = {}) {
  return {type: `APP_ACTIONS_${type}`, payload};
}

export const departments = {
  request: () => action("DEPARTMENTS_REQUEST"),
  success: (departments)=>action("DEPARTMENTS_SUCESSS",{departments})
};

export const department = {
  save: (department) => action("DEPARTMENT_SAVE",{department}),
  success: (department)=>action("DEPARTMENT_SAVE_SUCESSS",{department})
};


export const employees = {
  request: () => action("EMPLOYEES_REQUEST"),
  success: (employees)=>action("EMPLOYEES_SUCESSS",{employees})
};

export const employee = {
  save: (employee) => action("EMPLOYEE_SAVE",{employee}),
  success: (employee)=>action("EMPLOYEE_SAVE_SUCESSS",{employee})
};
