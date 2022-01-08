import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/Form'
import Login from './components/Login'


export default function App() {
    return (
        <div>
            <Header />
            <div className='auth'>
            <Form />
            <Login />
            </div>
            <Footer />
        </div>
    )
}
