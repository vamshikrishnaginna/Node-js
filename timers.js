// const func = () => {
//     console.log('Hello after 4 seconds');
// }
// setTimeout(func, 4*1000);

//For: func(arg1,agr2,agr3,.....)
//We can use: setTimeOut(func, delay, arg1, agr2, agr3,...)

const rocks =(who)=>{
    console.log(who + ' rocks!');
}

setTimeout(rocks, 4*1000, 'Vamshi');