$(function() {

  $.ajax('https://www.codeschool.com/users/peter_vadasz.json', {
    dataType: 'json',
    success: function(response) {
        for (badge of response.courses.completed) {
          var newBadge = $('<div class = "course"></div>');
          newBadge.append(badge);
          $("#badge").append(newBadge);
        }
    }
  });

});
