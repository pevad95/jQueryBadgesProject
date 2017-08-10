$(function() {

  $.ajax('https://www.codeschool.com/users/peter_vadasz.json', {
    dataType: 'jsonp',
    success: function(response) {
        for (badge of response.courses.completed) {
          var newBadge = $('<div></div>');
          newBadge.addClass('course');
          newBadge.append(badge);
          $("#badge").append(newBadge);
        }
    }
  });

});
