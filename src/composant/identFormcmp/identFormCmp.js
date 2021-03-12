import React from 'react';
import {Input,Button,FormControl} from "@material-ui/core";
import {useState} from 'react';
import './identFormCmp.css';

const IdentForm = () =>{

   const[email,setEmail] = useState('');
   const[password,setPassword] = useState('');
 return (
<div className='ident_container'>
    <h3>Déja inscris?</h3>
    <h3>Identifiez-vous SVP</h3>
    <br/>
   <FormControl className='form_ident'>
        <Input type='String' name='email' placeholder="Votre mail" onChange={(e)=>setEmail(e.target.value)}> </Input>
        <Input type='passWord' name='passWord' placeholder="mot de passe" onChange={(e)=>setPassword(e.target.value)} > </Input>
        <Button>Envoyer</Button>
 </FormControl>

</div>
 );
}

export default IdentForm;