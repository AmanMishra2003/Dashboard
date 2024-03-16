const express = require('express')
const data = require('./data')
const {category_obj} = require('./category-wise')
const {subject_obj} = require('./subject')
const {theme_obj} = require('./theme')
const {gender_obj} = require('./gender')
const {man_power_obj} = require('./man-power')
const {patent_obj} = require('./patent')
const {publication_obj} = require('./publication')
const {budget_obj} = require('./Budget')
const path = require('path');
// const { count } = require('console');
const port = 3000;
const app = express();

app.use( express.static(path.join(__dirname, 'public')));
app.set('view engine' , 'ejs', {async:true})
app.set('views',path.join(__dirname,'views'))

// app.use('/',express.static('public'))

app.get('/',(req,res)=>{
   let year = [];
   let counts = {};
   for(let x of data){
      year.push(x.Study_start_date)
   }
   year.forEach((x) => {
      counts[x] = (counts[x] || 0) + 1;
   });
   console.log(counts)
   res.render('homepage',{counts})
})

app.get('/chart',(req,res)=>{
   const body = req.query
   if(body.select1==="Institution-wise-Studies"){
      res.redirect('/Institution-wise-Studies')
   }else if(body.select1==="Studies Conducted"){
      res.redirect("/")
   }else if(body.select1==="Institution-category-wise"){
         const id = body.select2;
         res.redirect(`/Institution-category-wise/${id}`)
   }else if(body.select1==="State-wise"){
      res.redirect('/state-wise')
   }else if(body.select1==="Theme"){
      const id = body.select2;
      res.redirect(`/Theme/${id}`)
   }else if(body.select1==="Gender-wise-Studies"){
      res.redirect('/gender-wise')
   }else if(body.select1==="Manpower-Employed"){
      res.redirect('/Manpower-Employed')
   }else if(body.select1==="Publications"){
      res.redirect('/Publications')
   }else if(body.select1==="Patents"){
      res.redirect('/Patents')
   }else if(body.select1==="Budget-Sanctioned"){
      res.redirect("/Budget-Sanctioned")
   }
   else if(body.select1==="Subject-wise"){
         const id = body.select2;
         res.redirect(`/subject/${id}`)
   }
   
   console.log(body);
})

app.get('/Institution-wise-Studies',(req,res)=>{
   let Institution = [];
      let counts = {};
      for(let x of data){
         Institution.push(x.Implementing_institute)
      }
      console
      Institution.forEach((x) => {
         counts[x] = (counts[x] || 0) + 1;
      });
      console.log(counts)
      const label_y= "Number of projects";
      const label_x="Institute";
      const selectOption =[
         "All Institutes"
      ]
      const id = "Projects"
      res.render("chart", {counts, label_y, label_x, selectOption,id})
})

app.get('/Institution-category-wise/:id',(req,res)=>{
   const {id} = req.params
   const selectOption =[
      "All Studies",
      "Academic",
      "Research"
   ]
   const label_y= "Number of Studies";
   const label_x="Year";
   if(id==="All"){
      const counts = category_obj.counts
      res.render("chart", {counts, label_y, label_x, selectOption, id})
   }else{
      console.log("hii")
      const counts = createObject(category_obj.year, category_obj[id])
      res.render("chart", {counts, label_y, label_x, selectOption , id})
   }
  
})

// app.get('/acadamic',(req,res)=>{
//    const selectOption =[
//       "All Studies",
//       "Academic Institute",
//       "Research Institure"
//    ]
//    const label_y= "Number of Studies";
//    const label_x="Year";
//    const counts = createObject(category_obj.year, category_obj.Academic_inst)
//    res.render("chart", {counts, label_y, label_x, selectOption})
// })

// app.get('/research',(req,res)=>{
//    const selectOption =[
//       "All Studies",
//       "Academic Institute",
//       "Research Institure"
//    ]
//    const label_y= "Number of Studies";
//    const label_x="Year";
//    const counts = createObject(category_obj.year, category_obj.Research_inst)
//    res.render("chart", {counts, label_y, label_x, selectOption})
// })

app.get('/state-wise',(req,res)=>{
   const id = "state";
   let state = [];
   let counts = {};
   for(let x of data){
      state.push(x.State)
   }
   state.forEach((x) => {
      counts[x] = (counts[x] || 0) + 1;
   });
   console.log(counts)
   const selectOption =[
      "All States",
   ]
   const label_y= "Number of Studies";
   const label_x="State";
   res.render("chart", {counts, label_y, label_x, selectOption,id})
})

app.get('/theme/:id',(req,res)=>{
   const {id} = req.params
   const selectOption =[
      "All Studies",
      "Applied",
      "Basic"
   ] 
   
   const label_y= "Number of Studies";
//   console.log(id)
   
   if(id==="All"){
      const label_x="Year";
      const data1 = theme_obj.Applied;
      const data2 = theme_obj.Basic;
      const label = theme_obj.year
      const label1 = "Applied Studies"
      const label2 = "Basic Studies"
      res.render("chart3", {label,data1,data2, label_y, label_x, selectOption, label1,label2})
   }else{
      const label_x=`${id}`;
      const counts = createObject(theme_obj.year, theme_obj[id])
      res.render("chart", {counts, label_y, label_x, selectOption, id})
   }
})


app.get('/subject/:id',(req,res)=>{
   const {id} = req.params
   // console.log(id)
   const selectOption =[
      "Atmospheric",
      "Coastal",
      "Geoscience",
      "Hydrology",
      "Ocean",
      "Semilogy"
   ]
   const label_y= "Number of Studies";
  
   
   if(id==="All"){
      const label_x="Years";
      const Atmos = subject_obj.Atmospheric;
      const Coastal = subject_obj.Coastal;
      const Geoscience = subject_obj.Geoscience;
      const Hydrology = subject_obj.Hydrology;
      const Ocean = subject_obj.Ocean;
      const Semilogy = subject_obj.Semilogy;
      const counts = subject_obj.counts
      res.render("chart2", {counts, label_y, label_x, selectOption, Atmos,Coastal, Geoscience,Hydrology,Ocean,Semilogy, id})
   }else{
      const label_x=`${id}`;
      const counts = createObject(subject_obj.year, subject_obj[id])
      res.render("chart", {counts, label_y, label_x, selectOption,id})
   }
})

app.get('/gender-wise',(req,res)=>{
      const label_y="Number of studies"
      const label_x=""
      const data1 = gender_obj.Male;
      const data2 = gender_obj.Female;
      const label = theme_obj.year
      const label1 = "Male"
      const label2 = "Female"
      const selectOption =[
         "All States",
      ]
      res.render("chart3", {label,data1,data2,label_x, label_y, selectOption, label1,label2})
})

app.get('/Manpower-Employed',(req,res)=>{
      const label_y="Number of studies"
      const label_x=""
      const data1 = man_power_obj.countOfProjectTitle;
      const data2 = man_power_obj.sumOfTotalManpowerEmployed;
      const label = gender_obj.year
      const label1 = "Count of Project Title"
      const label2 = "Sum of Total Manpower Employed"
      const selectOption =[
         "All States",
      ]
      res.render("chart3", {label,data1,data2,label_x, label_y, selectOption, label1,label2})
})

app.get('/Publications',(req,res)=>{
      const label_y="Number of studies"
      const label_x=""
      const data1 =publication_obj.countOfProjectTitle;
      const data2 = publication_obj.sumOfTotalNumberOfPublication;
      const label = publication_obj.year
      const label1 = "Count of Project Title"
      const label2 = "Sum of Total Number of Publication"
      const selectOption =[
         "All States",
      ]
      res.render("chart3", {label,data1,data2,label_x, label_y, selectOption, label1,label2})
})

app.get("/Patents",(req,res)=>{
   const label_y=""
   const label_x=""
   const data2 =patent_obj.PatentFiled;
   const data3 = patent_obj.PatentGranted;
   const data1 = Object.values(patent_obj.counts)
   const label = publication_obj.year;
   const label1 = "Number of projects";
   const label2 = "Sum of Patent Filed"
   const label3 = "Sum of Patent Granted"
   const selectOption =[
      "All States",
   ]
   res.render("chart4", {label,data1,data2,data3,label_x, label_y, selectOption, label1,label2,label3})
})

app.get("/Budget-Sanctioned",(req,res)=>{
   const label_y=""
   const label_x=""
   const data2 =budget_obj.SumOfBudgetSanctioned;
   const data3 = budget_obj.SumOfBudgetSpent;
   const data1 = Object.values(budget_obj.counts)
   const label = budget_obj.year;
   const label1 = "Number of projects";
   const label2 = "Sum of Budget Santioned(Rs in lakhs)"
   const label3 = "Sum of Budget Spent(Rs in lakhs)"
   const selectOption =[
      "All States",
   ]
   res.render("chart4", {label,data1,data2,data3,label_x, label_y, selectOption, label1,label2,label3})
})

app.listen(port,()=>{})


//function to create object
function createObject(keys, values) {
   const obj = Object.fromEntries(
       keys.map((key, index) => [key, values[index]]),
   );

   return obj;
}