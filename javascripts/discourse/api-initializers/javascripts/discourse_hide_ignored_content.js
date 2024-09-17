$(document).ready(function() {
  // Get ignored user IDs
  var ignoredUserIds = Discourse.SiteSettings.ignoredUsers;

  // Hide direct posts and references
  $('.TopicPost').each(function() {
    var userId = $(this).data('user-id');
    var content = $(this).text();

    if (ignoredUserIds.includes(userId)) {
      $(this).hide();
    } else {
      ignoredUserIds.forEach(function(ignoredId) {
        if (content.includes(ignoredId)) {
          $(this).find(`.quote[data-quoted-user-id="${ignoredId}"]`).hide();
          // Add more logic to handle mentions and other references
        }
      });
    }
  });

  // Handle new posts
  Discourse.Live.on('post:new', function(data) {
    // Apply the same logic to the new post
  });
});
