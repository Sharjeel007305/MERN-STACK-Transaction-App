import { DatePicker, message, Select, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AddEdittransaction from '../components/AddEditTransaction.js';

import DefaultLayout from '../components/DefaultLayout';
import Spinner from '../components/Spinner.js';
import "../resources/transactions.css"
import moment from "moment"
import { UnorderedListOutlined, AreaChartOutlined  } from '@ant-design/icons';
import Analatics from '../components/Analatics.js';


const { RangePicker } = DatePicker;
const Home = () => {
  const [showAddEditTransactionModal, setshowAddEditTransactionModal] = useState(false);
  const [loading,setloading] = useState(false);
  const [transactionsData, settransactionsData] = useState([]);
  const [selectedRange, setselectedRange] = useState([]);
  const [viewType, setViewType] = useState();
  const [frequency, setfrequency] = useState('7');
  const [type, setType] = useState('all');
  

  const getTransactions = async()=> {
    try{
      const user = JSON.parse(localStorage.getItem("users"))
      setloading(true)
     const response = await axios.post("/api/transactions/get-all-transaction", {
      userId: user._id,
      frequency,
      ...(frequency === "custom" && {selectedRange}),
      type
    
    });
     console.log(response.data,"shakjsha")
     settransactionsData(response.data)
     setloading(false)
    } catch(error){
      setloading(false)
      message.error('Login failed')
    }
  }

  useEffect(()=>{
    getTransactions()
  },[frequency, selectedRange, type])

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title : "Reference",
      dataIndex: "reference",
    }
  ]

  return (
   <DefaultLayout>
    {loading && <Spinner /> }
    <div className="filter d-flex justify-content-between align-items-center">
      <div className='d-flex'>
        <div className= "d-flex flex-column" >
          <h6>Select Frequency</h6>
          <Select value={frequency} onChange={(value)=> setfrequency(value)}>
            <Select.Option value="7">Last 1 Week</Select.Option>
            <Select.Option value="30">Last 1 Month</Select.Option>
            <Select.Option value="365">Last 1 Year</Select.Option>
            <Select.Option value="custom">Custom</Select.Option>
          </Select>
          {frequency === 'custom' && (
            <div className='mt-2'>
                 <RangePicker value={selectedRange} onChange={(values)=>setselectedRange(values)} />
              </div>
          )}
        </div>
        <div className= "d-flex flex-column mx-5" >
          <h6>Select Type</h6>
          <Select values={type} onChange={(values)=> setType(values)}>
            <Select.Option value="all">All</Select.Option>
            <Select.Option value="Income">Income</Select.Option>
            <Select.Option value="expence">Expence</Select.Option>
          </Select>
        </div>
      </div>
      <div className='d-flex'>
        <div>
            <div className='view-switch mx-5'>
            <UnorderedListOutlined className={`mx-3 ${
              viewType === 'table' ? 'active-icon' : 'inactive-icon'}`} 
              onClick={()=>setViewType('table')}
              size={30}
              />
            <AreaChartOutlined  className={`${
              viewType === 'analytics' ? 'active-icon' : 'inactive-icon'}`}
              onClick={()=>setViewType('analytics')}
               size={30}
               />
            </div>
        </div>
      <button className="primary" onClick={()=> setshowAddEditTransactionModal(true)}>ADD NEW</button>
    </div>
    </div>
 
    <div className="table-analtics">
      { viewType === "table" ? <div className="table">
     <Table  columns={columns} dataSource={transactionsData} />
     </div> : <Analatics  transactions={transactionsData}/>

      }
     
      
    </div>

   {showAddEditTransactionModal && (
   <AddEdittransaction
   showAddEditTransactionModal= {showAddEditTransactionModal}
   setshowAddEditTransactionModal = {setshowAddEditTransactionModal}
   getTransactions = {getTransactions}
   />)}
   </DefaultLayout>
  )
}

export default Home;
