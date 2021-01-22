// https://github.com/ZRShamim/assignment_3/blob/main/assignment.js

//1st problem
function kilometerToMeter(kilometer){
    const meeter = 1000; // 1km = 1000m
    if(kilometer < 0){
        return -1;
    }
    let dist = meeter * kilometer; // finding distance into meeter
    return dist;
}

let result = kilometerToMeter(-5);

if(result = -1)
{
    console.log('Error');
}
else{
    console.log(resultt);
}

//2nd problem
function budgetCalculator(watchCount, phoneCount, laptopCount){
    const watchPrice = 50;
    const phonePrice = 100;
    const laptopPrice = 500;

    if(watchCount < 0 || phoneCount < 0 || laptopCount < 0 || watchCount - Math.round(watchCount) != 0 || phoneCount - Math.round(phoneCount) != 0 || laptopCount - Math.round(laptopCount) != 0){
        return -1; //If any float or negetive value enter it will send an error
    }
    else{
        totalCost = watchCount * watchPrice + phoneCount * phonePrice + laptopCount * laptopPrice;
        return totalCost;
    }
}

let cost = budgetCalculator(1, 0.5, -2)
if(cost == -1){
    console.log('Error');
}
else{
    console.log(cost);
}

//3rd problem
function hotelCost(day){
    const first10DaysCost = 100;
    const second10DaysCost = 80;
    const moreThan20DaysCost = 50
    let cost = 0; //initial cost is zero
    if(day < 0)
    {
        return -1; //If any negetive value enter it will send an error
    }
    else if(day <= 10){
        cost = first10DaysCost * day;
        return cost;
    }
    else if(day <= 20){
        let second10day = day - 10;
        cost = first10DaysCost * 10 + second10DaysCost * second10day;
        return cost;
    }
    else{
        let moreThan20day = day - 20;
        cost = first10DaysCost * 10 + second10DaysCost * 10 + moreThan20DaysCost * moreThan20day;// each time period contain 10 days in first 20 days.
        return cost;
    }
}

let payment = hotelCost(-5);
if(payment = -1)
{
    console.log('Error');
}
else{
    console.log(payment);
}

//4th problem
function megaFriend(name){
    let big = name[0]; // Intialy setting first name as a big name
    let index = 0; // Intialy setting zero index as a big name
    for(j=1; j<name.length; j++){
        if( big < name[j]){
            big = name[j];
            index = j;
        }
    }
    return index;
}

let friendName = ['Shamim','Likhon', 'Kaderiabaheni','Rupak','Manbendra'];
let lengthOfName = [];
//Storing length of name
for(let i=0; i<friendName.length; i++){
    let name = friendName[i];
    nameLength = name.length;
    lengthOfName.push(nameLength)
}
//finding big name
 longestName = megaFriend(lengthOfName);
 console.log(friendName[longestName]);