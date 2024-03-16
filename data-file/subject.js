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

module.exports.subject_obj = {
    year: yearDis,
    counts:counts,
    Atmospheric: [0,0,0,0,1,0],
    Coastal :[0,0,1,0,0,0,0],
    Geoscience :[0,1,2,1,1,0,0],
    Hydrology:[1,0,2,0,0,0,0],
    Ocean:[0,1,0,2,0,1,1],
    Semilogy:[0,0,0,0,0,1,0],
}

