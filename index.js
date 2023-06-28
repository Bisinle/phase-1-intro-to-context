// Your code here

function createEmployeeRecord(array) {
  let employee = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
  return employee;
}

let testEmployee = createEmployeeRecord(["Gray", "Worm", "Security", 1]);
// console.log(testEmployee);
function createEmployeeRecords(array) {
 let blah = array.map(item =>{
    return createEmployeeRecord(item)
 })
return blah

}



console.log(createEmployeeRecords(array));
