// Write your solution in this file!
const employee = {
    name: "Bruce Wayne",
    streetAddress: "123 Wayne Street, Arkham NY 10004"
};

    function updateEmployeeWithKeyAndValue(employee, key, value) {
        return {
         ...employee,
         [key]: value,
         };
    };


    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee[key] = value;
        return employee;
      }
      
      function deleteFromEmployeeByKey(employee, key) {
        let newEmployee = { ...employee };
        delete newEmployee[key];
        return newEmployee;
      }
      
      function destructivelyDeleteFromEmployeeByKey(employee, key) {
        delete employee[key];
        return employee;
      }

