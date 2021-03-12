import React from 'react';
import {Input,Button,FormControl} from "@material-ui/core";
import {useState} from 'react';
import './formModule.css';

const FormModule = () =>{

    const[module,setModule] = useState('');
    const[type,setType] = useState('');
    const[titre,setTitre] = useState('');
    const[année,setAnnée] = useState('');
    const[confirmPassWord,setConfirmPassword] = useState('');

    return (
        <div className='module_container'> 
        <h3>Veuillez SVP remplir les champs</h3>

        <FormControl className='module_form'>  
        <Input type='String' name='module' placeholder='intitulé du module' onChange={(e)=>setModule(e.target.value)}></Input>
       <Input type='String' name='type' placeholder='type' onChange={(e)=>setType(e.target.value)}></Input>
    <Input type='String' name='titre' placeholder="titre" onChange={(e)=>setTitre(e.target.value)}> </Input>
    <Input type='String' name='année' placeholder="année scolaire" onChange={(e)=>setAnnée(e.target.value)} > </Input>
      <Button>Envoyer</Button>
 </FormControl>
       
        </div>
         );
        }
        
        export default FormModule;