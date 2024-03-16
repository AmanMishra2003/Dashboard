const data = require('../data')

const year = []
for(let x of data){
    year.push(x.Study_start_date)
}
const yearDis = year.filter((item,index) => year.indexOf(item) === index).sort();

const counts={};
year.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
});

module.exports.man_power_obj = {
    year: yearDis,
    counts: counts,
    countOfProjectTitle :[1,2,5,3,2,2,1],
    sumOfTotalManpowerEmployed :[6,10,24,13,7,10,4],
    JRF:[0,5,10,6,3,4,1],
    SRF:[3,2,5,5,2,3,2],
    ResearchAssociate:[3,2,6,1,1,2,0],
    phD:[0,1,5,2,1,1,1]
}

