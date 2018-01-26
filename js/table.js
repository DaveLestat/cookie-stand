'use strict';
//table data

//State the variables
var empty = '';
var hours = [empty,'6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var secondRowData = ['table', 3, 5, 7, 9, 1];

var locationStores = [];

//first object
function Store(name, minCustomers, maxCustomers, avgCookies) {
  //State the properties
  this.name = name,
  this.minCustomers = minCustomers,
  this.maxCustomers = maxCustomers,
  this.avgCookies = avgCookies,
  //State the methods or functions within the object
  this.avgCustomersHr();
  this.avgCookiesHr();
  this.avgCookiesDay();

  locationStores.push(this);
}


//access the table element in the html
var tableEl = document.getElementById('coffeeTable');
function tableRowMaker(operationalHrs) {
  //make a table row
  var trEl = document.createElement('tr');
  //iterate through array
  for (var i = 0; i < operationalHrs.length; i++) {
    var tdEl = document.createElement('td'); //create
    tdEl.textContent = operationalHrs[i]; //content
    trEl.appendChild(tdEl); //add cell to the row
  }
  tableEl.appendChild(trEl); //add row to the table
}
tableRowMaker(hours);
tableRowMaker(secondRowData);


