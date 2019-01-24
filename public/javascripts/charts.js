function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);

    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work',     11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7]
]);

    var options = {
        title: 'My Daily Activities',
        pieHole: 0.4,
    };
    var source   = document.getElementById('donutchart').innerHTML;
    var template = Handlebars.compile(source);
    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));

    var context = {donutchart: chart};
    var html    = template(context);
    document.getElementById('result').innerHTML = html;
    console.log(html);
    console.log();

    chart.draw(data, options);

}
var drawChart = function() {

}
loadScript("https://www.gstatic.com/charts/loader.js", drawChart());
