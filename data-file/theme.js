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

module.exports.theme_obj = {
    year: yearDis,
    counts: counts,
    Applied :[0,1,1,1,1,2,0],
    Basic :[1,1,4,2,1,0,1]
}

