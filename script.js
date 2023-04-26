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
  }});
