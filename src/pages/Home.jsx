import React , { useEffect , useState} from 'react'
import { Container , Button} from 'react-bootstrap'
import "../styles/Home.css";
import axios from 'axios'


const Home = () => {
const [res , setRes]  = useState({})



useEffect(()=>{
     const user =JSON.parse(localStorage.getItem('userInfo')); 
     if(user && user.token){
          getData(user.token)
     }
},[]);

     const getData = async (token)=>{
          try{
               const config = {
                    headers:{
                         authorization : token
                    }
               }
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/home`, config); 
          console.log(response);

          if(response.data === 'Invalid Token'){
               alert("Please Login Again");
          // }else if(response.data ='server busy'){
          //      alert("get data server busy")
          }else if(response?.status){
               setRes(response.data)
               alert('login sucessfully')
          }
          }catch(e){
               console.log(e)
         
     }};
   

  return (
   <Container>
        <h1>Welome to our website</h1>
        <p>we are here to serve you</p>
        <p>{res.name}</p>
        <Button variant='primary' type = "submit">
         Get Started 
        </Button>
   </Container>

  )};

export default Home
