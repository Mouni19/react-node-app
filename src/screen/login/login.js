import React from 'react';
import IdentForm from 'composant/identFormcmp/identFormCmp';
import InscriForm from 'composant/inscriFormCmp/inscriFormCmp';
import {Link} from "react-router-dom";
import './login.css';
import Compte from 'screen/compte/compte';
import ChoisirCour from 'screen/choixducour/choixducour';
import Choixa from 'composant/choix/choixx';

const Login = () =>{
        return(
    <div className='login_container'>
        <h5><Link to={'/compte'}>ggggg</Link></h5>
        <h5><Link to={'/choixducour'}>llllllll</Link></h5>
        <div className="identification">
            <IdentForm/>
            <Choixa/>
        </div>
        <div className="inscription">
            <InscriForm/>
        </div>
    </div>
        );
    }


export default Login;