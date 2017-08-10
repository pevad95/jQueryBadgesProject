$(function() {

  $.ajax('https://www.codeschool.com/users/peter_vadasz.json', {
    dataType: 'jsonp',
    success: function(response) {
        for (badge of response.courses.completed) {
          var newBadge = $('<div></div>');
          newBadge.addClass('course');
          var title = $('<h3></h3>');
          title.text(badge.title);
          newBadge.append(title);
          newBadge.append($('<img src = "' + badge.badge + '">'));
          newBadge.append($('<a href = "' + badge.url + '" target = "_blank class = "btn" class = "btn-primary">See course</a>'))
          $("#badges").append(newBadge);
        }
    }
  });

});
