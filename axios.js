








function updater(value)
{
    console.log(value);
     axios.post('http://127.0.0.1/update',value).then((res)=>{
         console.log(res,"pandu gupta");
     });
}





export default updater;