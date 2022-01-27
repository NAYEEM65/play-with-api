import React from 'react';
import './App.css';
import User from './components/User/User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SingleUser from './components/User/SingleUser';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<User />} />
                <Route path="/user/:userId" element={<SingleUser />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
