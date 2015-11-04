var pikePlace = {
  store Location:'Pike Place',
  domId:document.getElementById('PikePlaceMarket')
  minCustumerHr:17,
  maxCustumerHr:88,
  avgPerCost:5.2,
  CookiesPerHour:[],
  randomCustHour: function() {
  return Math.floor(Math.random() * (this.maxCustumerHr - this.minCustumerHr + 1) + this.minCustumerHr );
  },

 CookiesCustHour:function() {
  for (var i = 0; i <= 8; i++){
  this.CookiesPerHour.push(Math.floor(this.randomCustHour() * this.avgPerCost));
  console.log(this.CookiesPerHour); }

 //    return (Math.floor(this.randomCustHour() * this.avgPerCost));
 // }
}
 }
}
pikePlace.CookiesCustHour();




var SeaTacAirport = {
  minCustumerHr:6,
  maxCustumerHr:44,
  avgPerCost:1.2,
  CookiesPerHour:[],
  randomCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustumerHr - this.minCustumerHr + 1) + this.minCustumerHr);
  },

  CookiesCustHour:function() {
    for (var i = 0; i <= 8; i++) {
      this.CookiesPerHour.push(Math.floor(this.randomCustHour() * this.avgPerCost));
      console.log(this.CookiesPerHour);
    }
  }
}
  
SeaTacAirport.CookiesCustHour();

var SouthcenterMall = {
  minCustumerHr:11,
  maxCustumerHr:38,
  avgPerCost:1.9,
  CookiesPerHour:[],
  randomCustHour:function() {
    return Math.floor(Math.random() * (this.maxCustumerHr - this.minCustumerHr + 1) + this.minCustumerHr);
  },
  CookiesCustHour:function() {
    for (var i = 0; i <= 8; i++) {
      this.CookiesPerHour.push(Math.floor(this.randomCustHour() * this.avgPerCost));
      console.log(this.CookiesPerHour);
    }
  }
}

var BellevueSquare = {
  minCustumerHr:20,
  maxCustumerHr:48,
  avgPerCost:3.3,
  CookiesPerHour:[],
  randomCustHour:function() {
    return Math.floor(Math.random() * (this.maxCustumerHr - this.minCustumerHr + 1) + this.minCustumerHr);
  },
  CookiesCustHour:function() {
    for (var i = 0; i <= 8; i++) {
      this.CookiesPerHour.push(Math.floor(this.randomCustHour() * this.avgPerCost));
      console.log(this.CookiesPerHour);
    }
  }
}

var Alki = {
  minCustumerHr:3,
  maxCustumerHr:24,
  avgPerCost:2.6,
  CookiesPerHour:[],
  randomCustHour:function() {
    return Math.floor(Math.random() * (this.maxCustumerHr - this.minCustumerHr + 1) + this.minCustumerHr);
  },
  CookiesCustHour:function() {
    for (var i = 0; i <= 8; i++) {
      this.CookiesPerHour.push(Math.floor(this.randomCustHour() * this.avgPerCost));
      console.log(this.CookiesPerHour);
    }
    }
  }

