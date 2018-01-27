var store02 = {
  //define properties
  name: 'SeaTac Airport',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesSoldPerHour: 6.3,
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