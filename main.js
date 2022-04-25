$(document).ready(function() {
    $.getJSON("./data.json", function(data) {
        var topSpotsData = '';
   
    // interate through the data array 
    // create a table row for each spot 
    // create a link to the location using long and lat 
   
    $.each(data, function(key,value) {
        topSpotsData += '<tr>';
        topSpotsData += '<td>' +value.name+'</td>';
        topSpotsData += '<td>' +value.description+'</td>';
        topSpotsData += '<td> <a href="https://www.google.com/maps?q=' +value.location+ '">' + "<button>View on Google Maps</button>" + '</a></td>';
        topSpotsData += '</tr>';
    });
    $('#top-spots-table').append(topSpotsData);
});
});