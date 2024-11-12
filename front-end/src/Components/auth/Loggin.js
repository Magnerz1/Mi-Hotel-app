import React, {useState} from 'react';

function Loggin (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <div>
            <label>Email</label>
            <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email}></input>
            <label>Password</label>
            <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password}></input>
            <button>Ingresar</button>
        </div>
    );
}

export default Loggin