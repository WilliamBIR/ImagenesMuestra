import lista from '../src/lista/lista.json'
import Image from 'next/image'
import React from 'react'
import { Grid, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function Home() {
  const [contadorimagenes,setContimagen]=React.useState(0)
  const [contadortabla,setContTabla]=React.useState(0)
  React.useEffect(() => {
    const timer = setInterval(() => {
      setContimagen((prevContador) => (prevContador>=3? 0 : prevContador+1))
      setContTabla((prevContatabla)=>(prevContatabla>=2 ? 0 : prevContatabla+1))
      
    }, 5000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);
  var tabla=lista.limpieza[contadortabla].hoja
  const imagenes=[
    "/0.png",
    "/1.jpg",
    "/2.jpg",
    "/3.jpg"
  ]
  return (
    <div>
      <Grid container>  
        <Grid item xs={8}>
          <Image
            src={imagenes[contadorimagenes]}
            alt="Imagen cargada"
            layout="responsive"
            width={1920}
            height={1080}
            />
        </Grid>
          <Grid item xs={4}>
            <Typography variant="h4" color="black" textAlign={'center'} noWrap>Precios</Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 100 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Precio</TableCell>
                    <TableCell align="center">Producto</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {tabla.map((row) => (
                    <TableRow
                      key={row.producto}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.precio}
                      </TableCell>
                      <TableCell align="center">{row.producto}</TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
    </div>
  )
}
