import * as UiActions from "../Actions/UiActions";


const uiStateInit = {
  departmentsOpen: false,
  employeesOpen: true,
  editObject: {
    type: null,
    object: null,
  }
};


let UIReducer = function(state, action) {
  if(!state)
    return Object.assign({},uiStateInit);
  switch (action.type) {
  case UiActions.departments.openToggle().type:
    return Object.assign({},state,{departmentsOpen:!state.departmentsOpen});
  case UiActions.employees.openToggle().type:
    return Object.assign({},state,{employeesOpen:!state.employeesOpen});
  case UiActions.departments.edit().type:
    return Object.assign({},state,{editObject:{
      type: UiActions.editType.department,
      object: action.payload
    }});
  case UiActions.employees.edit().type:
    return Object.assign({},state,{editObject:{
      type: UiActions.editType.employees,
      object: action.payload
    }});
  default:
    return state;
  }
};

export default UIReducer;
