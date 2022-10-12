import { Progress } from 'antd';
import React from 'react';
import '../resources/analatics.css'

const Analatics = ({transactions}) => {
    const totalTransactions = transactions.length
    const totalIncomeTransactions = transactions.filter(transaction => transaction.type === "income")
    const totalExpenceTransactions = transactions.filter(transaction => transaction.type === "expence")
    const totalIncomeTransactionsPercentage = (totalIncomeTransactions.length/totalTransactions)*100
    const totalExpenceTransactionsPercentage = (totalExpenceTransactions.length/totalTransactions)*100
 
    const totalTurnover = transactions.reduce((acc,transaction) => acc + transaction.amount, 0 )
    const totalIncomeTurnover = transactions.filter(transaction => transaction.type==='income').reduce((acc,transaction) => acc + transaction.amount, 0 )
    const totalExpenceTurnover = transactions.filter(transaction => transaction.type==='expence').reduce((acc,transaction) => acc + transaction.amount, 0 )
    const totalIncomeTurnoverPercentage = (totalIncomeTurnover/totalTurnover)*100
    const totalExpenceTurnoverPercentage = (totalExpenceTurnover/totalTurnover)*100
    return (
    <div className='analytics'>
      <div className="row">
        <div className="col-md-4 mt-3">
            <div className="transactions-count">
                <h4>Total Transactions : {totalTransactions}</h4>
                <hr />
                <h5>Income : {totalIncomeTransactions.length}</h5>
                <h5>Expence: {totalExpenceTransactions.length}</h5>
                <div className='progress-bars'>
                        <Progress className="mx-5" strokeColor='green' type='circle' percent={totalIncomeTransactionsPercentage.toFixed(0)}/>
                        <Progress strokeColor='red' type='circle' percent={totalExpenceTransactionsPercentage.toFixed(0)}/>
                </div>

            </div>

        </div>
        <div className="col-md-4 mt-3">
            <div className="transactions-count">
                <h4>Total Turnover : {totalTurnover}</h4>
                <hr />
                <h5>Income : {totalIncomeTurnover}</h5>
                <h5>Expence: {totalExpenceTurnover}</h5>
                <div className='progress-bars'>
                        <Progress className="mx-5" strokeColor='green' type='circle' percent={totalIncomeTurnoverPercentage.toFixed(0)}/>
                        <Progress strokeColor='red' type='circle' percent={totalExpenceTurnoverPercentage.toFixed(0)}/>
                </div>

            </div>

        </div>

      </div>
    </div>
  )
}

export default Analatics;