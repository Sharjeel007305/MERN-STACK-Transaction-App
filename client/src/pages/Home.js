import { message, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AddEdittransaction from '../components/AddEditTransaction.js';

import DefaultLayout from '../components/DefaultLayout';
import Spinner from '../components/Spinner.js';
import "../resources/transactions.css"

const Home = () => {
  const [showAddEditTransactionModal, setshowAddEditTransactionModal] = useState(false);
  const [loading,setloading] = useState(false);
  const [transactionsData, settransactionsData] = useState([]);
  const getTransactions = async()=> {
    try{
      const user = JSON.parse(localStorage.getItem("users"))
      setloading(true)
     const response = await axios.post("/api/transactions/get-all-transaction", {userId: user._id});
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
  },[])

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
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
      title : "Reference",
      dataIndex: "reference",
    }
  ]

  return (
   <DefaultLayout>
    {loading && <Spinner /> }
    <div className="filter d-flex justify-content-between align-items-center">
      <div>

      </div>
      <div>
      <button className="primary" onClick={()=> setshowAddEditTransactionModal(true)}>ADD NEW</button>
    </div>
    </div>
 
    <div className="table-analtics">
      <Table columns={columns} dataSource={transactionsData} />
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
