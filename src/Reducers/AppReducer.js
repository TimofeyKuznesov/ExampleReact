import * as AppActions from "../Actions/AppActions";

const appStateInit = {
  departments:[],
  employees: [],
};

let AppReducer = function(state, action) {
  if(state===undefined)
    return Object.assign({},appStateInit);
    /*eslint no-case-declarations: "error"*/
    /*eslint-env es6*/
  switch (action.type) {
  case AppActions.departments.success().type:
    return Object.assign({},state,{departments:action.payload.departments});
  case AppActions.employees.success().type:
    return Object.assign({},state,{employees:action.payload.employees});
  case AppActions.department.success().type: {
    let department=action.payload.department;
    let departments=state.departments.map((item)=>{
      if(department.id===item.id){
        return department;
      } else {
        return item;
      }
    });
    return Object.assign({},state,{departments:   departments});
  }
  case AppActions.employee.success().type: {
    let employee=action.payload.employee;
    let employees=state.employees.map((item)=>{
      if(employee.id===item.id){
        return employee;
      } else {
        return item;
      }
    });
    return Object.assign({},state,{employees:   employees});
  }
  default:
    return state;
  }
};

export default AppReducer;
