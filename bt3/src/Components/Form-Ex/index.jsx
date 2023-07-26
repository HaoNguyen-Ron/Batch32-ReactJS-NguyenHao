import { useState } from 'react';
import InputGroup from './inputGroup';

import './form2.css'

const Form2 = () => {
    // const [user, setUser] = useState({
    //     firstName:'',
    //     lastName:'',
    //     email:'',
    //     password:'' 
    // });
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
  

    const onSubmitForm = (e) =>{
        e.preventDefault();
        alert('submited')
    };
    const onchangeFirstName = (e) =>{
        setFirstName(e.target.value)
    }
    const onchangeLastName = (e) =>{
        setLastName(e.target.value)
    }
    const onchangeEmail = (e) =>{
        setemail(e.target.value)
    }
    const onchangePass = (e) =>{
        setPassword(e.target.value)
    }



    

    return (
        <div>
            <header>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <div className="logo-wrap">
                                <i className="fa-solid fa-circle" />
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
                        <form  onSubmit={onSubmitForm}> 
                            <div className="user-name">
                                <InputGroup 
                                    label = 'First Name'
                                    name = 'firstName'
                                    value = {firstName}
                                    onchange = {onchangeFirstName}
                                />

                                <InputGroup 
                                    label = 'Last Name'
                                    name = 'lastName'
                                    value = {lastName}
                                    onchange = {onchangeLastName}
                                />
                            </div>

                            <InputGroup 
                                    label = 'Email'
                                    name = 'email'
                                    value = {email}
                                    onchange = {onchangeEmail}
                            />

                            <InputGroup 
                                    label = 'Password'
                                    name = 'Password'
                                    type = 'password'
                                    value = {password}
                                    onchange = {onchangePass}
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
