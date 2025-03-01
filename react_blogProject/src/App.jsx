import './App.css'
import React, { useState ,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth.js'
import {login,logout} from './store/authSlice'
import { Outlet } from 'react-router-dom'
import { Footer } from './components/index.js'
import { Header } from './components/index.js'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData)=>{
        if(userData){
          dispatch(login({user: userData}));
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
      <div className='w-full block'>
      <Header/>
        <main>
        TODO :<Outlet />
        </main>
        <Footer/>
      </div>
    </div>
  ) : null;                                   
}

export default App
