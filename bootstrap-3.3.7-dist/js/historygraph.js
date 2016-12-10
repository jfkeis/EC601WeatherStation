var apiKey = '4c78ca50babe3d233150f3145b6f3613';
var url = 'https://api.darksky.net/forecast/';
//var lati = 0;
//var longi = 0;
var wd;
var fb;
var seconds = new Date().getTime() / 1000;
seconds = Math.round(seconds)
var templist = [];
var timelist = [];
var pilist = [];

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
  return time;
}

function render(wd,fb){
  var currentlocationlat = wd.latitude;
  var currentlocationlon = wd.longitude;
  var currentweather = wd.currently.summary;
  var currenttemp = wd.currently.temperature;
  var feels = wd.currently.apparentTemperature;
  var humidity = wd.currently.humidity;
  var icon = wd.currently.icon;
  var windSpeed = wd.currently.windSpeed;
  var windDir = wd.currently.windBearing;

  for (i = 0; i < 24; i++) {
    templist.push(Math.round(wd.hourly.data[i].temperature));
    
    timelist.push(timeConverter(wd.hourly.data[i].time).toString());
  }

  pilist.push(fb.hourly.hour.temperature);
  pilist.push(fb.hourly.hour1.temperature);
  pilist.push(fb.hourly.hour2.temperature);
  pilist.push(fb.hourly.hour3.temperature);
  pilist.push(fb.hourly.hour4.temperature);
  pilist.push(fb.hourly.hour5.temperature);
  pilist.push(fb.hourly.hour6.temperature);
  pilist.push(fb.hourly.hour7.temperature);
  pilist.push(fb.hourly.hour8.temperature);
  pilist.push(fb.hourly.hour9.temperature);
  pilist.push(fb.hourly.hour10.temperature);
  pilist.push(fb.hourly.hour11.temperature);
  pilist.push(fb.hourly.hour12.temperature);
  pilist.push(fb.hourly.hour13.temperature);
  pilist.push(fb.hourly.hour14.temperature);
  pilist.push(fb.hourly.hour15.temperature);
  pilist.push(fb.hourly.hour16.temperature);
  pilist.push(fb.hourly.hour17.temperature);
  pilist.push(fb.hourly.hour18.temperature);
  pilist.push(fb.hourly.hour19.temperature);
  pilist.push(fb.hourly.hour20.temperature);
  pilist.push(fb.hourly.hour21.temperature);
  pilist.push(fb.hourly.hour22.temperature);
  pilist.push(fb.hourly.hour23.temperature);


  $('#currentLocation').html(currentlocationlat + ", " + currentlocationlon);
  $('#currentIcon').html("");
  $('#currentTemp').html(currenttemp + "°F");
  $('#currentWeather').html(currentweather);
  $('#currentFeels').html(feels + "°F");
  $('#currentHumidity').html(Math.round(humidity*100) + "%");
  $('#currentWindSp').html(windSpeed + " mph");
  $('#currentWindDir').html(windDir + "°");

  $('#currentIcon').prepend('<img src="img/' + icon + '.png">');

  var ctx = document.getElementById("lineChart").getContext("2d");
  var myLineChart = new Chart(ctx, {
    responsive: true, 
    scaleFontColor: "#FFFFFF",
    type: 'line',
    data: {
      labels: timelist,
      datasets: [
          {
              label: "DarkSky Data",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(0,0,0 ,0.4)",
              borderColor: "rgba(0,0,0,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(0,0,0,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(0,0,0,1)",
              pointHoverBorderColor: "rgba(0,0,0,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: templist,
              spanGaps: false,
          },
          {
              label: "Pi Data",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: pilist,
              spanGaps: false,
          }
        ]
      },
      options: { 
        legend: {labels:{fontColor:"white", fontSize: 14}},
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 12,
                    stepSize: 10,
                    beginAtZero:true
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 14,
                    stepSize: 1,
                    beginAtZero:true
                }
            }]
        }
      }
  })
}

$.getJSON('http://ipinfo.io', function(d){
  console.log("assigning the data...")
  loc = d.loc.split(",");
  console.log(loc)
  // call weather api
  //$.getJSON("http://api.openweathermap.org/data/2.5/weather?&units=imperial&lat=" + loc[0] + "&lon=" + loc[1] + "&APPID=" + API_KEY, function(apiData){
  $.getJSON("https://api.darksky.net/forecast/" + apiKey + "/" + loc[0] + "," + loc[1] + "," + seconds +"?callback=?", function(apiData) {
            //console.log(apiData);
  wd = apiData;
  
    $.getJSON("https://weathernow-db3fe.firebaseio.com/.json", function(firebase) {
    
    fb = firebase;
    
    console.log(fb);

    render(wd,fb);

    })

  })

})

