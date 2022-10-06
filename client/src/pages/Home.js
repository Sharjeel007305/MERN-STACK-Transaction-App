import React, { useState } from 'react'
import AddEdittransaction from '../components/AddEditTransaction.js';

import DefaultLayout from '../components/DefaultLayout';
import "../resources/transactions.css"

const Home = () => {
  const [showAddEditTransactionModal, setshowAddEditTransactionModal] = useState(false);

  return (
   <DefaultLayout>
    <div className="filter d-flex justify-content-between align-items-center">
      <div>

      </div>
      <div>
      <button className="primary" onClick={()=> setshowAddEditTransactionModal(true)}>ADD NEW</button>
    </div>
    </div>
 
    <div className="table-analtics">

    </div>

   {showAddEditTransactionModal && (
   <AddEdittransaction
   showAddEditTransactionModal= {showAddEditTransactionModal}
   setshowAddEditTransactionModal = {setshowAddEditTransactionModal}
   />)}
   </DefaultLayout>
  )
}

export default Home;
