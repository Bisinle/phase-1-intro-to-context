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
  let arrayOfObjects = array.map((item) => {
    let passArrayTocreateEmployeeRecord = createEmployeeRecord(item);

    return passArrayTocreateEmployeeRecord;
  });

  return arrayOfObjects;
}
let twoRows = [
  ["moe", "sizlak", "barkeep", 2],
  ["bartholomew", "simpson", "scamp", 3],
];

// console.log(createEmployeeRecords(twoRows));

function createTimeInEvent(object, dates) {
  let splitDates = dates.split(" ");
  object.timeInEvents = [
    {
      type: "TimeIn",
      date: splitDates[0],
      hour: parseInt(splitDates[1]),
    },
  ];

  return object;
}

function createTimeOutEvent(object, dates) {
  let splitDates = dates.split(" ");
  object.timeOutEvents = [
    {
      type: "TimeOut",
      date: splitDates[0],
      hour: parseInt(splitDates[1]),
    },
  ];

  return object;
}

// let cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000]);
// let updatedBpRecord1 = createTimeInEvent(cRecord, "0044-03-15 0900");
// let updatedBpRecord2 = createTimeOutEvent(cRecord, "0044-03-15 1100");
// // expect(hoursWorkedOnDate(cRecord, "0044-03-15")).to.equal(2)

function hoursWorkedOnDate(object, date) {
  //   let timeIn = object.timeInEvents[0].hour;
  //   let timeOut = object.timeOutEvents[0].hour;
  //   let hoursElabsed = Math.round(timeOut - timeIn) * 0.01;
  //grap the timeEvents
  let timeInEvent = object.timeInEvents;
  let timeOutEvent = object.timeOutEvents;
  console.log(object, timeInEvent);

  return hoursElabsed;
}

function wagesEarnedOnDate(object, date) {
  let PayOwed = object.payPerHour;
  let hoursElabsed = hoursWorkedOnDate(object, date);
  return PayOwed * hoursElabsed;
}

function allWagesFor(object) {
  let updatedBpRecord11 = createTimeInEvent(object, "0044-03-14 0900");
  let updatedBpRecord22 = createTimeOutEvent(object, "0044-03-14 2100");
  //capture the dates
  let hoursWorke = hoursWorkedOnDate(object);

  console.log(updatedBpRecord11);
}

console.log(allWagesFor(["Julius", "Caesar", "General", 27]));
