import React, { useState } from 'react';
import './choix.css'
import {Select,MenuItem,Button} from '@material-ui/core'

const Choix = () =>{
    const [category,setCategory]= useState(2);
    const updateSelectedVal =(e)=>{
        console.warn(e.target.value);
        setCategory(e.target.value);
    }
    return(
         <div className="conteneur1">
             <div className="selection">
            <Select value ={category} displayEmpty onChange={updateSelectedVal}>
                <MenuItem value="" disabled>Select catégorie</MenuItem>
                <MenuItem value={1}>Etudiant</MenuItem>
                <MenuItem value={2}>Enseignant</MenuItem>
            </Select>
            </div>
            <div classname="btn">
            <Button variant="contained" color="primary">
                Inscription
            </Button>
            <Button variant="contained" color="primary">
                Identification
            </Button>
            </div>
        </div>

    );
}
export default Choix;