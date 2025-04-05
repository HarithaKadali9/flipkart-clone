import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import TopOffers from './components/TopOffers';
import Fashion from "./components/Fashion";
import Mobiles from './components/Mobiles';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import CartPage from './components/CartPage';
import ProceedToPayment from './components/ProceedToPayment';
import Payment from './components/Payment';
import CartEmpty from './components/CartEmpty';

function App() {
  const totalcount=0;
  return (
    <>
      <div className='text-lg  dark:bg-gray-900 dark:text-white'>
      <Router>
      <Header />  {/* Keep Header outside of Routes */}
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/topoffers" element={<TopOffers count={totalcount} />} />
        <Route path="/fashion" element={<Fashion count={totalcount} />} />
        <Route path="/mobiles" element={<Mobiles count={totalcount} />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/cart" element={<CartPage count={totalcount} price={1000} />} />
        <Route path='/proceedtopayment' element={<ProceedToPayment/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/emptycart' element={<CartEmpty/>}/>
      </Routes>
      
      <Footer /> {/* Keep Footer outside of Routes */}
    </Router>
      </div>
    </>
  )
}

export default App
