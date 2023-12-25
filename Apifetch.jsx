import {useState,useEffect} from 'react'

const APIfetch=()=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
const fetchData=async()=>{
    const apiData=await fetch('https://jsonplaceholder.typicode.com/todos');
    const jsonData=await apiData.json();
setData(jsonData)
}
fetchData();
    },[setData]);
    return(
        <>
<h1>
    calling from API fetch
</h1>
<ul>

{data.map((item) => (
    <li>{item.title}</li>
    ))
}
</ul>
</>
     
    )
}
export default APIfetch;