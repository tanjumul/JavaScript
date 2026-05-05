// console.log('Working') 


const DC_superHeroes = [ 'Batman' , 'Superman' , 'Greenlantern' , 'HawGirl' , 'Flash']; 

const musicIlove = [ 'limBiskitz' , 'Linkinpark' , 'Drake' , 'TravisScott' ,'Alestorm' ]; 

// const newArr = DC_superHeroes.concat(musicIlove); 

// console.log(newArr); 

const allNewfavs = [...musicIlove , ... DC_superHeroes];  //splashing in arrys with multiple arrays

console.log(allNewfavs);



const another_situation = [1,2,3,4,5,[6,7,8,9],10,[11,12,[13,14]]]; 

const real_another_array = another_situation.flat(Infinity); //if you want you can declare the depth but here i don't want to take any hicaps that's why i declared infinity. 


console.log(real_another_array); 

/** interesting part is , here it's showin all the array
 *  elements no matter where it is , no matter what it is. */


const dine = 'tanju'
console.log(Array.isArray(dine)); //questioning the element

console.log(Array.from(dine)); //it can seperate all the character into an array. 

console.log(Array.from({name : 'Tanjumul'})); 
// it gives you an empty string but you should've added a target if it is a key or value ? 


 const score1 = 100; 
 const score2 = 200; 
 const score3 = 300; 
 const score4 = 400; 

 console.log(Array.of(score1,score2,score3,score4)); 





