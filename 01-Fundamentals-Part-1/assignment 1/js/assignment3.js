// const dolphinTotalScore = (96 + 108 + 89)/3;
// const koalasTotalScore = (88 + 91 + 110)/3;

// const dolphinTotalScore = (97 + 112 + 101)/3;
// const koalasTotalScore = (109 + 95 + 123)/3;

const dolphinTotalScore = (97 + 112 + 101)/3;
const koalasTotalScore = (109 + 95 + 106)/3;

console.log(`${dolphinTotalScore}`);
console.log(`${koalasTotalScore}`);


// point no 2
// if(koalasTotalScore>dolphinTotalScore){
//     console.log("koalas is winner");
// }else if(koalasTotalScore<dolphinTotalScore){
//     console.log("dolphin is winner");
// }else{
//     console.log("game is tie between koalas and dolphins")
// }

// Bonus 3
if((koalasTotalScore>dolphinTotalScore) && 
    (koalasTotalScore >= 100))
{
    console.log("koalas is winner");
}
else if(koalasTotalScore<dolphinTotalScore 
    &&(dolphinTotalScore>=100))
    {
    console.log("dolphin is winner");
}
else if((koalasTotalScore >= 100) && 
(dolphinTotalScore>=100)&&
(koalasTotalScore===dolphinTotalScore))
{
    console.log("game is tie between koalas and dolphins both are trophy")
}
else{
    console.log("no team is winner");
}
