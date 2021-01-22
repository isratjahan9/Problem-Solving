//https://github.com/isratjahan9/Problem-Solving

// problem:1 (Kilometer to meter convert)

function kilometerToMeter(num) {
    if (typeof(num) !== 'number') {
        return "Value should be number!"
    } else {
        let meter = num * 1000;
        return meter
    }
}
let result = kilometerToMeter(3);
console.log(result);

// problem:2 (Budget Calculator)

function budgetCalculator(numOfWatch, numOfMobile, numOfLaptop) {
    let watch = numOfWatch * 50;
    let mobile = numOfMobile * 100;
    let laptop = numOfLaptop * 500;
    if (typeof(numOfWatch) !== 'number' || typeof(numOfMobile) !== 'number' || typeof(numOfLaptop) !== 'number') {
        return "No value can be other than number"
    } else {
        return watch + mobile + laptop;
    }
}

let sumOfAll = budgetCalculator(3, 1, 2)
console.log(sumOfAll)

// problem:3 (Hotel Cost)

function hotelCost(day) {
    let cost = 0;
    if (day <= 10) {
        cost = day * 100;
    } else if (day > 10 && day <= 20) {
        let firstTenDays = 10 * 100;
        let staying = day - 10;
        let secondTenDays = staying * 80;
        cost = firstTenDays + secondTenDays;
    } else {
        let firstTenDays = 10 * 100;
        let secondTenDays = 10 * 80;
        let staying = day - 20;
        let thirdTenDays = staying * 50;
        cost = firstTenDays + secondTenDays + thirdTenDays;
    }
    return cost;
}
let amount = hotelCost(22);
console.log(amount);

// problem:4 (Mega Friend)

function megaFriend(friend) {
    let max = friend[0];
    if (friend.length === 0) {
        return "Array can't be empty"
    } else {
        for (let i = 1; i < friend.length; i++) {
            if (friend[i].length > max.length) {
                max = friend[i]
            }
        }
    }
    return max;
}
let highestValue = megaFriend(['nusrat', 'israt', 'samira', 'basir']);
console.log(highestValue);