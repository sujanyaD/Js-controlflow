const PI = 3.1415
const radius = 5;
const area = PI * radius * radius;//total area
let Plants = 20; // given intial plants

const p1= 0.8; // given minimum space for each plant.

//total area plants can occupy
const maxPlantArea = area / p1;
console.log(` Total area of plants can occupy :${maxPlantArea}`)

console.log(`Total Area :${area}`);//Total area

const area1 = Plants * p1; //area for 20 plants in week 1

console.log(`Area occupied by plants in week1 :${area1}`);

const week = 1;
//condition to calulate area for week 1
if (week == 1)
{
    // logic for plants doubled 
 Plants=Plants * 2; 
 console.log(`plants Doubled every week: ${Plants}`);
// toatl area after plants doubled 40* 0.8
 let areaw1 = Plants * p1; 
  console.log(`Total area occupied after plants doubled: ${areaw1}`)
 // eighty percent of area caluculation.
 const eiperArea = area * (80/100);
 console.log(`Area of plants :${eiperArea}`);
// area of week 1 is greater than eighty percent ?
 let canBePruned = areaw1 >= eiperArea; 
 console.log(`condition for pruning  met : ${canBePruned}`); 
//Area for fiftypercent plant capacity
 const areaFiftyPer = area * (50/100); 
// fifty percent of area caluclation.
 const fiftyPerPlntCnt =areaFiftyPer / p1;
 console.log(`Area caluculated for fiftypercent: ${areaFiftyPer}`)
 // Eighty percent area caluculation
 const eigtyPercentPlntCnt = eiperArea /p1;
 console.log(`plant count for eighty percent area:${eigtyPercentPlntCnt}`)
// can be monitored condition
 const monitored =( fiftyPerPlntCnt>Plants)&&(Plants<eigtyPercentPlntCnt);
 console.log(monitored)
 // planted 
 const planted =fiftyPerPlntCnt<Plants;
 console.log(planted)
}



 









