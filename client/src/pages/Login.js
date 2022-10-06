import React from 'react';
import {Form, message} from 'antd';
import Input from 'antd/lib/input/Input';
import { Link, useNavigate } from 'react-router-dom';
import "../resources/authentication.css";
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate()
    const onFinish = async (values) => {
      try{
       const response = await axios.post("/api/login", values)
       localStorage.setItem('Transaction', JSON.stringify(response))
       message.success('Login successfully')
       navigate("/")
      } catch(error){
        message.error('Login failed')
      }
    }

  return (
    <div className="register">
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