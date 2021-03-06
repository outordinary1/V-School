// # .reduce()
//     Returns: Whatever you want it to! (See video for explanation)
//     Purpose: Take an array of data and Reduce it into a smaller or completely different data set.

// 1. Turn an array of numbers into a total of all the numbers

function total(arr) {
    result = arr.reduce((final, current) => final += current)
    return result
}

console.log(total([1, 2, 3])); // 6

// 2. Turn an array of numbers into a long string of all those numbers.

function stringConcat(arr) {
    result = arr.reduce((final, number) => final.toString() + number.toString())
    return result
}

console.log(stringConcat([1, 2, 3])); // "123"

// 3. Turn an array of voter objects into a count of how many people voted

function totalVotes(arr) {
    result = arr.reduce((final, voter) => {
        if (voter.voted) {
            final++
        }
        return final
    }, 0)
    return result
}

var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];
console.log(totalVotes(voters)); // 7

// 4. Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

function shoppingSpree(arr) {
    result = arr.reduce((final, item) => {
        final += item.price
        return final
    }, 0)
    return result
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005

// 5. Given an array of arrays, flatten them into a single array

function flatten(arr) {
    result = arr.reduce((final, array) => {
        final = final.concat(array)
        return final
    })
    return result
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

//  6. Given an array of potential voters, return an object representing the results of the vote

// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55,
// and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties.
// See the example output at the bottom.

var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

function voterResults(arr) {
    return arr.reduce((info, person) => {
        if (person.age < 26 && person.voted) {
            info.numYoungVotes++
        }
        if (person.age < 26) {
            info.numYoungPeople++
        }
        if ((person.age > 25) && (person.age < 36) && (person.voted)) {
            info.numMidVotesPeople++
        }
        if ((person.age > 25) && (person.age < 36)) {
            info.numMidsPeople++
        }
        if ((person.age > 35) && (person.age < 56) && (person.voted)) {
            info.numOldVotesPeople++
        }
        if ((person.age > 35) && (person.age < 56)) {
            info.numOldsPeople++
        }
        return info
    }, {
        numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotesPeople: 0,
        numMidsPeople: 0,
        numOldVotesPeople: 0,
        numOldsPeople: 0
    })
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/
