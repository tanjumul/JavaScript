// console.log('Working') 


const DC_superHeroes = [ 'Batman' , 'Superman' , 'Greenlantern' , 'HawGirl' , 'Flash']; 

const musicIlove = [ 'limBiskitz' , 'Linkinpark' , 'Drake' , 'TravisScott' ,'Alestorm' ]; 

// const newArr = DC_superHeroes.concat(musicIlove); 

// console.log(newArr); 

const allNewfavs = [...musicIlove , ... DC_superHeroes]; 

console.log(allNewfavs);