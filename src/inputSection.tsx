import React from "react";

import Grid from '@mui/material/Grid2'
import Textfield from '@mui/material/TextField'

export default (
  props : {
    name: string, 
    label?: string, 
    value: React.ComponentState, 
    setter: React.Dispatch<React.SetStateAction<any>>
  }
) => {

  const {setter, value, name, label} = props;

  const handleInput = (e : React.ChangeEvent<HTMLInputElement>) => {
    setter(+e.target.value)
  }

  return (
    <Grid size={6}>
      <Grid container spacing={{xs: 0, md: 1}}>
        <Grid size={{xs: 12, md: 4}}>
          <h3>{toTitleCase(name)}</h3>
        </Grid>
        <Grid size={{xs: 12, md: 8}}>
          <Textfield
            name={name}
            label={label}
            onChange={handleInput} 
            value={value}
            fullWidth  
            />
        </Grid>
      </Grid>
    </Grid>
  )
}

const toTitleCase = (str :string) => {
  const arr = str.split(' ');
  const titleCaseArr = arr.map((word) => word[0].toUpperCase() + word.slice(1));
  return titleCaseArr.join(' ')
}