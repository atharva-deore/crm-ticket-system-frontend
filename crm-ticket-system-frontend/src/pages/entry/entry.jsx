import { useState } from "react";
import "./entry.css";
import { Login } from "../../components/login/login";
import { Passwordreset } from "../../components/passwordreset/passwordreset";


export const Entry = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [frmload,setfrmload]=useState('login');

    const handleOnchange = (e) =>{
        const {name, value} = e.target;
        
        switch(name){
            case 'email':
                setEmail(value);
                break;
            
            case 'password':
                setPassword(value);
                break;

                
                default:
                    break;
        }
        console.log(name,value)
    };


    const handleOnSubmit = e =>{
        e.preventDefault()

        if(!email || !password){
            alert("Fill up all the form");
        }
    };


    const handleOnResetSubmit = e =>{
        e.preventDefault()

        if(!email ){
            alert("Fill up all the form");
        }
    };


    const formSwitcher = (frmType) =>{
        setfrmload(frmType);
    }



    return(
        <div className="entry-page bg-info">
            <div className="form-box">
                {frmload === 'login' && 
                <Login   
                handleOnchange={handleOnchange}
                handleOnSubmit={handleOnSubmit}
                formSwitcher={formSwitcher}
                email={email}
                password={password}/>}

                {frmload === 'rest' && 
                <Passwordreset
                handleOnchange={handleOnchange}
                handleOnResetSubmit={handleOnResetSubmit}
                formSwitcher={formSwitcher}
                email={email}
                />}
            </div>
           
        </div>
    )
}