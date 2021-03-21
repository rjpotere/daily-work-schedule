$(document).ready(function(){

//add moment to html

var currentDay = $("#currentDay");

currentDay.text (moment().format("dddd MMMM Do, YYYY"));

})

