import React ,{ useState } from 'react';
import{ Container,Form, Button } from "react-bootstrap";
import "../styles/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'




const SignUp = () => {

const navigate = useNavigate()


    const [formData, setFormData] =useState({
        name:"",
        email:"",
        password:""
});


const handleChange = (e) => {
    const{name,value}=e.target
    setFormData({...formData,[name]:value});
};

const handleSubmit = async (e) =>{
        e.preventDefault();
    try{
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/signin/verify`, formData); 
        console.log(response);
        if(response.data === true){
            alert('registration link sent to email check your email')
            navigate('/login')
        }else if(response.data === false){
            alert('user already exist')
        }
    }catch(e){
        console.error("error during resigtration")
    }

};
    return (
         <Container>
           <h1>Registration form</h1>
           <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                    type ="text" 
                    name="name" 
                    value ={formData.name} 
                    onChange = {handleChange} 
                    required >
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    type ="email" 
                    name="email" 
                    value ={formData.email} 
                    onChange = {handleChange} 
                    required >
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type ="password" 
                    name="password" 
                    value ={formData.password} 
                    onChange = {handleChange} 
                    required >                
                    </Form.Control>
                </Form.Group>
                <Button variant='primary' type = "submit">
                Register
                </Button>
                <p>Already having an Account <Link to= "Login"> login </Link></p>
                <p>Note : ( After signing in, please click on the activation link that we've sent to your registered email address.)</p>
            </Form>
         </Container>
    );
};
export default SignUp;
