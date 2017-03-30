
function getBalance (date, person) { //Date could be a timespan/datespan
  var totalBalance = 0;
  dateObj = getDateObj(date);
  if ( person != "all") {
    getBalanceForPerson(person);
  } else {
    for ( {{each person}} ) {
      getBalanceForPerson(person);
    }
  }
}
function getBalanceForPerson () {
  for ( {{ each day in this datespan}} ) {
    totalBalance += dateObj.person.balance;
  }
  return;
}

transactionLogExpenses: {
  {{transactionLogExpenseObj}}: {
    date: // Entered
    numberOfNights: // Entered
    value: // Entered
    nightlyValue: // Calculated
    type: // Entered e.g. Guesty, Rent, Bill, etc
  }
}
monthlyExpenses: {
  {{monthObj}}: { // Needs to include year, e.g. "Jan2016"
    totalMonthlyExpense: // calculated
    nightlyExpenses:
  }
}
function calulateNightlyValueOfExpenseTransaction (transactionLogExpenseObj) {
  var nightlyValue = transactionLogExpenseObj.value / transactionLogExpenseObj.numberOfNights;
  transactionLogExpenseObj.nightlyValue = nightlyValue;
}
function getMonthlyExpenses (month) {
  var monthObj = getMonthObj(month);
  var totalMonthlyExpense = 0;
  for ( {{each transactionLogExpenseObj}} ) {
    if ( {{ transactionLogExpenseObj.date.getMonth() == month }} ) {
      totalMonthlyExpense += transactionLogExpenseObj.value;
    }
  }
  monthObj.totalMonthlyExpense = totalMonthlyExpense;
  var nightlyExpense = totalMonthlyExpense / getDaysInMonth();
  monthObj.nightlyExpense = nightlyExpense;
  return;
}

DaybyDayCalc: {
  {{dateObj}}: {
    Calender Month: // Function of {{date}}
    Rent Month: // Function of {{date}}
    numberOfCohomiesIn: // Calculated
    Rooms booked per night: // Calculated
    Revenue per night: // Calculated
    Jon: { // "person" variable
      in: // Entered
      expenses: // Calculated
      revenues: // Calculated
      balance: // Calculated
    }
    Alex: {
      in: // Entered
      expenses: // Calculated
      revenues: // Calculated
      balance: // Calculated
    }
    Jerome: {
      in: // Entered
      expenses: // Calculated
      revenues: // Calculated
      balance: // Calculated
    }
  }
}

transactionLogRevenues: {
  {{transactionLogRevenueObj}}: {
    // date
    // value
  }
}

function calculateBalance (person, date) {
  var dateObj = getDateObj(date);
  if ( dateObj.person.IN == true ) {
    var balance = date.person.Expenses + date.person.Revenues;
    date.person.Balance = balance;
  } else {
    date.person.Balance = 0;
  }
}

function calculateRevenues (person, date) {
  var dateObj = getDateObj(date);
  var revenues = dateObj.revenuePerNight / dateObj.numberOfCohomiesIn;
  dateObj.person.revenues = revenues;
  return;
}

function calculateExpenses (person, date) {
  var dateObj = getDateObj(date);
  var expenses = getDailyExpense(date) / dateObj.numberOfCohomiesIn;
  dateObj.person.expenses = expenses;
  return;
}

function calculateNumberOfCohomiesIn (date) {
  var dateObj = getDateObj(date);
  var numberOfCohomiesIn = 0;
  // Count the number of people who are "in on that day"
  for ( {{ each person }} )  {
    if (dateObj.person.in = "true") {
      numberOfCohomiesIn += 1;
    }
  }
  // Save the total back into the object
  dateObj.numberOfCohomiesIn = numberOfCohomiesIn;
}

function calculateRoomsBookedPerNight (date) {
  var dateObj = getDateObj(date);
  var totalRoomsBookedThatNight = 0;
  for ( {{ All transactions/Transaction Objects) }} ) {
    for ( i = 0, i < 1000, i++) { // For all dates into history
      if ( ((dateObj.date - i) == (transactionObj.date - i)) && transactionObj.days > i ) {
        var totalRoomsBookedThatNight += 1;
      }
    }
  }
  dateObj.roomsBookedTonight = totalRoomsBookedThatNight;
  return;
}

function calculateRevenuePerNight (date) {
  var dateObj = getDayObjForGivenDate(date); // Get object containing revenue on a certain date
  var totalRevenueThatDay = 0;
  for ( {{ All transactions/Transaction Objects) }} ) {
    for ( i = 0, i < 1000, i++) { // For all dates into history
      if ( ((dateObj.date - i) == (transactionObj.date - i)) && transactionObj.days > i ) {
        var totalRevenueThatDay += transactionObj.rentpernight;
      }
    }
  }
  dateObj.revenuePerNight = totalRevenueThatDay;
  return;
}
//Populate "Revenue per night" for each date
// function populateAllRevenuePerNight() {
//   var beginningOfTime = new Date(2015,20,02);
//   for ( i = beginningOfTime, i < Date(), i++ ) { // For each date (row in the DaybyDay calc sheet)
//     calculateRevenuePerNight(i); // Calculate the revenue on that night
//   }
// }

function getDayObjForGivenDate (date) {
}
