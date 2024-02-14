


const clicker= document.querySelectorAll('.clicker');
const counter= document.getElementById('counter');
// const changer= document.getElementById('changer');

const changer= document.querySelectorAll(".changer");
const linker= document.getElementById('special');
console.log(linker);
const amount= document.getElementById("amount");
console.log("query amount",amount);


const deleter= document.querySelectorAll('.deleter');
const order= document.querySelectorAll('.order_deleter');

 const gayab= document.getElementById('success-alert');
//  const table= document.getElementById('orderTableBody');




  if(gayab)
  {
     setTimeout(() => {
      gayab.remove();
      
     }, 1000);
  }

//   function generator_markup(orders)
//   {
//     return orders.map(((order)=>{
//        return 

//     }))




//   }
    
  
//   let orders=[];
//     let markup;



//   axios.get('/admin',{
//        headers:{
//          "X-Requested-with":"XMLHttpRequest"
//        }.then((res)=>{
//            orders= res.data;
//            markup=generator_markup(orders);
//            table.innerHTML=markup;

//        })
//   })


// const checker_axios= require('../../app/http/middleware/checker_axios');
// const decrease=  document.querySelectorAll(".clicker");

//  import Noty from '../../Noty';


//   console.log(Noty);


  for( let i=0;i<order.length;i++)
  {
      order[i].addEventListener('click', async (e)=>{
            
           const data= await JSON.parse(order[i].dataset.order);

           axios.post('/delete_order',data).then( async (res)=>{
              location.reload();

           });
      })
  }


     for( let i=0;i<deleter.length;i++)
     {
         deleter[i].addEventListener('click',(e)=>{
              const data=JSON.parse(deleter[i].dataset.pizza);

              axios.post('/delete',data).then( async (res)=>{
                console.log("post request amount",res.data.price)
                 amount.innerText= await  res.data.price;
                 location.reload();
                  
              });

         })
     }
  

    // function updater( data)
    // {
    //     axios.post('/update',data).then( async (res)=>{
    //             console.log(res);
    //             counter.innerText= await  res.data.total_item;
    //             changer.innerText= await res.data.cart.items.qty;
                
    //        }).catch((err)=>{
    //           console.log(err);
    //        })

         
        
    // }










 for( let i=0;i<clicker.length;i++)
 {
    clicker[i].addEventListener('click',async (e)=>{

        const input=clicker[i].dataset.pizza;
         
        const data= await JSON.parse(input);
        console.log("data",data);
        
        
          data.text=clicker[i].innerText;

             console.log("Printing the length", changer);

        //    console.log("Data before post request");
        //   console.log(data.text);
        
        //  updater(data);
       

           axios.post('/update',data).then( async (res)=>{
              // console.log("Responce added",res.data.details.item.name);
              counter.innerText= await  res.data.total_item;
              
              let output=res.data.details.item.name;
              
              if(data.text=='+')
              {
                 output=output+" is added sucessfully";
                 
                 alert(output);
               }
               else
               {
                  output= output +" is removed from the cart sucessfully";
                  alert(output);
               }
               
               
               
            }).catch((err)=>{
               console.log(err);
            })
         

       



       

    })
 }

   function decreaser(data)
   {

     axios.post('/decrease',data).then( async (res)=>{
        console.log(res);
           counter.innerText= await res.data.total_item;
     }).catch((err)=>{
         console.log(err);
     })
   }




 for( let i=0;i<decrease.length;i++)
 {
    decrease[i].addEventListener('click', async (e)=>{

         const data= await JSON.parse(decrease[i].dataset.pizza);
          decreaser(data);
    })
 }