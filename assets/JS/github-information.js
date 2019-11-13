function userInformationHTML(user) {
  return `
  <h2>${user.name}
    <span class="small-name>
        (@<a href="${user.html_url}" target="_blank">${user.login}</a>)
    </span>
  </h2>
  <div class="gh-content">
    <div class="gh-avatar">
      <a href="${user.html_url} target="_blank">
        <img src="${user.avatar_url}" width="80" height="80" alt="${user.login}" />
      </a>
    </div>
    <p>Followers: ${users.followers} - Following: ${user.following} <br> Repos: ${user.public_repos}</p>
  </div>`
}

function fetchGitHubInformation(event) {
  var username = $("#gh-username").val();
  if (!username) {
    $("#gh-user-data").html(`<h3>Please enter a Github username </h3>`)
    return;
  }

  $("#gh-user-data").html(
    `<div id="loader">
      <img src="assets/css/loader.gif" alt="loading..." />
    </div>`)

  //Promise
  $.when(
    //When we have retrieved the JSON data from github
    $.getJSON(`https://api.github.com/users/${username}`)
  ).then(
    //The response here is the information we get back from github
    //It's input automatically into this 'then' function
    function (response) {
      var userData = response;
      $("#gh-user-data").html(userInformationHTML(userData));
      //If we get an error
    }, function (errorResponse) {
      if (errorResponse.status === 404) {
        $("#gh-user-data").html(
          `<h3>No information found for user ${username}</h3>`);
      } else {
        console.log(errorResponse);
        $("#gh-user-data").html(
          `<h3>Error: ${errorResponse.responseJSON.message}</h3>`);
      }
    }
  )
}