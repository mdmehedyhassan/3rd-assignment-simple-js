// 1st Problem
function kilometerToMeter(kilometer){
   if(kilometer > 0){
    var meter = kilometer * 1000;
    return meter;
   }
   else return "0, Negative Number and String are not supported";
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
        return totalPrice;
    }
    else return "0, Negative Number and String are not supported";
}
var totalNewPrice = budgetCalculator(1, 1, 1);
console.log(totalNewPrice);




// 3rd Problem
function hotelCost(days){
    if(days <= 0){
        return "0, Negative Number and String are not supported";
    }
    else if(days <= 10){
        var totalCost = days * 100;
        return totalCost;
    }
    else if(days <= 20){
        var first10days  = 10 * 100;
        var remaining = days - 10;
        var second20days = remaining * 80;
        var totalCost = first10days + second20days;
        return totalCost;
    }
    else if(days > 20){
        var first10days = 10 * 100;
        var second20days = 10 * 80;
        var remaining = days - 20;
        var after20days = remaining * 50;
        var totalCost = first10days + second20days + after20days;
        return totalCost;
    }
    else return "0, Negative Number and String are not supported";
}
var hotelTotalCost = hotelCost(12);
console.log(hotelTotalCost);