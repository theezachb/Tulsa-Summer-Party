"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Zach Beck
   Date:   7/6/21

*/

// Calls the showClock() function.
  showClock();
  
// Command that runs the showClock() function every second.
  setInterval("showClock()", 1000);

// A function called showClock() with no parameters.
function showClock() {
	
/* A varaible named thisDay that stores a Date object with the date 
and time May 19, 2018 9:31:27 */
	var thisDay = new Date("May 19, 2018 9:31:27");

/* Variables declared localDate and localTime. These variables contain
the text of the date from the thisDay variable using local conventions. */
	var localDate = thisDay.toLocaleDateString();
	var localTime = thisDay.toLocaleTimeString();
	
/* Using the ID currentTime, this changes the innerHTML in the span elements
to what is stored in the Date object. */
  document.getElementById("currentTime").innerHTML = "<span>" + localDate + "</span>" + "<span>" + localTime + "</span>";

/* Calls the nextJuly4 function using thisDay as the parameter and stores
the date as the variable j4Date. */
  var j4Date = nextJuly4(thisDay);

/* Uses the .setHours() method to j4Date variable to change the hours value
to 9pm but uses the 24-hour time. (21 = 9pm). 0, 0 is the mins and secs */
  j4Date.setHours(21, 0, 0);


/* Calculate the days until July 4th */
  var days = (j4Date - thisDay)/(1000*60*60*24);

/* Calculate the hours left in the current day */
  var hrs = (days - Math.floor(days))*24;
	
/* Calculate the minutes and seconds left in the current hour */
  var mins = (hrs - Math.floor(hrs))*60;
  var secs = (mins - Math.floor(mins))*60;
	
	
/* Display the time left until July 4th */
  document.getElementById("dLeft").textContent = Math.floor(days);
  document.getElementById("hLeft").textContent = Math.floor(hrs);
  document.getElementById("mLeft").textContent = Math.floor(mins);
  document.getElementById("sLeft").textContent = Math.floor(secs);
	
}



function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}
