import React from 'react';
import {Form, message} from 'antd';
import Input from 'antd/lib/input/Input';
import { Link } from 'react-router-dom';
import "../resources/authentication.css";
import axios from 'axios'

const Register = () => {
    const onFinish = async(values) => {
        try{
            await axios.post("/api/users/register", values)
            message.success("Registration Successfull")
        }catch(error){
            message.error('something went wrong')
        }
    }

  return (
    <div className="register">
        <div className="row justify-content-center align-items-center w-100 h-100">
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
            <div className="col-md-4">
                <Form layout="vertical" onFinish={onFinish}>
                <h1> TRANSACTION APPLICATION / REGISTER</h1>
                <hr />
                    <Form.Item label="Name" name="name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input />
                    </Form.Item>
                    <div className="d-flex justify-content-between align-item-center">
                        <Link to="/login"> Already Registered , Click Here To Login</Link>
                        <button className="primary" type="submit">REGISTER</button>
                    </div>
                </Form>
                
            </div>
        </div>
    </div>
  )
}

export default Register