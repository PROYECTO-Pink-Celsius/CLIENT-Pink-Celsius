import { useState, useEffect } from 'react'
import './Basic.css'
import { Grid, Button } from '@mui/material';
import BasicCard from './BasicCard';
import BasicDialog from './BasicDialog'
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';

const data = {
  sector: 'aa',
  temperature: 'bb',
  hour: 'cc',
}

function BasicGrid() {
  const [topLeft, setTopLeft] = useState({})
  const [topRight, setTopRight] = useState({})
  const [botLeft, setBotLeft] = useState({})
  const [botRight, setBotRight] = useState({})

  const [open, setOpen] = useState(false)
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      fetch('api/data/TOPLEFT')
      .then(response => response.json())
      .then(data => setTopLeft(data))

      fetch('api/data/TOPRIGHT')
      .then(response => response.json())
      .then(data => setTopRight(data))

      fetch('api/data/BOTLEFT')
      .then(response => response.json())
      .then(data => setBotLeft(data))

      fetch('api/data/BOTRIGHT')
      .then(response => response.json())
      .then(data => setBotRight(data))


    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  return (
   <>
      <BasicDialog open={open} setOpen={setOpen}/>

      <Button onClick={fetchData}>
        <RefreshRoundedIcon sx={{ fontSize: 70 }}/>
      </Button>
       
        <Grid 
          container 
          justifyContent="center"
          alignItems="center"
          spacing={2}>
          <Grid item xs={-1} sm={3} md={3} lg={5}> 
            <BasicCard data={topLeft} setOpen={setOpen}/>
          </Grid>
          
          <Grid item xs={-1} sm={5} md={6} lg={5}>              
            <BasicCard data={topRight} setOpen={setOpen}/>
          </Grid>
          
          <Grid item xs={-1} sm={5} md={6} lg={5}>
            <BasicCard data={botLeft} setOpen={setOpen}/>
          </Grid>
          
          <Grid item xs={-1} sm={5} md={6} lg={5}>        
            <BasicCard data={botRight} setOpen={setOpen}/>
          </Grid>
        </Grid>
      
    
    </>
  );
};

export default BasicGrid
