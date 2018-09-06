// declare your functions here...
function paragraphSelector() {
  return $('p-tag')
}

function lastImageSelector() {
  return $('img:last-child')
}

function ninjaBabySelector() {
  return $('#baby-ninja')
}

function divSelector() {
  return $('.pics')
}

function firstListItem() {
  return $('#pic-list ul').first() 
}
// "firstListItem() should return the first list item in the unordered list"
//https://api.jquery.com/first/