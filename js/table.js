'use strict';
//table data

//global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storeLocations = [];

function CreateStore(name, minCustPerHour, maxCustPerHour, avgCookiesPerDay) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerDay = avgCookiesPerDay;
  //array
  this.randCustByHour = [];
  this.calcCookiesSoldByHour = [];
  this.totalCookies = 0;
}

//Prototype
CreateStore.prototype.randomCustomerHr = function () {
  for (var i = 0; i < hours.length; i++) {
    this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    console.log(this.randCustByHour[i]);
  }
};

//define method for random cookies per hour
CreateStore.prototype.calcCookiesSoldByHour = function () {
  for (var j = 0; j < hours.length; j++) {
    this.cookiesSoldByHour.push(Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j]));
    console.log(this.cookiesSoldByHour[j]);
  }
};

//Render function
CreateStore.prototype.render = function () {
  var salmonTable = getElementById('salmonTable');
  var store2 = document.getElementById('store2');

  this.randomCustomerHr();
  this.calcCookiesSoldByHour();
  var tableRow = document.createElement('tr');

  tableRow.textContent = this.name;
  store2.appendChild(tableRow);
  for (var k = 0; k < hours.length; k++) {
    //stepping through the hours array
    var listContent = document.createElement('li');
    //creating li elements with text of the hours
    listContent.textContent =
      hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
    console.log(listContent);
    newStore.appendChild(listContent);
  }
};

//generate
new CreateStore('Alki', 2, 16, 4.6);
new CreateStore('Seattle Center', 11, 38, 3.7);
new CreateStore('SeaTac Airport', 3, 24, 1.2);
new CreateStore('Capitol Hill', 20, 38, 2.3);
new CreateStore('1st & Pike', 23, 65, 6.3);



var stuffForFirstRow = hours;
var stuffForSecondRow = new CreateStore;

//access the table element in the html
var tableEl = document.getElementById('salmonTable');

function tableRowMaker(inputArray) {
  //make a table row
  var trEl = document.createElement('tr');
  //iterate through array
  for (var i = 0; i < inputArray.length; i++) {
    var tdEl = document.createElement('td'); //create
    tdEl.textContent = inputArray[i]; //content
    trEl.appendChild(tdEl); //add cell to the row
  }
  tableEl.appendChild(trEl); //add row to the table
}
tableRowMaker(stuffForFirstRow);
tableRowMaker(stuffForSecondRow);