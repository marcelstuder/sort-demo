var intArray = [ 123, -40, 666, 1024, -1, 0, 2, 4, 2 ];
var stringArray = [ "123", "-40", "666", "1024", "-1", "0", "2", "4", "2" ]; 

// returns 0 if a === b
// returns < 0 if a < b
// returns > 1 if a > b
function sortInt(a, b) {
    return a - b;
}

console.log('Int array: ' + intArray);
console.log('-> sort: ' + intArray.sort());

console.log('String array: ' + stringArray);
console.log('-> sort: ' + stringArray.sort());

console.log('Int array: ' + intArray);
console.log('-> sort using sortInt: ' + intArray.sort(sortInt));

console.log('String array: ' + stringArray);
console.log('-> sort using sortInt (bad!): ' + stringArray.sort(sortInt));