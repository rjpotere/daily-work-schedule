$(document).ready(function(){

//add moment to html

var currentDay = $("#currentDay");

currentDay.text (moment().format("dddd MMMM Do, YYYY"));

//when save button is clicked, save tasks to local storage

$('.saveBtn').on('click',function() {
    var task = $(this).siblings('.task').val();
    var time = $(this).parent().attr('id');
//save in local storage -- task, time
     localStorage.setItem(time,task); 
})

})

