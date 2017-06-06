var lat,lon;

getLocation();

function getLocation() {
    
    $.get("http://ipinfo.io", function(location) {
      lat = location.loc.split(",")[0];
      lon = location.loc.split(",")[1];
      console.log(lat + " " + lon);
        getWeather();
    }, 'jsonp');
  }
function getWeather() {
    $.ajax({

  // The 'type' property sets the HTTP method.
  // A value of 'PUT' or 'DELETE' will trigger a preflight request.
  type: 'GET',

  // The URL to make the request to.
  url: 'https://api.darksky.net/forecast/033a91d5689b73adbbc6ce3894f51d04/'+lat+','+lon,

  // The 'contentType' property sets the 'Content-Type' header.
  // The JQuery default for this property is
  // 'application/x-www-form-urlencoded; charset=UTF-8', which does not trigger
  // a preflight. If you set this value to anything other than
  // application/x-www-form-urlencoded, multipart/form-data, or text/plain,
  // you will trigger a preflight request.
  contentType: 'text/plain',

  xhrFields: {
    // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
    // This can be used to set the 'withCredentials' property.
    // Set the value to 'true' if you'd like to pass cookies to the server.
    // If this is enabled, your server must respond with the header
    // 'Access-Control-Allow-Credentials: true'.
    withCredentials: false
  },

  headers: {
    // Set any custom headers here.
    // If you set any non-simple headers, your server must include these
    // headers in the 'Access-Control-Allow-Headers' response header.
  },

  success: function(data) {
    // Here's where you handle a successful response.
      $("body").html(JSON.stringify(data));
  },

  error: function() {
    // Here's where you handle an error response.
    // Note that if the error was due to a CORS issue,
    // this function will still fire, but there won't be any additional
    // information about the error.
      alert("ERROR!");
  }
});
}
