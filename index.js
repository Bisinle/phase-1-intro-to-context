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
  let DatesOwed;
  let timeInEvent = object.timeInEvents;
  let timeOutEvent = object.timeOutEvents;
  let timeIn,
    timeOut,
    hoursElabsed = 0;

  //grap the hour employee clocked out
  for (const event of timeOutEvent) {
    timeOut = parseInt(event.hour);
  }
  //grap the hour employee clocked in
  for (const event of timeInEvent) {
    timeIn = parseInt(event.hour);
  }
  for (const originalDate of timeOutEvent) {
    let existingDate = originalDate.date;
    if (existingDate == date) {
      hoursElabsed += Math.round(timeOut - timeIn) * 0.01;
    } else {
      hoursElabsed = Math.round(timeOut - timeIn) * 0.01;
    }
  }
  return hoursElabsed;
}
//************************************************** */

function wagesEarnedOnDate(object, date) {
  let PayOwed = object.payPerHour;
  let hoursElabsed = hoursWorkedOnDate(object, date);
  let timeOutEvent = object.timeOutEvents;
  let totatWagedEarned = 0;
  for (const originalDate of timeOutEvent) {
    let existingDate = originalDate.date;
    if (existingDate !== date) {
      totatWagedEarned = PayOwed * hoursElabsed;
      console.log(totatWagedEarned);
      return totatWagedEarned;
    } else {
      totatWagedEarned += PayOwed * hoursElabsed;
      console.log(totatWagedEarned);
      return totatWagedEarned;
    }
  }
}
//******************************************* */
function allWagesFor(object) {
  let obgohome = createEmployeeRecord(object);
  let updatedBpRecord11 = createTimeInEvent(obgohome, "0044-03-14 900");
  let updatedBpRecord22 = createTimeOutEvent(obgohome, "0044-03-14 2100");
  //capture the dates
  let hoursWorke = hoursWorkedOnDate(updatedBpRecord22, (date = "0044-03-15"));
  let wages = wagesEarnedOnDate(updatedBpRecord22, (date = "0044-03-15"));
  console.log(wages);
  console.log(hoursWorke);
}

console.log(allWagesFor(["Julius", "Caesar", "General", 27]));
