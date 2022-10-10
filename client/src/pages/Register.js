import React, { useEffect, useState } from 'react';
import {Form, message} from 'antd';
import Input from 'antd/lib/input/Input';
import { Link, useNavigate } from 'react-router-dom';
import "../resources/authentication.css";
import axios from 'axios'
import Spinner from '../components/Spinner';

const Register = () => {
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()

    const onFinish = async(values) => {
        try{
            setloading(true)
            await axios.post("/api/users/register", values)
            message.success("Registration Successfull")
            setloading(false)
        }catch(error){
            setloading(false)
            message.error('something went wrong')
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
                        <Input type="password"/>
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