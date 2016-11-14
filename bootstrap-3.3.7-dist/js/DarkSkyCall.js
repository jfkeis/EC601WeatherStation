/// get lat and long
$(function(){
  
  var apiKey = '4c78ca50babe3d233150f3145b6f3613';
  var url = 'https://api.darksky.net/forecast/';
  //var lati = 0;
  //var longi = 0;
  var wd;
  /*
  function displayTemp(fTemp,c){
    if(c) return Math.round((fTemp-32)*(5/9))+" C";
    return (Math.round(fTemp) + " F")
  }
  */
  function render(wd){
    var currentlocationlat = wd.latitude;
    var currentlocationlon = wd.longitude;
    var currentweather = wd.currently.summary;
    var currenttemp = wd.currently.temperature;
    var high = wd.currently.apparentTemperature;
    var low = wd.currently.humidity;
    var icon = wd.currently.icon;
    var windSpeed = wd.currently.windSpeed;
    var windDir = wd.currently.windBearing;

    $('#currentLocation').html(currentlocationlat + " " + currentlocationlon);
    $('#currentTemp').html(currenttemp);
    $('#currentWeather').html(currentweather);
    $('#high-low').html(high + " / " + low);
    $('#currentWindSp').html(windSpeed + " mph");
    $('#currentWindDir').html(windDir + "°");


    $('#currentTemp').prepend('<img src="img/' + icon + '.png">')
  }

  $.getJSON('http://ipinfo.io', function(d){
    console.log("assigning the data...")
    loc = d.loc.split(",");
    console.log(loc)
  
    // call weather api
    //$.getJSON("http://api.openweathermap.org/data/2.5/weather?&units=imperial&lat=" + loc[0] + "&lon=" + loc[1] + "&APPID=" + API_KEY, function(apiData){
    $.getJSON("https://api.darksky.net/forecast/" + apiKey + "/" + loc[0] + "," + loc[1] + "?callback=?", function(apiData) {
              //console.log(apiData);
    wd = apiData;
       
    //console.log('got the data,',wd)
    //var currentweather = wd.currently.summary;
    //$('#currentWeather').html(currentweather);

    render(wd);
       
    $("#toggle").click(function(){
      cel = !cel;
      render(wd,cel);
      })
       
    })
  
  
  })
  
  
})