// A TO C
let name = 'Addel'
function    dayGreeting(time) {
    if(time >= 6 && time <= 12) {
        console.log(`Good Morning ${name}, lets code`)
    } else if (time >= 13 && time <= 17) {
        console.log(`Good afternoon ${name}, Time for a snack!`)
    } else 
    console.log(`Hello ${name}, You are a night owl!`)
}


dayGreeting(9);
dayGreeting(14);
dayGreeting(23);