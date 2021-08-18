// 1st Problem
function kilometerToMeter(kilometer){
   if(kilometer > 0){
    var meter = kilometer * 1000;
    return meter;
   }
   else if(kilometer <= 0 || typeof kilometer != "number") meter = kilometer + " is Not valid. You can convert one or more kilometers to meters if you want."
}
var newMeter = kilometerToMeter(2);
console.log(newMeter);




// 2nd Problem
function budgetCalculator(watch, phone, laptop){
    if(watch > 0 && phone > 0 && laptop > 0){
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var totalPrice = watchPrice + phonePrice + laptopPrice;
    }
    else if(watch <= 0 || typeof watch != "number") totalPrice = watch + " is Not valid. You can buy one or more watches if you want.";
    else if(phone <= 0 || typeof phone != "number") totalPrice = phone + " is Not valid. You can buy one or more phones if you want.";
    else if(laptop <= 0 || typeof laptop != "number") totalPrice = laptop + " is Not valid. You can buy one or more laptops if you want.";
    return totalPrice;
}
var totalNewPrice = budgetCalculator(1, 1, 1);
console.log(totalNewPrice);




// 3rd Problem
function hotelCost(days){
    if(days <= 0 || typeof days != "number"){
        return totalCost= days + " is Not valid Number. You can stay in the hotel for one or more days if you want.";
    }
    else if(days <= 10){
        var totalCost = days * 100;
    }
    else if(days <= 20){
        var first10days  = 10 * 100;
        var remaining = days - 10;
        var second20days = remaining * 80;
        var totalCost = first10days + second20days;
    }
    else if(days > 20){
        var first10days = 10 * 100;
        var second20days = 10 * 80;
        var remaining = days - 20;
        var after20days = remaining * 50;
        var totalCost = first10days + second20days + after20days;
    }
    return totalCost;
}
var hotelTotalCost = hotelCost(6);
console.log(hotelTotalCost);





// 4th Problem
function megaFriend(friends) {
    var largeFriend = friends[0];
    for (let i = 0; i < friends.length; i++) {
        const element = friends[i];
        if(typeof friends[i] != "string") {
            largeFriend = friends[i] + " You can't enter any number. Please enter your friends name" 
        }
        else if(largeFriend.length < element.length){
            var largeFriend = element;
        }
    }
    return largeFriend;

}
var friends = ["Mehedy", "Hassan", "Rohiz", "Eyasin", "Salauddin"];
var mostLargeFriend = megaFriend(friends);
console.log(mostLargeFriend);