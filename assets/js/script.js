var lat,lon;

getLocation();

function getLocation() {
    
    $.get("http://ipinfo.io", function(location) {
        lat = location.loc.split(",")[0];
        lon = location.loc.split(",")[1];
        getWeather(); 
    }, 'jsonp');
  }
function getWeather() {
    $.ajax({

  type: 'GET',
        
  url: 'https://api.darksky.net/forecast/033a91d5689b73adbbc6ce3894f51d04/'+lat+','+lon,

  contentType: 'text/plain',

  xhrFields: {
    
    withCredentials: false
  },
        
  crossDomain: true,
        
  dataType: 'jsonp',

  success: function(data) {
    
      $("body").html(JSON.stringify(data));
  },

  error: function() {
      
      alert("ERROR!");
  }
});
}
