/* Global Variables */
const api_key="&appid=d82c0ab0b85c6b820ce4a3fa564edf71"
const url="https://api.openweathermap.org/data/2.5/weather?zip="
//get the Elements
const btn=document.getElementById('generate')
const temp=document.getElementById("temp")
const date=document.getElementById("date")
const content=document.getElementById("content")
const feelings=document.getElementById('feelings')
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();




//functions

const postData=async (url,data)=>{
console.log(data)
  const respon= await fetch(url,{
    method: "POST",
    credentials: "same-origin",
    mode:"cors",
    headers: {
      "Content-Type":"appliction/json",
    },
    body: JSON.stringify(data),
  });
  try{
     const newdata = await respon.json();
     console.log(newdata);
     updatepage(newdata["temp"],newdata["cont"])
}catch(error){
      console.log(error)
  }
};


const getdata=async (url,zip,api)=>{
  try{
    let respon= await fetch(url+zip+api)
    console.log(respon.status)
    if (respon.status==404){
      temp.innerHTML=`not defiend`;
      date.innerHTML=newDate;
      content.innerHTML=`content`;    
    }
    if (respon.status==200){
       const newdata = await respon.json();
       postData("/recive_data",newdata)
    }
  }catch(error){
    temp.innerHTML=`not defiend`;
    date.innerHTML=newDate;
    content.innerHTML=`content`;    
    console.log(error)
  };
};

function updatepage(new_temp,cont){
   temp.innerHTML=new_temp;
   date.innerHTML=newDate;
   content.innerHTML=cont; 
}

//events
btn.addEventListener("click",()=>{
  const zipcode=document.getElementById('zip').value;
  if (zipcode === ` `){
    console.log("please enter the zip code")
  }else{  
    console.log(zipcode);
    getdata(url,zipcode,api_key);}
})
