$(document).ready(function(){

//add moment to html

var currentDay = $('#currentDay');

currentDay.text (moment().format('dddd MMMM Do, YYYY'));

//when save button is clicked, save tasks to local storage

$('.saveBtn').on('click',function() {
    var task = $(this).siblings('.task').val();
    var time = $(this).parent().attr('id');
//save in local storage -- task, time
     localStorage.setItem(time,task);
    
})


$('#hour-09 .task').val(localStorage.getItem('hour-09'));
$('#hour-10 .task').val(localStorage.getItem('hour-10'));
$('#hour-11 .task').val(localStorage.getItem('hour-11'));
$('#hour-12 .task').val(localStorage.getItem('hour-12'));
$('#hour-13 .task').val(localStorage.getItem('hour-13'));
$('#hour-14 .task').val(localStorage.getItem('hour-14'));
$('#hour-15 .task').val(localStorage.getItem('hour-15'));
$('#hour-16 .task').val(localStorage.getItem('hour-16'));
$('#hour-17 .task').val(localStorage.getItem('hour-17'));

//show colors based on time of day.
var taskArea = $('.task')


//transform time into interger for comparison with hour ID tag
function changeColor() {
    var currentTime = parseInt(moment().format('H'));

    $(taskArea).each(function(){
        //for each id of taskArea, transform it into an integer for comparison with moment().

        var workList = parseInt($(this).attr('id').split('-')[1]); //splitting the id at the '-' and selecting the second string, then turning into an integer. 

        //console log worklist and currentime to ensure they both show as intergers.
        console.log(workList)

        console.log(currentTime)

        if (currentTime > workList) {
            $(this).addClass('past') //condition to color task blocks grey.
        } 
        if (currentTime === workList) {
            $(this).addClass('present')//condition to color task blocks red.
        }

        if (currentTime < workList) {$(this).addClass('future')}//condition to color task blocks green.

    })

}
changeColor();
})

