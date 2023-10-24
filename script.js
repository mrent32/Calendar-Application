// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



$(function () {
  let timeNow = dayjs().format('h:mm:s a');
  let thisHour = dayjs().format('H');
  function update() {
  var today = dayjs();
$('#currentDay').text(today.format('dddd, MMM D, YYYY h:mm:s a'));
now = dayjs();} setInterval(update, 1000);    
// Code below separates blocks into different colors depending on time status 

    function colorBlock() {
      $('.time-block').each(function() {
       let parse = (this.id.split('-')[1])
      const hourBlock = parseInt(parse);
      if (hourBlock < thisHour) {
        $(this.children[1]).toggleClass('past')
      } else if (hourBlock == thisHour) {
        $(this.children[1]).toggleClass('present')
      } else {
        $(this.children[1]).toggleClass('future')
      } 
      console.log(hourBlock, thisHour)
    });
    }

    function changeColor() {
      $('.time-block').each(function(){
        const hourBlock = parseInt(this.id)
        if(hourBlock < thisHour) {
          $(this).removeClass('present future').addClass('past');
        } else if (hourBlock === thisHour) {
          $(this).removeClass('past future').addClass('present');
        } else {
          $(this).removeClass('past present').addClass('future')
        }
      })
    }
    function saveEvent() {
      $('.time-block').each(function(){
        let block = this.id;
        let event = localStorage.getItem(block);
        event =  $(this).find('.description').val(event);

      });
    }
    function events() {
      $('.saveBtn').on('click', function() {
      let block = $(this).parent().attr('id');
      let event = $(this).siblings('.description').val();
      localStorage.setItem(block, event);
    });
  }
 
   colorBlock()
   changeColor()
   events()
   saveEvent()
});

 // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.