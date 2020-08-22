// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
console.log(tableData);

// Populate sighting column values
tableData.forEach(function(sightings) {
    console.log(sightings);
    var row = tbody.append("tr");

    // HTML Console Log sightings
    Object.entries(sightings).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Submit Button
var submit = d3.select("#filter-btn");
submit.on("click", function() {
    //Reset Value
    tbody.html("");
    //Get date/time
    var datetime = d3.select("#datetime");
    var datetime = datetime.property("value");
    console.log(datetime);
    // Filter the data
    var filterdata = tableData.filter(sighting => sighting.datetime === datetime);
    console.log(filterdata);
    //Display the data
    filterdata.forEach(function(reporting) {
    console.log(reporting);
    var row = tbody.append("tr");

    Object.entries(reporting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
});