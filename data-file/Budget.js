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

module.exports.budget_obj = {
    year: yearDis,
    counts: counts,
    SumOfBudgetSanctioned :[84.82,120.03,340.02,135.3,124.77,87.74,90.43],
    SumOfBudgetSpent :[66.71,117.99,326.57,120.21,124.6,83.24,75.07]
}

