$.ajax({
  url: 'some_unknown_page.html',
  success: function (response) {
      $('#post').html(response.responseText);
  },
  error: function (jqXHR, exception) {
      var msg = '';
      if (jqXHR.status === 0) {
          msg = 'Not connect.\n Verify Network.';
      } else if (jqXHR.status == 404) {
          msg = 'Requested page not found. [404]';
      } else if (jqXHR.status == 500) {
          msg = 'Internal Server Error [500].';
      } else if (exception === 'parsererror') {
          msg = 'Requested JSON parse failed.';
      } else if (exception === 'timeout') {
          msg = 'Time out error.';
      } else if (exception === 'abort') {
          msg = 'Ajax request aborted.';
      } else {
          msg = 'Uncaught Error.\n' + jqXHR.responseText;
      }
      $('#post').html(msg);
  },
});


// Simple Ajax request success error handler.
// Handles network, 404 and Uncaught error messges in responseText form.
$.ajax({
  url: 'myspace_homepage_2001.html',
  success: function (response) {
    $('#post').html(response.responseText);
  },
  error: function(jqXHR, exception){
    var msg = '';
    if (jqXHR.status === 0){
      ms = 'Not connected.\n Verify Network.';
    }
    else if (jqXHR.status == 404){
      msg = 'Requested page not found. (Error: 404)';
    }
    else {
      msg = 'Uncaught Error' + jqXHR.responseText;
    }
    $('#post').html(msg);
  }
});
