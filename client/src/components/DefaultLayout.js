import React from 'react'
import { Dropdown, Menu,  } from 'antd';
import '../resources/default-layout.css';
import { useNavigate } from 'react-router-dom';

const DefaultLayout = (props) => {
  const users = JSON.parse(localStorage.getItem('Transaction'));
  const navigate = useNavigate();
  const menu = (
    <Menu
      items={[
        {
          label: (
          <li onClick={()=> {
            localStorage.removeItem('Transaction')
            navigate("/login")
          }}>
            Logout
          </li>
          ),
        }
      ]}
    />
  );
  return (
    <>
   
    <div className="layout">
        <div className="header d-flex justify-content-between align-item-center">
            <div>
                <h1 className="logo">Transaction Application</h1>
            </div>
            <div>
            <Dropdown overlay={menu} placement="bottomLeft" >
                <button className="primary">{users.name}</button>
            </Dropdown>
            </div>
        </div>
        <div className="content">
            {props.children}
        </div>


    </div>
    </>
  )
}

export default DefaultLayout;