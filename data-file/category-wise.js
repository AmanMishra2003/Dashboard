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

module.exports.category_obj = {
    year: yearDis,
    counts: counts,
    Academic :[1,2,3,3,1,1,1],
    Research :[0,0,2,0,1,1,0]
}

