'use strict';
//global variables
var hours = ['6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//object literal
var store01 = {
  //define properties
  name: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,

  //define method for random customers per hour
  randomCustomerHr: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour -this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);}},

  //define method for random cookies per hour
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {this.cookiesSoldByHour.push(Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);}},

  render: function() {
    var store01 = document.getElementById('store01');
    var store1 = document.getElementById('store1');
    //calling the methods in the object literal
    this.randomCustomerHr();
    this.calcCookiesSoldByHour();
    var h3Text = document.createElement('h3');
    //give text to the new h3 element
    h3Text.textContent = this.name;
    store1.appendChild(h3Text);
    for (var k = 0; k < hours.length; k++) {
      //stepping through the hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent =
        hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      store01.appendChild(liEl);
    }}};
store01.render();


//object literal #2
var store02 = {
  //define properties
  name: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesSoldPerHour: 1.2,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method #1
  randomCustomerHr: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour -this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);}},
  //method #2
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {this.cookiesSoldByHour.push(Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);}},

  render: function() {
    var store02 = document.getElementById('store02');
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
      store02.appendChild(listContent);}}};

store02.render();

//object literal #3
var store03 = {
  //properties
  name: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesSoldPerHour: 3.7,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method #1
  randomCustomerHr: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour -this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);}},
  //method #2
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {this.cookiesSoldByHour.push(Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);}},

  render: function() {
    var store03 = document.getElementById('store03');
    var store3 = document.getElementById('store3');

    this.randomCustomerHr();
    this.calcCookiesSoldByHour();
    var h3Text = document.createElement('h3');

    h3Text.textContent = this.name;
    store3.appendChild(h3Text);
    for (var k = 0; k < hours.length; k++) {
      //stepping through the hours array
      var listContent = document.createElement('li');
      //creating li elements with text of the hours
      listContent.textContent =
        hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(listContent);
      store03.appendChild(listContent);}}};

store03.render();

//object literal #4
var store04 = {
  //properties
  name: 'Capital Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesSoldPerHour: 2.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method #1
  randomCustomerHr: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour -this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);}},
  //method #2
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {this.cookiesSoldByHour.push(Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);}},
  //list creation
  render: function() {
    var store04 = document.getElementById('store04');
    var store4 = document.getElementById('store4');
    this.randomCustomerHr();
    this.calcCookiesSoldByHour();
    var h3Text = document.createElement('h3');
    h3Text.textContent = this.name;
    store4.appendChild(h3Text);
    for (var k = 0; k < hours.length; k++) {
      //stepping through the hours array
      var listContent = document.createElement('li');
      //creating li elements with text of the hours
      listContent.textContent =
        hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(listContent);
      store04.appendChild(listContent);}}};
store04.render();

//object literal #5
var store05 = {
  //properties
  name: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesSoldPerHour: 4.6,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method #1
  randomCustomerHr: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour -this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);}},
  //method #2
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {this.cookiesSoldByHour.push(Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);}},
  //list creation
  render: function() {
    var store05 = document.getElementById('store05');
    var store5 = document.getElementById('store5');
    this.randomCustomerHr();
    this.calcCookiesSoldByHour();
    var h3Text = document.createElement('h3');
    h3Text.textContent = this.name;
    store5.appendChild(h3Text);
    for (var k = 0; k < hours.length; k++) {
      //stepping through the hours array
      var listContent = document.createElement('li');
      //creating li elements with text of the hours
      listContent.textContent =
        hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(listContent);
      store05.appendChild(listContent);}}};
store05.render();

