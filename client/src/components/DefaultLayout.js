import React from 'react'
import '../resources/default-layout.css';

const DefaultLayout = (props) => {
  return (
    <div className="layout">
        <div className="header d-flex justify-content-between align-item-center">
            <div>
                <h1 className="logo">Transaction Application</h1>
            </div>
            <div>
              <h1 className='username'>
                Username
              </h1>
            </div>
        </div>
        <div className="content">
            {props.children}
        </div>


    </div>
  )
}

export default DefaultLayout;