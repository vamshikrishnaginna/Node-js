// const func = () => {
//     console.log('Hello after 4 seconds');
// }
// setTimeout(func, 4*1000);

//****************************************************************************************************************** */
//For: func(arg1,agr2,agr3,.....)
//We can use: setTimeOut(func, delay, arg1, agr2, agr3,...)

// const rocks =(who)=>{
//     console.log(who + ' rocks!');
// }

// setTimeout(rocks, 4*1000, 'Vamshi');


//******************************************************************************************************************** */
//CHALLENGE
//Hello after 4 seconds
//Hello after 8 seconds

// const func=(secs)=>{
//     console.log('Hello after '+secs+' seconds');
  
// }

// setTimeout(func, 4*1000, 4 );
// setTimeout(func, 8*1000, 8 );

//******************************************************************************************************************** */

//SETINTERVAL() Method

// let num=0
// setInterval(() => {
//     num++;
//     console.log(num+ '.Hello for every 3 seconds');
    
    
// }, 3000);

//********************************************************************************************************** */

//CHALLENGE-2
//Print message "Hello World" - every second for 5 times 
// Print "Done" and exit
//constraints - you can't use setTimeout 

let counter =0;

const intervalId = setInterval( ()=>{

    console.log('Hello world');
    counter++;

    if(counter==5)
    {
        console.log('Done');
        clearInterval(intervalId);
    }
},
1000);