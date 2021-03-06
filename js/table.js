'use strict';


//Global Variables

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var locations = [];
var salesTable = document.getElementById('salesTable');
var addNewStore = document.getElementById('addNewStore');

//constructor
function newStore(name, minCustomers, maxCustomers, avgCookies) {
  //Properties
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.averageCustomersPerHour = [];
  this.averageCookiesPerHour = [];
  this.totalCookiesPerDay = 0;
  //functions
  this.avgCustPerHr();
  this.cookiesPerCustomer();
  //push into constructor
  locations.push(this);
}

newStore.prototype.avgCustPerHr = function() {
  for (var i = 0; i < hours.length; i++) {
    var hourlyCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    this.averageCustomersPerHour.push(hourlyCustomers);
  }
};
newStore.prototype.cookiesPerCustomer = function() {
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.averageCustomersPerHour[i] * this.avgCookies);
    this.averageCookiesPerHour.push(singleHourCookies);
    this.totalCookiesPerDay += singleHourCookies;
  }
};

newStore.prototype.create = function() {
  var trRowName = document.createElement('tr');
  var tdStore = document.createElement('td');
  tdStore.textContent = this.name;
  trRowName.appendChild(tdStore);
  for (var i = 0; i < hours.length; i++) {
    var tdCell = document.createElement('td');
    tdCell.textContent = this.averageCookiesPerHour[i];
    trRowName.appendChild(tdCell);
  }
  var tdTotal = document.createElement('td');
  tdTotal.textContent = this.totalCookiesPerDay;
  trRowName.appendChild(tdTotal);
  salesTable.appendChild(trRowName);
};

//create table header
function makeHeaderRow() {
  var tableRow = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'Location';
  salesTable.appendChild(tableRow);
  tableRow.appendChild(thElement);
  for (var i = 0; i < hours.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    tableRow.appendChild(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = 'Location Total';
  tableRow.appendChild(thElement);
  console.log(salesTable);
  salesTable.appendChild(tableRow);
}

function createStore() {
  for (var i = 0; i < locations.length; i++) {
    locations[i].create();
  }
}
function makeTotalsRow() {
  var tableRow = document.createElement('tr');
  tableRow.textContent = 'Totals';
  salesTable.appendChild(tableRow);
  var dailyStoresTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    var totalHourlySales = 0;
    for (var j = 0; j < locations.length; j++) {
      totalHourlySales = totalHourlySales + locations[j].averageCookiesPerHour[i];
      dailyStoresTotal += locations[j].averageCookiesPerHour[i];
    }
    var tdElement = document.createElement('td');
    tdElement.textContent = totalHourlySales;
    tableRow.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = dailyStoresTotal;
  tableRow.appendChild(tdElement);
}

//newStore Object Declarations
function letsCreateAnewStore(){
  new newStore('1st & Pike', 23, 65, 6.3);
  new newStore('Seattle Center', 11, 38, 3.7);
  new newStore('Alki', 2, 16, 4.6);
  new newStore('SeaTac Airport', 3, 24, 1.2);
  new newStore('Capitol Hill', 20, 38, 2.3);
}
letsCreateAnewStore();
console.log('new store created');

makeHeaderRow();
createStore();
makeTotalsRow();

//form setup
function submitNewStore(event) {
  event.preventDefault(); //prevents page re-load on a submittal
  console.log('"submit" even executed');
  if(!event.target.name.value || !event.target.minCustomers.value || !event.target.maxCustomers.value || !event.target.avgCookies.value) {
    return alert('Please fill in ALL boxes');
  }
  var name = event.target.name.value;
  console.log(event.target.name);
  var minCustomers = parseInt(event.target.minCustomers.value);
  var maxCustomers = parseInt(event.target.maxCustomers.value);
  var avgCookies = parseFloat(event.target.avgCookies.value);

  event.target.name = null;
  event.target.minCustomers = null;
  event.target.maxCustomers = null;
  event.target.avgCookies = null;

  var newStoreInput = new newStore(name, minCustomers, maxCustomers, avgCookies);

  salesTable.textContent = null;//keeps the table from replicating over and over!

  makeHeaderRow();
  createStore();
  makeTotalsRow();
  console.log('new store submitted!');
}

addNewStore.addEventListener('submit', submitNewStore);