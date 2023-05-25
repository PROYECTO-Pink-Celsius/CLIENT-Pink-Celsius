import React, {useState} from 'react';
import './Basic.css'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const noData = "------"

export default function BasicCard(props) {
  const {data, setOpen} = props

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data ? data.sector:noData}
        </Typography>
        <Typography variant="h5" component="div">
            {data ? data.temperature + ' °C':noData} 
        </Typography>
        <Typography variant="body2">
            {data ? data.hour:noData}
        </Typography>
      </CardContent>
      <CardActions className='container' >
        <Button onClick={() => setOpen(true)} size="small">Mas Datos </Button>
      </CardActions>
    </Card>
  );
}
