import { useState } from 'react';
import InputGroup from './inputGroup';

import './form2.css'

const RegisterForm = () => {
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [email, setemail] = useState('');
    // const [password, setPassword] = useState('');
    const [icon, setIcon] = useState()
    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:''
    });
    console.log('««««« user »»»»»', user);
    const inputs = [
        {
            id:1,
            name:'firstName',
            type:'text',
            label:'First Name',
            error:'First name must contains 12 characters and none special characters or number',
            pattern: "^[a-zA-Z][a-zA-Z]+$",
            icon: <i className="fa-solid fa-address-card"></i>,
            required: true,
        },
        {
            id:2,
            name:'lastName',
            type:'text',
            label:'Last Name',
            error:'Last name must contains 3-12 characters and none special characters or number',
            pattern: "^[a-zA-Z][a-zA-Z]+$",
            icon: <i className="fa-solid fa-address-card"></i>,
            required: true,
        },
        {
            id:3,
            name:'email',
            type:'email',
            label:'Email',
            error:'It must be a valid email',
            icon: <i className="fa-solid fa-envelope-open-text"></i>,
            required: true
        },
        {
            id:4,
            name:'password',
            type:'password',
            label:'Password',
            error:'Password must contains 6-12 characters, one uppercased character, one special characters and a number',
            icon: <i className="fa-solid fa-eye"></i>,
            required: true,
            pattern:`^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$`,
            isShow: false
        },
        {
            id:5,
            name:'confirmPassword',
            type:'password',
            label:'Confirm Password',
            error:'Password does not match',
            icon: <i className="fa-solid fa-eye"></i>,
            required: true,
            pattern: user.password,
            isShow: false
        },
    ]
  

    const onSubmitForm = (e) =>{
        e.preventDefault();
    };

    const onchangeInput = (e) =>{
        setUser((prevState) =>({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    };

    // const handleShowPassword = () =>{
    //     {user.isShow
    //         ? setIcon(<i class="fa-solid fa-eye-slash"></i>)
    //         : setIcon(<i className="fa-solid fa-eye"></i>)
    //     }
    // }

    // const onchangeFirstName = (e) =>{
    //     setFirstName(e.target.value)
    // };

    // const onchangeLastName = (e) =>{
    //     setLastName(e.target.value)
    // };

    // const onchangeEmail = (e) =>{
    //     setemail(e.target.value)
    // };

    // const onchangePass = (e) =>{
    //     setPassword(e.target.value)
    // };

    return (
        <div className='form-background'>
            <header>
                    <nav className="navbar navbar-expand-lg">
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
                                        <a className="nav-link " aria-current="page" href="#">
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
                        <h4>START FOR FREE</h4>

                        <h1 className='greeting-title'>Create new account</h1>

                        <h4>
                            Already A member?

                            <span className='login-title'> <a href="">Log in</a></span>
                        </h4>
                    </div>

                    <div className="form-wrap">
                        <form  onSubmit={onSubmitForm}> 
                            {inputs.map(input =>(
                                <>
                                {/* <div className="user-name">
                                    <InputGroup 
                                    key={input[0].id} {...input}
                                    value={inputs[input.name]}
                                    onchange={onchangeInput}
                                    />

                                    <InputGroup 
                                    key={input[1].id} {...input}
                                    value={inputs[input.name]}
                                    onchange={onchangeInput}
                                    />
                                </div> */}

                                <InputGroup 
                                key={input.id}
                                {...input}
                                value={user[input.name]}
                                onchange={onchangeInput}
                                error={input.error}
                                icon={input.icon}
                                pattern={input.pattern}
                                />
                                </>
                            ))}
                            {/* <div className="user-name">
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
                            /> */}
                        </form>
                        <button className='submitbtn' onClick={onSubmitForm}>Create account</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default RegisterForm;