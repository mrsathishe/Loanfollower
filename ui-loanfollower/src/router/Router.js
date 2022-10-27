import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../containers/App';
import Home from '../containers/Home';
import About from '../containers/About';
import Login from '../containers/Login';
import RequireAuth from './RequireAuth';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Register from '../containers/Register';

const Router = () => {
    return (
        <>
            <Header></Header>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={
                            <RequireAuth>
                                <App />
                            </RequireAuth>
                        }
                        >
                            <Route index element={<Home />} />
                            {/** if you need to use app as common page, you can use other pages inside the tah,
                         * need to mention the outlet tag in app compoenent
                          */
                            }
                            <Route path='about' element={<About />} />

                            {/** added inside requiredAuth becuase to restict move to login or register page after logged in */}
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                        </Route>
                        {/**
                     * This is for to use the page outside app component, do need to use outlet tag.
                     */
                        }
                    </Routes>
                </BrowserRouter>
            </div>

            <Footer />
        </>
    )
}

export default Router;