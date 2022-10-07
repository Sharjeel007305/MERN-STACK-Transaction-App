import React, { useState } from 'react'
import { Form, Input, message, Modal, Select } from 'antd';
import Spinner from './Spinner';
import axios from 'axios';


const AddEdittransaction = (showAddEditTransactionModal,setshowAddEditTransactionModal) => {
    const [loading, setloading] = useState(false)

    const onFinish = async (values) => {
        try{
            const user = JSON.parse(localStorage.getItem("transaction"))
            setloading(true)
            await axios.post("/api/transactions/add-transaction", {...values, userid: user._id})
            message.success("Transaction added Successfull")
            setshowAddEditTransactionModal(false)
            setloading(false)
        }catch(error){
            setloading(false)
            message.error('something went wrong')
        }
    }
  return (
    <Modal 
      title="add Transaction" 
      visible={showAddEditTransactionModal} 
      onCancel={()=> setshowAddEditTransactionModal(false)}
      footer={false}
      >
        {loading && <Spinner /> }
      <Form layout="vertical" className="transaction-form" onFinish={onFinish}>
        <Form.Item label= "Amount" name="amount">
          <Input type="text"/>
        </Form.Item>
        <Form.Item label= "Type" name="type">
          <Select>
         <Select.Option value="Income">Income</Select.Option>
         <Select.Option value="expense">Expense</Select.Option>
         </Select>
        </Form.Item>
        <Form.Item label= "Category" name="category">
         <Select>
          {" "}
         <Select.Option value="salary">Salary</Select.Option>
         <Select.Option value="freenlance">Freenlance</Select.Option>
         <Select.Option value="entertainment">Entertainment</Select.Option>
         <Select.Option value="education">Education</Select.Option>
         <Select.Option value="medical">Medical</Select.Option>
         <Select.Option value="food">Food</Select.Option>
         <Select.Option value="tax">Tax</Select.Option>
         </Select>
        </Form.Item>
        <Form.Item label= "Date" name="date">
         <Input type="date"/>
        </Form.Item>
        <Form.Item label= "Reference" name="reference">
         <Input type="text"/>
        </Form.Item>
        <Form.Item label= "Description" name="description">
         <Input type="text"/>
        </Form.Item>
        <div className="d-flex justify-content-end">
          <button className="primary" type="submit">SAVE</button>
        </div>
      </Form>
    </Modal>
  )
}

export default AddEdittransaction