document.addEventListener('DOMContentLoaded', function () {
    // Get the Google and Facebook links by their IDs
    var googleLink = document.getElementById('google-link');
    var facebookLink = document.getElementById('facebook-link');

    // Add click event listener for the Google link
    googleLink.addEventListener('click', function (event) {
        // Prevent the default behavior of the link
        event.preventDefault();
        // Redirect the user to Google
        window.location.href = 'https://www.google.com';
    });

    // Add click event listener for the Facebook link
    facebookLink.addEventListener('click', function (event) {
        // Prevent the default behavior of the link
        event.preventDefault();
        // Redirect the user to Facebook
        window.location.href = 'https://www.facebook.com';
    });
});