import './App.css'
import React, { useState ,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import authService from './appwrite/auth.js'
import {login,logout} from './store/authSlice'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData)=>{
        if(userData){
          dispatch(login({userData}));
        }
        else{
          dispatch(logout());
        }
      })
      .finally(()=>{
        setLoading(false);
      })
        
  }, []);

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div>
        <Header/>
        <main>
        {/* <Outlet />  TODO*/} 
        </main>
        <Footer />
      </div>
    </div>
  ) : (null);                                   
}

export default App
