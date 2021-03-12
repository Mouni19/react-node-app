import React from 'react';
import {Input,Button,FormControl} from "@material-ui/core";
import {useState} from 'react';
import './choixx.css';

const Choixa = () =>{

   const[code,setCode] = useState('');
   
    return (
        <div className='choixcontainer'> 
            <h3>Entrez le code pour choisir SVP</h3>

            <FormControl className='choixform'>  
              <Input type='String' name='code' placeholder='code du cour' onChange={(e)=>setCode(e.target.value)}></Input>
              <Button>Envoyer</Button>
            </FormControl>
       </div>
         );
        }
        
        export default Choixa;