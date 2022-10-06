import './App.css';
import 'antd/dist/antd.css';
import {Button} from 'antd';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Test from './pages/Test';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/test" element={<Test />}/>
        <Route  path="/login" element={<Login />}/>
        <Route  path="/register" element={<Register />}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}
// export function ProtectRoute(props){
//   if(localStorage.getItem("transaction")){
//     return props.children
//   }else{
//     return <Navigate  to="/login"/>
//   }
// }

export default App;
