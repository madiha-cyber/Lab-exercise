
"use strict";


// 1. printIndices
function printIndices(items) {
  for (const i in items){
    console.log(items[i], i);
  }
}
printIndices(['hi', 'hello', 'apple', 'orange'])



// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];

  for (const i in items){
    if (i % 2 === 0){
     result.push(items[i]); 
    }
  }
  console.log(result);
}

everyOtherItem(['hi', 'hello', 'apple', 'orange'])

// 3. smallestNItems
function smallestNItems(items, n) {
  const sortedItems = items.sort((a,b) => a-b);
  const sortedNItems = sortedItems.slice(0,n);
  sortedNItems.reverse();
  console.log(sortedNItems);

}

smallestNItems([1, 5, 432, 657, 98, 32, 65, 2])