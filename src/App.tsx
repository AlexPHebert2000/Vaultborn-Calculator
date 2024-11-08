import React, { useState, useEffect } from 'react'
import './App.css'
import InputSection from './inputSection';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function App() {
  const [lifePer, setLifePer] = useState(3);
  const [lossPer, setLossPer] = useState(0);
  const [cardsPer, setCardsPer] = useState(1);
  const [damagePer, setDamagePer] = useState(0);
  const [current, setCurrent] = useState(1);
  const [created, setCreated] = useState(2);
  const [instances, setInstances] = useState(0);
  const [countSelf, setCountSelf] = useState(true);

  useEffect(() => {
    setInstances( 
      countSelf ? 
        (current + created) * created :
        created * (current + created - 1)
    );
    console.log('reloaded')
  })

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountSelf(e.target.checked);
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding:30}}>
      <h1>Vaultborn Calculator</h1>
      <h3>Quickly calculate the effects of copying cards like <a href="https://scryfall.com/card/big/20/vaultborn-tyrant">Vaultborn Tyrant</a> or <a href="https://scryfall.com/card/otj/149/terror-of-the-peaks">Terror of the peaks</a></h3>
      <Paper sx={{padding: 2}}>
        <Grid container spacing={1}>
          <Grid size={12}>
            <h2>Battlefield</h2>
          </Grid>
            <InputSection 
              name="current" 
              label="# on the battelfield"
              value={current} 
              setter={setCurrent}/>
            <InputSection 
              name="created" 
              label="# entering"
              value={created} 
              setter={setCreated}/>
            <Grid size={4}/>
            <Grid size={4}>
            <FormControlLabel label="Count self?" control={
              <Checkbox checked={countSelf} onChange={handleToggle}/>
            }/>
          </Grid>
          <Grid/>
          <Grid size={12}>
            <Divider variant='middle'/>
          </Grid>
          <Grid size={12}>
            <h2>Card Effects</h2>
          </Grid>
            <InputSection
              name="life gain"
              value={lifePer}
              setter={setLifePer}
            />
            <InputSection
              name="life loss"
              value={lossPer}
              setter={setLossPer}
            />
            <InputSection
              name="cards drawn"
              value={cardsPer}
              setter={setCardsPer}
            />
            <InputSection
              name="damage"
              value={damagePer}
              setter={setDamagePer}
            />
          <Grid size={12}>
            <Divider variant='middle'/>
          </Grid>
          <Grid size={12}>
            <h2>Results</h2>
          </Grid>
          {lifePer > 0 && instances > 0 ? 
            <Grid size={6}>
              <h3>Life Gained</h3>
              <h4>{instances * lifePer}</h4>
            </Grid> : <></>
          }
          {lossPer > 0 && instances > 0 ? 
            <Grid size={6}>
              <h3>Life Lost</h3>
              <h4>{instances * lossPer}</h4>
            </Grid> : <></>
          }
          {cardsPer > 0 && instances > 0 ? 
            <Grid size={6}>
              <h3>Cards Drawn</h3>
              <h4>{instances * cardsPer}</h4>
            </Grid> : <></>
          }
          {damagePer > 0 && instances > 0 ? 
            <Grid size={6}>
              <h3>Damage Dealt</h3>
              <h4>{instances * damagePer}</h4>
              <h3>Instances</h3>
              <h4>{instances}</h4>
            </Grid> : <></>
          }
        </Grid>
      </Paper>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <p>Developed by <a href='https://www.linkedin.com/in/alex-hebert-dev/'>Alex Hebert</a>. View the repo <a href='https://github.com/AlexPHebert2000/Vaultborn-Calculator'>here</a>.</p>
      </div>
    </div>
  )
}

export default App
