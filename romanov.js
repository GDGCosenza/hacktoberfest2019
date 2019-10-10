console.log("pls franz love me <3");

/*
    [] + [] → "" // Empty string? These are arrays!
    [] + {} → [object object]
    {} + [] → 0 // Why isn't the operation commutative???
    {} + {} → NaN // ???
    16 == [16] → true // Array converted into string, then into number
    16 == [1,6] → false // But what is array converted into?
    "1,6" == [1,6] → true
    var arr = [];
    arr.length → 0
    arr[3] → "undefined" // No array bounds exception???
    arr[3] = "hi";
    arr.length → 4 // 4??? Only one element has been added!
    arr["3"] → "hi" // Apparently "3" is coerced into a number
    delete(arr[3]);
    arr.length → 4 // 4??? There are no elements in the array!
    arr[3] → "undefined" // 7 lines above, length was "0"!
    var i = 1;
    i = i + ""; // Oops!
    i + 1 → "11"
    i - 1 → 0
    var j = "1";
    ++j → 2 // Okay, but...

    var k = "1";
    k += 1 → "11" // What???

    [1,5,20,10].sort() → [1, 10, 20, 5] // Why is it sorting strings???
    xs = ["10", "10", "10"];
    xs.map(parseInt) → [10, NaN, 2] // ???
    y = {};
    y[[]] = 1;
    Object.keys(y) → [""]
*/

console.log("don't judge me........");