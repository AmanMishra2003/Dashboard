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

module.exports.publication_obj = {
    year: yearDis,
    counts: counts,
    countOfProjectTitle :[1,2,5,3,2,2,1],
    sumOfTotalNumberOfPublication :[6,16,18,19,5,10,2]
}

