import React from 'react';
import {Button} from "@material-ui/core";
import {useState} from 'react';
import {Link} from "react-router-dom";
import './cadreCompte.css';
import ChoisirCour from 'screen/choixducour/choixducour';

const CadreCompte = () =>{
    return (
        <div className='compte_container'> 
        <div className='entete'>
            <h3>Bienvenue sur votre page Amina Mesbah</h3>
            <Link to={'/editModule'}><Button>Partager</Button></Link>
            <Link to={'/choixducour'}><Button>Accéder</Button></Link>
        </div>
        <div className='count'>
            <h3>Vous avez N partage </h3>
        </div>
        </div>
         );
        }
        
        export default CadreCompte;