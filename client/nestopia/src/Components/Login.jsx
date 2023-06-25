
import './AuthForm.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';


const SignIn = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
  



    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Set the Content-Type header to application/json
        const headers = {
            'Content-Type': 'application/json'
        };
        // Send formDataToSend to the backend using Axios
        axios.post('http://127.0.0.1:5050/login', 
            {
                email,
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
                    <header>SignIn</header>
                    <form onSubmit={handleSubmit}>
                        <input type="email" 
                            name = 'email'
                            value={email} 
                            onChange={(e) => {setEmail(e.target.value)}}
                            placeholder="Enter your email" />
                        <input 
                            type="password" 
                            name = 'password'
                            value={password} 
                            onChange={(e) => {setPassword(e.target.value)}}
                            placeholder="Password" />
                        <button className='button' 
                            disabled={email === '' || password === '' ? true : false}>
                        Submit
                        </button>
                    </form>
                    <div className="signup">
                        <span className="signup">Don't have an account?
                        <Link to='/signup'>Signup</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn