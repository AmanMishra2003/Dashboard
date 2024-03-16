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

module.exports.patent_obj = {
    year: yearDis,
    counts: counts,
    PatentFiled :[2,8,18,3,8,7,1],
    PatentGranted :[1,3,9,4,2,2,0]
}

