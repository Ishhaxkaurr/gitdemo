console.log('person1: shows ticket');
console.log('person2: shows ticket');
const preMovie = async () => {

const promiseWifeBringingTickets = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('ticket'), 3000);
});
const getPopcorn = new Promise((resolve , reject) => resolve('popcorn'));
let ticket = await promiseWifeBringingTickets
console.log('wife: i have the tickets');
console.log('husband: we should go in');
console.log('wife: no i am hungry');
 
let popcorn = await getPopcorn;
console.log('husband: i got some popcorn');
console.log('husband: we should go in');
console.log('wife: no i need butter on my popcorn');

const getButter = new Promise((resolve , reject) => resolve('butter'));
let butter = await getButter;
console.log(`husband: i got some ${butter} on popcorn`);
console.log('husband: anything else darling?');
console.log('wife: I want coldrink');

const getColdDrinks = new Promise((resolve , reject) => resolve('ColdDrinks'));
let ColdDrinks = await getColdDrinks;
console.log(`husband: i got some ${ColdDrinks} with popcorn`);
console.log('husband: anything else darling?');
console.log('wife: lets watch movie');



return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`));



console.log('person4: shows ticket');
console.log('person5: shows ticket');