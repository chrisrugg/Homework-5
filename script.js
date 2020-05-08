/*
1.GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar*/

var fullDate = new Date()
console.log(fullDate);
//Thu May 19 2011 17:25:38 GMT+1000 {}
 
//convert month to 2 digits
var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
 
var currentDate = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
console.log(currentDate);
//19/05/2011


/*2.WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
*/



/*3.WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
*/


/*4.WHEN I click into a timeblock
THEN I can enter an event
*/



/*5. WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
*/


/*6. WHEN I refresh the page
THEN the saved events persist
*/