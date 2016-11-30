
        var ctx = document.getElementById("lineChart").getContext("2d");
        var myLineChart = new Chart(ctx, {
          responsive: true, 
          scaleFontColor: "#FFFFFF",
          type: 'line',
          data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "Temperature",
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
                    data: [35, 33, 38, 45, 60, 67, 77],
                    spanGaps: false,
                },
                {
                    label: "Feels Like",
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
                    data: [30, 31, 37, 45, 63, 72, 85],
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

/**
$(function () {
  var ctx = $('lineChart');
  var graph = new Chart(ctx,{
    type:"line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
          {
              label: "My First dataset",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(150,192,192,0.4)",
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
              data: [64, 58, 81, 83, 55, 52, 43],
              spanGaps: false,
          },
          {
              label: "My First dataset",
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
              data: [65, 59, 80, 81, 56, 55, 40],
              spanGaps: false,
          }
      ]
    }
  })
  var option = {};

  var ctx = document.getElementById("lineChart").getContext('2d');
  var myLineChart = new Chart(ctx).Bar(data, option);
})(jQuery); **/