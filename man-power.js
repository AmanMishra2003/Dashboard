const data = require('./data')

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
    sumOfTotalManpowerEmployed :[6,10,24,13,7,10,4]
}

