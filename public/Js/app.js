


const clicker= document.querySelectorAll('.clicker');
const counter= document.getElementById('counter');
// const changer= document.getElementById('changer');

const changer= document.querySelectorAll(".changer");
const linker= document.getElementById('special');
console.log(linker);
// const decrease=  document.querySelectorAll(".clicker");

//  import Noty from '../../Noty';


//   console.log(Noty);


   
  

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