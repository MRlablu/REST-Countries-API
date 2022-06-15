// var myVar = document.querySelector("#imgId");



// function mypic1(){
//     myVar.src ="img/2.jpg"
// }

// function mypic2(){
//     myVar.src ="img/1.jpg";
// }

// // create html elemnt-------

//  var heading3 = document.createElement("h1");
//  var text = document.createTextNode("this is heading");
//  heading3.appendChild(text);

//  var myDiv = document.getElementById("my-div");
//  myDiv.appendChild(heading3);

//  var heading2 = document.getElementsByTagName("h1")[1];
//  myDiv.removeChild(heading2);

// // create top new elemnt--------
//  var heading0 = document.createElement("h1");
//  var text0 = document.createTextNode("this is heading 0");
//  heading0.appendChild(text0);
//  var heading1 = document.getElementsByTagName("h1")[0];
//  myDiv.insertBefore(heading0,heading1);

// // next previous img set----

// var photos = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg"];
// var imgTag = document.querySelector("img");

// var count = 0;

// function next(){
//     count++;

//     if(count>=photos.length){
//         count=0;
//         imgTag.src = photos[count];
//     }else{
//         imgTag.src = photos[count];
//     }
// }


// function prev(){
//     count--;

//     if(count <0){
//         count=photos.length-1;
//         imgTag.src = photos[count];
//     }else{
//         imgTag.src = photos[count];
//     }
// }

// EvenLisener************

// var myVar=document.querySelector("h1");
// myVar.addEventListener("mouseover",function(){
//     myVar.classList.add("my-style");
// });

// myVar.addEventListener("mouseout",function(){
//     myVar.classList.remove("my-style");
// });


// document.querySelectorAll(".btn")[0].addEventListener("click", function(){
//      var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text +" is checked";
// });


// document.querySelectorAll(".btn")[1].addEventListener("click", function(){
//     var text = this.innerHTML;
//    document.querySelector("h1").innerHTML = text +" is checked";
// });

// document.querySelectorAll(".btn")[2].addEventListener("click", function(){
//     var text = this.innerHTML;
//    document.querySelector("h1").innerHTML = text +" is checked";
// });


// const searchBar = document.querySelector(".search-bar");
// const searchBtn = document.querySelector("#search-btn");
// const result = document.querySelector(".result");
// const searchSection = document.querySelector(".search-section");

// searchBtn.addEventListener("click", () => {
//   let url = `https://restcountries.eu/rest/v2/name/${searchBar.value}`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => displayCountry(data));
// });

// const displayCountry = (data) => {
//   console.log(data);
//   data.forEach((country) => {
//     const div = document.createElement("div");
//     div.className = "card d-flex m-5 shadow";
//     div.style.width = "18rem";
//     div.innerHTML = `
//             <img src="${country.flag}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h2 class="card-text">${country.name}</h2>
//             </div>
//     `;
//     result.appendChild(div);
//   });
// };
        // Country*************REst



// "use strict"
//   function msg(text){
//       console.log(`${text}`)
//   }
//   msg("I miss u");



// let students ={
//     Id : 101,
//     name : 'Aminur Rahman',
//     roll : 900044
// }
// for(let x in students){
//     console.log(`${x}:${students[x]}`);
// }


// var numbers = [20,33,45,13,18,];

// for(var x =0; x<numbers.length; x++){
//     console.log(x);
//     console.log(numbers[x]);
// }

// numbers.forEach(myfun)
// function myfun(x){
//     console.log(x);
// }

// var number = [4,5,7,6,9,8];
// var fun =[];
// number.forEach(function(x){
//     fun.push(x*x);
// })
// console.log(fun);
  

        //  $ filter $  //

// var number=[23,43,56,567,7,5,48];
// var newNumber=number.filter(function(x){
//       return x>20;
// })

//  console.log(newNumber);



    // .......map......... //

//  let num =[4,5,6,7]
//  let nums=num.map(function(x){
//    return x*x;
//  })
//  console.log(nums);



// ........forEach.......  //

//  let pera=[7,4,6,9,3]
//  let newPera=[]
//  pera.forEach(function(x){
//    newPera.push(x+5);
//  })
//  console.log(newPera);



// .......Arrow Function  .......  //
  // function play1(){
  //   console.log("I am a proggrammer1");
  // }

  // const play2=() => {
  //   console.log("I am a proggrammer2");
  // }

  // play1();
  // play2();

  // function dis1(){console.log("shurtcut1")};

  // const dis2= () =>console.log("shurtcut1");

  // dis1();
  // dis2();
  
  // const dis3=() => "i am call return";

  // console.log(dis3());


  // ........Peramitar pass........  //

  // function add(num1,num2){
  //   return num1+num2;
  // }
  // console.log(add(20,50));


  // const add1 = (num3,num4) => num3*num4;
  //     //  return ujjo aca
  // console.log(add1(5,9));


  // ......... Arrow function project.......  //

//   var students = [
//     {
//       name:'Hridoy Hasan',
//       id : 900044,
//       roll : 44,
//       gpa : 4.06
//     },
//     {
//       name:'Habib Hasan',
//       id : 900046,
//       roll : 46,
//       gpa : 3.66
//     },
//     {
//       name:'Hasor Hasan',
//       id : 900045,
//       roll : 45,
//       gpa : 2.36
//     },
//     {
//       name:'Habiby Hasan',
//       id : 900047,
//       roll : 47,
//       gpa : 3.06
//     }
//   ]

//   function studentNames (){
//     return students.filter(function(x){
//       return x.gpa>3
//     }).map(function(y){
//       return y.name;
//     })
//   }

//   console.log(studentNames());

// // .............Arrow Function ..........  //

//   const stu =() => {
//     return students.filter((x) => x.gpa>4).map((y)=>y.name);
//   }

//   console.log(stu());


//   // .............. hebbi shortcut ........  //
//   const stud =()=> students.filter((x) =>x.roll>45).map((y)=>y.name);

//   console.log(stud());

// ....................End project............. //

//    ........... Array distracture ..........   //

// let numbers = [12,13,24,34,56]
// let [num1,num2,...z] = numbers

// console.log(z);
// console.log(num2);



// .......swap........ //

// let a=10, b=20;
// [a,b]=[b,a];

// console.log(a);
// console.log(b);

//  ............object dis.........  //

// const stu ={
//   id:1234,
//   fullName:'hridoy hasan',
//   gpa: 3.89,
//   language:{
//     native:'bangla',
//     others:'english'
//   }
// }

// const {fullName,language,native}=stu

// console.log(language.others);
// console.log(fullName);
// console.log(language.native);
// console.log(stu.gpa);



// const stuInfo =({id,fullName}) =>console.log(`${id},${fullName}`);
// const student= {
//   id:132,
//   fullName:'Nazmul Hasan'
// }
// stuInfo(student);


// ....Rest countries API.......  //
 
const countriesList = document.getElementById("countries");
let countries;

countriesList.addEventListener("change", newCountrySelection);

function newCountrySelection(event) {
  displayCountryInfo(event.target.value);
}


fetch("https://restcountries.com/v2/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error:", err));

function initialize(countriesData) {
  countries = countriesData;
  let options = "";

  countries.forEach(country => options+=`<option value="${country.alpha3Code}">${country.name}</option>`);

  countriesList.innerHTML = options;

  countriesList.selectedIndex = Math.floor(Math.random()*countriesList.length);
  displayCountryInfo(countriesList[countriesList.selectedIndex].value);
}

function displayCountryInfo(countryByAlpha3Code) {
    const countryData = countries.find(country => country.alpha3Code === countryByAlpha3Code);
    document.querySelector("#flag-container img").src = countryData.flag;
    document.querySelector("#flag-container img").alt = `Flag of ${countryData.name}`;  
    document.getElementById("capital").innerHTML = countryData.capital;
    document.getElementById("dialing-code").innerHTML = `+${countryData.callingCodes[0]}`;
    document.getElementById("population").innerHTML = countryData.population.toLocaleString("en-US");
    document.getElementById("currencies").innerHTML = countryData.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(", ");
    document.getElementById("region").innerHTML = countryData.region;
    document.getElementById("subregion").innerHTML = countryData.subregion;
  } 