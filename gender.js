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

module.exports.gender_obj = {
    year: yearDis,
    counts: counts,
    Female :[0,1,0,2,0,1,0],
    Male :[1,1,5,1,2,1,1]
}

