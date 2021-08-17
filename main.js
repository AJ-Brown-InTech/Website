//Create a clone for our section in the about section
var ticker = document.querySelector('.ticker'), 
ticker_item = document.querySelector('.ticker-item'),
clone = ticker_item.cloneNode(true)
//this is for the ticker to have a clone of the same text but a bit smaller
 ticker_item.append(clone)
console.log(clone)





