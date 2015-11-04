var table = document.getElementById('shops');
var hours = ['10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p'];

var CookieStand = function (storeLocation, hoursOpen, minCustumerHr, maxCustumerHr, avgPerCust) {
  this.storeLocation = storeLocation;
  this.hoursOpen = hoursOpen;
  this.minCustumerHr = minCustumerHr;
  this.maxCustumerHr = maxCustumerHr;
  this.avgPerCust = avgPerCust;
  this.perHour = [];

  this.randomCustHour =  function() {
    return Math.floor(Math.random() * (this.maxCustumerHr - this.minCustumerHr + 1) + this.minCustumerHr );
  }

  this.CookiesPerHour = function() {
    return Math.floor(this.randomCustHour() * this.avgPerCust);
  }

  this.CookiesHour = function() {
    for (i = 0; i < this.hoursOpen; i++){
      this.perHour.push(this.CookiesPerHour());
    }
  }

  this.totalDaily = function() {
    var total = 0;
    for (i = 0; i < this.hoursOpen; i++) {
      total += this.perHour[i]
    }
    return total;
  }

  this.render = function() {
    this.CookiesHour();

    // for each cookie stand
    for (var i=0; i< allCookieStands.length; i++){
      // make a row
      var tr = document.createElement('tr');

      // make a cell containing its name
      var td = document.createElement('td');
      td.innerHTML=this.storeLocation;
      // put the cell into the row
      tr.appendChild(td);

      for (var i = 0; i < this.perHour.length; i++) {
        var td = document.createElement('td');
        td.innerHTML=this.perHour[i];
        tr.appendChild(td);
      }

      var dailyTotal = document.createElement('td');
      dailyTotal.innerHTML = this.totalDaily();
      tr.appendChild(dailyTotal);


      table.appendChild(tr);
    }


  }

}


function makeTable(){
  var thead = document.createElement('thead')
  var blankCell = document.createElement('td')
  thead.appendChild(blankCell);

  for (var i = 0; i < hours.length; i++) {
    var td = document.createElement('td');
    td.innerHTML = hours[i];
    thead.appendChild(td);
  }

  var td = document.createElement('td');
  td.innerHTML = "total"
  thead.appendChild(td);
  table.appendChild(thead);
}

var pikePlace = new CookieStand("Pike Place", 8, 17, 88, 5.2);
var SeaTacAirport = new CookieStand("SeaTac Airport", 8, 6, 44, 1.2);
var SouthcenterMall = new CookieStand("South Center Mall", 8, 11, 38, 1.9);
var BellevueSquare = new CookieStand("Bellevue Square", 8, 20, 48, 33);
var Alki = new CookieStand("Alki", 8, 3, 24, 2.6);
var allCookieStands = [pikePlace, SeaTacAirport, SouthcenterMall, BellevueSquare, Alki];

makeTable();
pikePlace.render();
SeaTacAirport.render();
SouthcenterMall.render();
BellevueSquare.render();
Alki.render();

