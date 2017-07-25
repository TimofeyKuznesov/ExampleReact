import _ from "lodash";

const API_URL = "/api";


let callApi=function(entry,options) {
  if(options){
    if(_.isObject(options.body)){
      options.body=JSON.stringify(options.body);
      options.headers={
        "Content-type": "application/json",
      };
    }
  }
  return fetch(`${API_URL}/${entry}`,options)
    .then(response =>
      response.json().then(json => ({
        json,
        response
      }))
    ).then(({
      json,
      response
    }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    });
};


export const fetchDepartments = () => {
  return callApi("department");
};

export const fetchEmployees = () => {
  return callApi("employees");
};

export const saveDepartment = (department) => {
  return callApi(`department/${department.id}`,{method: "PUT",body:department});
};

export const saveEmployee = (employee) => {
  return callApi(`employees/${employee.id}`,{method: "PUT",body:employee});
};
