$(document).ready(function () {
  // Display the current date in the header of the page
  const currentDate = dayjs().format('MMMM D, YYYY');
  $('#currentDay').text(currentDate);

  function applyTimeClass() {
    // Get the current hour in 24-hour time format
    const currentHour = dayjs().hour();

    // Apply the past, present, or future class to each time block
    $('.time-block').each(function () {
      const hour = parseInt($(this).attr('id').split('-')[1]);

      if (hour < currentHour) {
        $(this).addClass('past');
      } else if (hour === currentHour) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
    });
  }

  function loadSavedData() {
    // Get any user input that was saved in localStorage and set the values of the corresponding textarea elements
    $('.time-block').each(function () {
      const id = $(this).attr('id');
      const savedDescription = localStorage.getItem(id);

      if (savedDescription) {
        $(this).find('textarea').val(savedDescription);
      }
    });
  }

  // Add a listener for click events on the save button
  $('.saveBtn').on('click', function () {
    // Get the id of the time-block containing the clicked button
    const timeBlockId = $(this).closest('.time-block').attr('id');

    // Save the user input in localStorage using the id as a key
    const description = $(this).siblings('textarea').val();
    localStorage.setItem(timeBlockId, description);
  });

  // Initialize the page
  applyTimeClass();
  loadSavedData();
});
