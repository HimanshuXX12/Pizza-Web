

const updater = require("../../axios");


const btn= document.querySelectorAll('.cart');


 for( let i=0;i<btn.length;i++)
 {
    btn[i].addEventListener('click',(e)=>{
         const data= JSON.parse(btn[i].dataset.pizza);
         console.log(data);


         updater(data);
    })
 }