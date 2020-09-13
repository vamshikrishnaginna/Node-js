// const func = () => {
//     console.log('Hello after 4 seconds');
// }
// setTimeout(func, 4*1000);

//For: func(arg1,agr2,agr3,.....)
//We can use: setTimeOut(func, delay, arg1, agr2, agr3,...)

// const rocks =(who)=>{
//     console.log(who + ' rocks!');
// }

// setTimeout(rocks, 4*1000, 'Vamshi');

//CHALLENGE
//Hello after 4 seconds
//Hello after 8 seconds

const func=(secs)=>{
    console.log('Hello after '+secs+' seconds');
  
}

setTimeout(func, 4*1000, 4 );
setTimeout(func, 8*1000, 8 );

