console.log('Will my methods work? That is the question!');

function CityLocation(name) {
  this.name = name;
  this.hourlyLocationData = [];
  this.headerData = [['Time'], ['Pizzas Sold'], ['Pizzas Delivered'], ['Drivers Needed']];
}

CityLocation.prototype.pushHourlyData = function(data){
  this.hourlyLocationData.push(data);
};

function HourlyData(time, minPizzaOrdered, maxPizzaOrdered, minPizzaDelivered, maxPizzaDelivered) {
  this.name = name;
  this.time = time;
  this.PizzaOrdered = getRandomIntInclusive(minPizzaOrdered, maxPizzaOrdered);
  this.PizzaDelivered = getRandomIntInclusive(minPizzaDelivered, maxPizzaDelivered);
  this.driversNeeded = Math.ceil(this.PizzaDelivered / 3);};

function generateDataRow(inputArray){
  var row = document.createElement('tr');
  var col;
  for(var i = 0; i < inputArray.length; i++){
    col = document.createElement('td');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;
}
function generateHeadingRow(inputArray){
  var row = document.createElement('tr');
  var col;
  for(var i = 0; i < inputArray.length; i++){
    col = document.createElement('th');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;
}
console.log('Array functions o.k.?');
var pizzaTable = document.createElement('table');

ballard = new CityLocation('ballard');
ballard.pushHourlyData(new HourlyData('8:00am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('9:00am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('10:00am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('11:00am', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData('12:00am', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData('1:00pm', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData('2:00pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('3:00pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('4:00pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('5:00pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('6:00pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('7:00pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('8:00pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData('9:00pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData('10:00pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData('11:00pm', 8, 15, 6, 16));
ballard.pushHourlyData(new HourlyData('12:00am', 8, 15, 6, 16));
ballard.pushHourlyData(new HourlyData('1:00am', 8, 15, 6, 16));

firstHill = new CityLocation('first hill');
firstHill.pushHourlyData(new HourlyData('8:00am', 1, 3, 1, 7));
firstHill.pushHourlyData(new HourlyData('9:00am', 1, 3, 1, 7));
firstHill.pushHourlyData(new HourlyData('10:00am', 1, 3, 1, 7));
firstHill.pushHourlyData(new HourlyData('11:00am', 5, 9, 2, 8));
firstHill.pushHourlyData(new HourlyData('12:00am', 5, 9, 2, 8));
firstHill.pushHourlyData(new HourlyData('1:00pm', 5, 9, 2, 8));
firstHill.pushHourlyData(new HourlyData('2:00pm', 2, 13, 1, 6));
firstHill.pushHourlyData(new HourlyData('3:00pm', 2, 13, 1, 6));
firstHill.pushHourlyData(new HourlyData('4:00pm', 2, 13, 1, 6));
firstHill.pushHourlyData(new HourlyData('5:00pm', 18, 32, 3, 9));
firstHill.pushHourlyData(new HourlyData('6:00pm', 18, 32, 3, 9));
firstHill.pushHourlyData(new HourlyData('7:00pm', 18, 32, 3, 9));
firstHill.pushHourlyData(new HourlyData('8:00pm', 1, 3, 5, 12));
firstHill.pushHourlyData(new HourlyData('9:00pm', 1, 3, 5, 12));
firstHill.pushHourlyData(new HourlyData('10:00pm', 1, 3, 5, 12));
firstHill.pushHourlyData(new HourlyData('11:00pm', 8, 20, 6, 16));
firstHill.pushHourlyData(new HourlyData('12:00am', 8, 20, 6, 16));
firstHill.pushHourlyData(new HourlyData('1:00am', 8, 20, 6, 16));

internationalDistrict = new CityLocation('international district');
internationalDistrict.pushHourlyData(new HourlyData('8:00am', 0, 4, 0, 4));
internationalDistrict.pushHourlyData(new HourlyData('9:00am', 0, 4, 0, 4));
internationalDistrict.pushHourlyData(new HourlyData('10:00am', 0, 4, 0, 4));
internationalDistrict.pushHourlyData(new HourlyData('11:00am', 0, 7, 0, 4));
internationalDistrict.pushHourlyData(new HourlyData('12:00am', 0, 7, 0, 4));
internationalDistrict.pushHourlyData(new HourlyData('1:00pm', 0, 7, 0, 4));
internationalDistrict.pushHourlyData(new HourlyData('2:00pm', 2, 15, 1, 4));
internationalDistrict.pushHourlyData(new HourlyData('3:00pm', 2, 15, 1, 4));
internationalDistrict.pushHourlyData(new HourlyData('4:00pm', 2, 15, 1, 4));
internationalDistrict.pushHourlyData(new HourlyData('5:00pm', 10, 26, 4, 6));
internationalDistrict.pushHourlyData(new HourlyData('6:00pm', 10, 26, 4, 6));
internationalDistrict.pushHourlyData(new HourlyData('7:00pm', 10, 26, 4, 6));
internationalDistrict.pushHourlyData(new HourlyData('8:00pm', 8, 22, 7, 15));
internationalDistrict.pushHourlyData(new HourlyData('9:00pm', 8, 22, 7, 15));
internationalDistrict.pushHourlyData(new HourlyData('10:00pm', 8, 22, 7, 15));
internationalDistrict.pushHourlyData(new HourlyData('11:00pm', 0, 2, 2, 8));
internationalDistrict.pushHourlyData(new HourlyData('12:00am', 0, 2, 2, 8));
internationalDistrict.pushHourlyData(new HourlyData('1:00am', 0, 2, 2, 8));

southLakeUnion = new CityLocation ('south lake union');
southLakeUnion.pushHourlyData(new HourlyData('8:00am', 0, 4, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('9:00am', 0, 4, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('10:00am', 0, 4, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('11:00am', 0, 7, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('12:00am', 0, 7, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('1:00pm', 0, 7, 0, 4));
southLakeUnion.pushHourlyData(new HourlyData('2:00pm', 5, 15, 1, 4));
southLakeUnion.pushHourlyData(new HourlyData('3:00pm', 5, 15, 1, 4));
southLakeUnion.pushHourlyData(new HourlyData('4:00pm', 5, 15, 1, 4));
southLakeUnion.pushHourlyData(new HourlyData('5:00pm', 25, 39, 13, 18));
southLakeUnion.pushHourlyData(new HourlyData('6:00pm', 25, 39, 13, 18));
southLakeUnion.pushHourlyData(new HourlyData('7:00pm', 25, 39, 13, 18));
southLakeUnion.pushHourlyData(new HourlyData('8:00pm', 22, 36, 5, 22));
southLakeUnion.pushHourlyData(new HourlyData('9:00pm', 22, 36, 5, 22));
southLakeUnion.pushHourlyData(new HourlyData('10:00pm', 22, 36, 5, 22));
southLakeUnion.pushHourlyData(new HourlyData('11:00pm', 5, 21, 16, 31));
southLakeUnion.pushHourlyData(new HourlyData('12:00am', 5, 21, 16, 31));
southLakeUnion.pushHourlyData(new HourlyData('1:00am', 5, 21, 16, 31));

georgetown = new CityLocation ('georgetown');
georgetown.pushHourlyData(new HourlyData('8:00am', 2, 7, 3, 5));
georgetown.pushHourlyData(new HourlyData('9:00am', 2, 7, 3, 5));
georgetown.pushHourlyData(new HourlyData('10:00am', 2, 7, 3, 5));
georgetown.pushHourlyData(new HourlyData('11:00am', 3, 8, 3, 9));
georgetown.pushHourlyData(new HourlyData('12:00am', 3, 8, 3, 9));
georgetown.pushHourlyData(new HourlyData('1:00pm', 3, 8, 3, 9));
georgetown.pushHourlyData(new HourlyData('2:00pm', 1, 5, 1, 4));
georgetown.pushHourlyData(new HourlyData('3:00pm', 1, 5, 1, 4));
georgetown.pushHourlyData(new HourlyData('4:00pm', 1, 5, 1, 4));
georgetown.pushHourlyData(new HourlyData('5:00pm', 5, 13, 2, 4));
georgetown.pushHourlyData(new HourlyData('6:00pm', 5, 13, 2, 4));
georgetown.pushHourlyData(new HourlyData('7:00pm', 5, 13, 2, 4));
georgetown.pushHourlyData(new HourlyData('8:00pm', 22, 41, 15, 42));
georgetown.pushHourlyData(new HourlyData('9:00pm', 22, 41, 15, 42));
georgetown.pushHourlyData(new HourlyData('10:00pm', 22, 41, 15, 42));
georgetown.pushHourlyData(new HourlyData('11:00pm', 15, 20, 6, 21));
georgetown.pushHourlyData(new HourlyData('12:00am', 15, 20, 6, 21));
georgetown.pushHourlyData(new HourlyData('1:00am', 15, 20, 6, 21));

ravenna = new CityLocation ('ravenna');
ravenna.pushHourlyData(new HourlyData('8:00am', 0, 4, 0, 4));
ravenna.pushHourlyData(new HourlyData('9:00am', 0, 4, 0, 4));
ravenna.pushHourlyData(new HourlyData('10:00am', 0, 4, 0, 4));
ravenna.pushHourlyData(new HourlyData('11:00am', 0, 7, 0, 4));
ravenna.pushHourlyData(new HourlyData('12:00am', 0, 7, 0, 4));
ravenna.pushHourlyData(new HourlyData('1:00pm', 0, 7, 0, 4));
ravenna.pushHourlyData(new HourlyData('2:00pm', 2, 15, 1, 4));
ravenna.pushHourlyData(new HourlyData('3:00pm', 2, 15, 1, 4));
ravenna.pushHourlyData(new HourlyData('4:00pm', 2, 15, 1, 4));
ravenna.pushHourlyData(new HourlyData('5:00pm', 6, 9, 5, 18));
ravenna.pushHourlyData(new HourlyData('6:00pm', 6, 9, 5, 18));
ravenna.pushHourlyData(new HourlyData('7:00pm', 6, 9, 5, 18));
ravenna.pushHourlyData(new HourlyData('8:00pm', 4, 8, 2, 5));
ravenna.pushHourlyData(new HourlyData('9:00pm', 4, 8, 2, 5));
ravenna.pushHourlyData(new HourlyData('10:00pm', 4, 8, 2, 5));
ravenna.pushHourlyData(new HourlyData('11:00pm', 2, 4, 3, 11));
ravenna.pushHourlyData(new HourlyData('12:00am', 2, 4, 3, 11));
ravenna.pushHourlyData(new HourlyData('1:00am', 2, 4, 3, 11));

function makeTable(store, storeId) {
  pizzaTable = document.getElementById(storeId);
  var fancyHeader = generateHeadingRow([store.headerData[0], store.headerData[1], store.headerData[2], store.headerData[3]]);
  pizzaTable.appendChild(fancyHeader);
  for(var i = 0; i < store.hourlyLocationData.length; i++) {
    var fancyRow = generateDataRow([store.hourlyLocationData[i].time, store.hourlyLocationData[i].PizzaOrdered, store.hourlyLocationData[i].PizzaDelivered, store.hourlyLocationData[i].driversNeeded]);
    pizzaTable.appendChild(fancyRow);
  }
}

makeTable(ballard, 'ballard');
makeTable(firstHill, 'first-hill');
makeTable(internationalDistrict, 'international-district');
makeTable(southLakeUnion, 'south-lake-union');
makeTable(georgetown, 'georgetown');
makeTable(ravenna, 'ravenna');
