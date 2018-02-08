'use strict';
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
};

//Prototype
CreateStore.prototype.randomCustomerHr() = function () {
  for (var i = 0; i < hours.length; i++) {
    this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    console.log(this.randCustByHour[i]);
  }
};

//define method for random cookies per hour
CreateStore.prototype.calcCookiesSoldByHour() = function () {
  for (var j = 0; j < hours.length; j++) {
    this.cookiesSoldByHour.push(Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j]));
    console.log(this.cookiesSoldByHour[j])
  }
};

//Render function
CreateStore.prototype.render() = function () {
  var turtle = document.getElementById('turtle');
  var store2 = document.getElementById('store2');

  this.randomCustomerHr();
  this.calcCookiesSoldByHour();
  var h3Text = document.createElement('h3');

  h3Text.textContent = this.name;
  store2.appendChild(h3Text);
  for (var k = 0; k < hours.length; k++) {
    //stepping through the hours array
    var listContent = document.createElement('li');
    //creating li elements with text of the hours
    listContent.textContent =
      hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
    console.log(listContent);
    turtle.appendChild(listContent);
  }
};