import React, { useEffect, useState } from 'react';
import {Form, message} from 'antd';
import Input from 'antd/lib/input/Input';
import { Link, useNavigate } from 'react-router-dom';
import "../resources/authentication.css";
import axios from 'axios';
import Spinner from '../components/Spinner';


const Login = () => {
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()
    const onFinish = async (values) => {
      try{
        setloading(true)
       const response = await axios.post("/api/users/login", values);
       localStorage.setItem('Transaction', JSON.stringify({...response.data, password:''}));
      //  const ls = localStorage.setItem('Transaction', JSON.stringify({...response.data, password:''}));
       setloading(false)
       navigate("/")
       console.log(localStorage)
       message.success('Login successfully')
       
      } catch(error){
        setloading(false)
        message.error('Login failed')
      }
    }
    useEffect(() => {
      if(localStorage.getItem('transaction')) {
        navigate("/") 
      }
    } ,[])

  return (
    <div className="register">
      {loading && <Spinner /> }
        <div className="row justify-content-center align-items-center w-100 h-100">
            <div className="col-md-4">
                <Form layout="vertical" onFinish={onFinish}>
                <h1> TRANSACTION APPLICATION / Login</h1>
                <hr />
                    <Form.Item label="Email" name="email">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input />
                    </Form.Item>
                    <div className="d-flex justify-content-between align-item-center">
                        <Link to="/register"> Not Register , Click Here To Register</Link>
                        <button className="primary" type="submit">LOGIN</button>
                    </div>
                </Form>
                
            </div>
            <div className="col-md-5">
                <div className="lottie">
                <lottie-player 
                src="https://assets4.lottiefiles.com/packages/lf20_06a6pf9i.json"
                  background="transparent"  
                  speed="1" 
                  loop autoplay
                  >
                  </lottie-player>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login