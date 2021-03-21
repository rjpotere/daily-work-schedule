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


$('#hour-09 .task').val(localStorage.getItem("hour-09"));
$('#hour-10 .task').val(localStorage.getItem("hour-10"));
$('#hour-11 .task').val(localStorage.getItem("hour-11"));
$('#hour-12 .task').val(localStorage.getItem("hour-12"));
$('#hour-13 .task').val(localStorage.getItem("hour-13"));
$('#hour-14 .task').val(localStorage.getItem("hour-14"));
$('#hour-15 .task').val(localStorage.getItem("hour-15"));
$('#hour-16 .task').val(localStorage.getItem("hour-16"));
$('#hour-17 .task').val(localStorage.getItem("hour-17"));


var taskArea = $(".task")
//show colors based on time of day

function changeColor() {
    var currentTime = parseInt(moment().format('H'));

    $(taskArea).each(function(){
        //for every time-block class
        var workList = parseInt($(this).attr('id').split('-')[1]);
        console.log(workList)

        console.log(currentTime)

        if (currentTime > workList) {
            $(this).addClass('past')
        } 
        if (currentTime === workList) {
            $(this).addClass('present')

        }

        if (currentTime < workList) {$(this).addClass('future')}

    })

}
changeColor();
})

