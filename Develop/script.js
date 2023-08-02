
  // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
  // the code isn't run until the browser has finished rendering all the elements
  // in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //container-fluid px-5 <button class="btn saveBtn col-2

  const containerText = $('.px-5');
  const saveButton = $('.saveBtn');
  const agendaText = $('#agenda-notice');
  
  $(".saveBtn").click(function() {
    agendaText.html("agenda save");
  });
  
  $(".saveBtn").click(function () {
    console.log($(this))
    console.log($(this).siblings("textarea").val())
  });
  if (containerText.length > 0) {
    console.log('Found containerText element:', containerText);
  } else {
    console.log('Container element not found.');
  }



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
  function saveUserInput(key, value) {
    localStorage.setItem(key, value);
  }

  function getUserInput(key) {
    return localStorage.getItem(key);
  }

  function updateTextareas() {
    $('.time-block').each(function(){
      const id = this.id;
      const textarea = $(this).find('textarea');
      const userInput = getUserInput(id);
      if (userInput !== null) {
        textarea.val(userInput);
      }
    });
  }
  updateTextareas();

  // TODO: Add code to display the current date in the header of the page.

  const currentElement = $('#currentDay');
  const today = dayjs();

  currentElement.text(today.format('MMM D, YYYY'));
  console.log('current day:', today.format('MMM D, YYYY'))
})

