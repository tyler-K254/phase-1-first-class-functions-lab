const returnFirstTwoDrivers = function (drivers){
    // const drivers = ["d1","d2","d3","d4","d5"]
    // const first2 = drivers.splice(0,2);
    return drivers.slice(0,2);;
}

const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(num1){
    return function(multiply){
        return (num1*multiply)
    }

}



const fareDoubler = createFareMultiplier(2);



const fareTripler = createFareMultiplier(3);



function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){
  return returnFirstTwoDrivers(arrayOfDrivers);
}