/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */



//  this will be the employees record use .call to attach it to that employee
let createEmployeeRecord = function(employee) {
    // debugger to see what employee is in console 
    // console.log(employee) and run at bottom or screen 
    // look at test and see what we are passing in 
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }

}

let createEmployeeRecords = function(employeeData){
    // debugger see what employeeData is
    // map over the data and run each employees info through the createEmployeeRecord method
    return employeeData.map(employee => {
        return createEmployeeRecord(employee)
    })
}

let createTimeInEvent = function(dateTimeString){
    
    let dateTimeArray = dateTimeString.split(' ')
    // ["2015-02-28", "1700"] splits the date from the time
    let day = dateTimeArray[0]
    let hour = dateTimeArray[1]
    // debugger
    // console.log(dateArray)
 
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: day
    })
    
   return this
    
}

let createTimeOutEvent = function(dateTimeString){
    
    let dateTimeArray = dateTimeString.split(' ')
    // ["2015-02-28", "1700"] splits the date from the time
    let day = dateTimeArray[0]
    let hour = dateTimeArray[1]
    // debugger
    // console.log(dateArray)
 
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: day
    })
    
   return this
    
}

let hoursWorkedOnDate = function(date){
    let timeIn = this.timeInEvents.find(events => events.date == date);
    let timeOut = this.timeOutEvents.find(events => events.date == date);
    return (timeOut.hour - timeIn.hour) / 100
}

let wagesEarnedOnDate = function(date){
    return (hoursWorkedOnDate.call(this, date) * this.payPerHour)
}

let findEmployeeByFirstName = function(srcArray, firstName){
    return srcArray.find(record => record.firstName == firstName)
}

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(pay_owed_for_everyone, employee){
        console.log(employee)
        console.log(pay_owed_for_everyone)
        return pay_owed_for_everyone + allWagesFor.call(employee)
        // pay owed from the collection so far plus new employees money owed
    }, 0)
}
// first time through is 0
// second time through is 1260 because they worked 28 hours at 45 an hour plus zero
// third time pay_owed_for_everyone = 1260 + new employees pay per hour 1155 = 2415
// use console.log and look in terminal to see what is going on



let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

// createEmployeeRecord(["Gray", "Worm", "Security", 1])
// createTimeInEvent("2015-02-28 1700")

