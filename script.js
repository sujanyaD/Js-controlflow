const PI = 3.1415
const radius = 5;
const area = PI * radius * radius;//total area
const Plants = 20; // given intial plants
const wk1 =1;
const wk2 =2;
const wk3 =3;
const p1= 0.8; // given minimum space for each plant.

//total area
console.log(area);

const area1 = Plants * p1; //area for 20 plants

console.log(area1);

// switch (week1) {
//     case 1: noOfPlants = noOfPlants *2;
//         }

const week = 1;
//condition to calulate area for week 1
if (week == 1)
{
 noOfPlants=Plants * 2; // logic for plants doubled
 console.log(noOfPlants);
 let areaw1 = noOfPlants * p1; // toatl area after plants doubled 
 console.log(areaw1)
 const eiperArea = area * (80/100); // eighty percent of area caluculation.
 console.log(eiperArea);

 let canBePruned = areaw1 <= eiperArea;
 console.log(canBePruned);
}


 









