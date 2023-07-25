import { useState } from 'react';
import InputGroup from './inputGroup';

import './form2.css'

const Form2 = () => {
    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        password:'' 
    });
    const onSubmitForm = (e) =>{
        e.preventDefault();
        console.log('««««« onSubmitForm »»»»»', onSubmitForm);
    };
    const onchange = (value, name) =>{
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    };

    return (
        <div>
            <header>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <div className="logo-wrap">
                                <i class="fa-solid fa-circle" />
                                <a className="navbar-brand" href="#">
                                    Anywhere app
                                </a>
                            </div>

                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active " aria-current="page" href="#">
                                            Home
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Join
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
            </header>

            <main>
                <div className="form-container">
                    <div className="title">
                        <h2>START FOR FREE</h2>

                        <h1 className='greeting-title'>Create new account</h1>

                        <h2>
                            Already A member?

                            <span className='Login-title'>Log in</span>
                        </h2>
                    </div>

                    <div className="form-wrap">
                        <form onSubmit={onSubmitForm}> 
                            <div className="user-name">
                                <InputGroup 
                                    label = 'First Name'
                                    name = 'FirstName'
                                    value = {user.firstName}
                                    onchange = {onchange}
                                />

                                <InputGroup 
                                    label = 'Last Name'
                                    name = 'LastName'
                                    value = {user.lastName}
                                    onchange = {onchange}
                                />
                            </div>

                            <InputGroup 
                                    label = 'Email'
                                    name = 'Email'
                                    value = {user.email}
                                    onchange = {onchange}
                            />

                            <InputGroup 
                                    label = 'Password'
                                    name = 'Password'
                                    type='password'
                                    value = {user.password}
                                    onchange = {onchange}
                            />

                            <InputGroup 
                                    label = 'Re-confirm Password'
                                    name = 'Confirm'
                                    type='password'
                                    value = {user.password}
                                    onchange = {onchange}
                            />
                        </form>
                        <button onClick={onSubmitForm}>Submit</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Form2;
