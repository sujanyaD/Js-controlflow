// Part one Growing Plants

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


const week1 = 1;
//condition to calulate area for week 1
if (week1 ===  1)
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
 console.log(`Area caluculated for fiftypercent: ${areaFiftyPer}`)

// fifty percent of area caluclation.
 const fiftyPerPlntCnt =areaFiftyPer / p1;
 console.log(`Area of plants for Fifty percent:${fiftyPerPlntCnt}`)

 // Eighty percent area caluculation
 const eigtyPercentPlntCnt = eiperArea /p1;
 console.log(`plant count for eighty percent area:${eigtyPercentPlntCnt}`)
// can be monitored condition
 const monitored =( fiftyPerPlntCnt>Plants)&&(Plants<eigtyPercentPlntCnt);// 49.08 >32 && 32 < 78
 console.log(`condition for monitoring: ${monitored}`)
 // planted 
 const planted =fiftyPerPlntCnt<Plants; //
 console.log(planted)
}

console.log("=================================================================================")

const week2 =2;
if (week2 === 2)
{
    // logic for plants doubled 
 Plants=Plants * 2; 
 console.log(`plants Doubled every week: ${Plants}`);
// toatl area after plants doubled 40* 0.8
 let areaw2 = Plants * p1; 
  console.log(`Total area occupied after plants doubled: ${areaw2}`)
 // eighty percent of area caluculation.
 const eiperArea = area * (80/100);
 console.log(`Area of plants :${eiperArea}`);
// area of week 1 is greater than eighty percent ?
 let canBePruned = areaw2 >= eiperArea; 
 console.log(`condition for pruning  met : ${canBePruned}`); 
//Area for fiftypercent plant capacity
 const areaFiftyPer = area * (50/100); 
// fifty percent of area caluclation.
 const fiftyPerPlntCnt =areaFiftyPer / p1;
 console.log(`plant count for fifty percent area: ${fiftyPerPlntCnt}`)
 // Eighty percent area caluculation
 const eigtyPercentPlntCnt = eiperArea /p1;
 console.log(`plant count for eighty percent area:${eigtyPercentPlntCnt}`)
// can be monitored condition
 const monitored =( fiftyPerPlntCnt<Plants)&&(eigtyPercentPlntCnt<Plants); //49.08 <80 && 78.5< 80
 console.log(monitored)
 // planted 
 const planted =fiftyPerPlntCnt<Plants; //49 <80
 console.log(planted)
}

console.log("=================================================================================")

const week3 =3;
if (week3 === 3)
{
    // logic for plants doubled 
 Plants=Plants * 2; 
 console.log(`plants Doubled every week: ${Plants}`);
// toatl area after plants doubled 40* 0.8
 let areaw3 = Plants * p1; 
  console.log(`Total area occupied after plants doubled: ${areaw3}`)
 // eighty percent of area caluculation.
 const eiperArea = area * (80/100);
 console.log(`Area of plants :${eiperArea}`);
// area of week 1 is greater than eighty percent ?
 let canBePruned = areaw3 >= eiperArea; 
 console.log(`condition for pruning  met : ${canBePruned}`); 
//Area for fiftypercent plant capacity
 const areaFiftyPer = area * (50/100); 
// fifty percent of area caluclation.
 const fiftyPerPlntCnt =areaFiftyPer / p1;
 console.log(`plant count for fifty percent area: ${fiftyPerPlntCnt}`)
 // Eighty percent area caluculation
 const eigtyPercentPlntCnt = eiperArea /p1;
 console.log(`plant count for eighty percent area:${eigtyPercentPlntCnt}`)
// can be monitored condition
 const monitored =( fiftyPerPlntCnt<Plants)&&(Plants>eigtyPercentPlntCnt); // 49.09<160 && 160 >78.53
 console.log(monitored)
 // planted 
 const planted =fiftyPerPlntCnt<Plants;
 console.log(planted)
}

console.log("=================================================================================")

// Part 2 Think Bigger 


// caluculated plants for 1st weeek
let plants2 =100;
for (let week =1; week <= 10 ;week++){
    plants2 = plants2 *2; 
}
console.log(`No. of plats for 10 week:${plants2}`)
let area2 = plants2 * p1;
console.log(`Total area :${area2}`)
// radius Squared logic 
let radius2 = area2 / PI;
console.log(`radius squared calucualtion: ${radius2}`)
// Formula for single radius
const  radiSquared = Math.sqrt(radius2)
console.log(`Single radius value:${radiSquared}`)



// part 3
//Try catch throw
try {
    let hunderedPlantsAre =100 * p1;
    if(area< hunderedPlantsAre){
        throw new TypeError("out of capacity");
    }
    
} catch (error) {
    console.log(error);
    
}









