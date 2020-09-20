import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main'

import './styles.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App></App>, rootElement) 
