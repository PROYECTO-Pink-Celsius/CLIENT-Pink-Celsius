import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function BasicDialog(props) {
  const {open, setOpen} = props

  const [data, setData] = useState([])

  useEffect(() => {
    open ? fetchData(): null;
  }, [open]);

  const fetchData = async () => {
    try {
      fetch('api/data/all/TOPLEFT')
      .then(response => response.json())
      .then(setData)
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        scroll='body'
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">TEMPERATURAS</DialogTitle>
        <DialogContent dividers={false}>

     
        {data.map((d, index) => (
            <div key={index}>{`${d.hour} - ${d.temperature} `}</div>
        ))}
      
        </DialogContent>
      </Dialog>
    </div>
  );
}
