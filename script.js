
  // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
  // the code isn't run until the browser has finished rendering all the elements
  // in the html.Add a listener for click events on the save button.
$(document).ready(function() {
  
  const containerText = $('.p-5');
  const saveButton = $('.saveBtn');
  const agendaText = $('#agenda-notice');
  
  $(".saveBtn").click(function () {
    const timeBlockId = $(this).closest('.time-block').attr('id');
    const userInput = $(this).siblings("textarea").val();
    saveUserInput(timeBlockId, userInput);
    agendaText.html("agenda save");
    console.log($(this))
    console.log($(this).siblings("textarea").val())
  });

  if (containerText.length > 0) {
    console.log('Found containerText element:', containerText);
  } else {
    console.log('Container element not found.');
  }

  // Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
    const currentHour = dayjs().hour();
  
    $('.time-block').each(function() {
      const timeBlockHour = parseInt($(this).attr('id').split('-')[1]);
      const textarea = $(this).find('textarea');

      if (timeBlockHour < currentHour) {
        textarea.addClass('.past').removeClass('present future');
      } else if (timeBlockHour === currentHour) {
        textarea.addClass('.present').removeClass('past future');
      } else {
        textarea.addClass('.future').removeClass('past present');
      }
  });

  // Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 

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

  // Add code to display the current date in the header of the page.

  const currentElement = $('#currentDay');
  const today = dayjs();

  currentElement.text(today.format('MMM D, YYYY'));
  console.log('current day:', today.format('MMM D, YYYY'));
});

