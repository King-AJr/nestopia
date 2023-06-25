import './AuthForm.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';


const SignUp = () => {

    const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


    const [name, setName] = useState('');
    const [validName, setValidName] = useState(false);
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [validPass, setValidPass] = useState(false);
    const [matchPassword, setMatchPassword]  = useState('');
    const [checkMatch, setCheckMatch] = useState(false)
    const [email, setEmail] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    let match = false
    let result = false
    

        
      useEffect(() => {
        // eslint-disable-next-line
        if (name.length < 3) {
            setUsernameError('Username must be at least 3 characters long.');
            setValidName(false)
          } else {
            setUsernameError('');
            setValidName(true)
          }
    }, [name]);


    useEffect(() => {
        // eslint-disable-next-line
        if (password.length < 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[!@#$%^&*()]/.test(password)) {
            setPasswordError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one special character (!@#$%^&*()).');
            setValidPass(false);
          } else {
            setPasswordError('');
            setValidPass(true);
          }
               
        setCheckMatch(password === matchPassword);
        if (checkMatch === false) {
            setConfirmPasswordError('Passwords do not match.');
        }
        else {
            setConfirmPasswordError('')
        }
    }, [password, matchPassword]);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Set the Content-Type header to application/json
        const headers = {
            'Content-Type': 'application/json'
        };
        // Send formDataToSend to the backend using Axios
        axios.post('http://127.0.0.1:5050/signup', 
            {
                name,
                email,
                phone,
                password
            }, headers)
          .then(response => {
            // Handle the response from the backend
            console.log(response.data)
        })
        .catch(error => {
          console.error(error);
        });
    };


    return (
        <div>
            <div className="containers">
                <input type="checkbox" id="check"/>
                <div className="login form">
                    <header>Signup</header>
                    <form onSubmit={handleSubmit} action="#">
                        <input type="text"
                            name = 'name' 
                            value={name} 
                            onChange={(e) => {setName(e.target.value)}} 
                            placeholder="e.g John Doe" />
                        {usernameError !== '' && <p>{usernameError}</p>}
                        <input type="email" 
                            name = 'email'
                            value={email} 
                            onChange={(e) => {setEmail(e.target.value)}}
                            placeholder="Enter your email" />
                        <input type="text" 
                            value={phone}
                            name = 'phone' 
                            onChange={(e) => {setPhone(e.target.value)}}
                            placeholder="Enter your phone number" />
                        <input 
                            type="password" 
                            name = 'password'
                            value={password} 
                            onChange={(e) => {setPassword(e.target.value)}}
                            placeholder="Password" />
                        {passwordError !== '' && <p>{passwordError}</p>}
                        <input 
                            type="password" 
                            value={matchPassword} 
                            onChange={(e) => 
                            setMatchPassword(e.target.value)} 
                            placeholder="Confirm Password" />
                        {confirmPasswordError && <p>{confirmPasswordError}</p>}
                        <button className='button' 
                            disabled={!validName || !validPass || !checkMatch ? true : false}>
                        Submit
                        </button>
                    </form>
                    <div className="signup">
                        <span className="signup">Already have an account?
                        <Link to='/signin'>Signin</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp