import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function InvoiceElement() {
  
  return (
    <div className='border-2 px-5 py-5 h-screen mb-5 shadow-2xl'>
      <div>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-bold '>D&PLS</h1>
          <div className='w-1/3 '>
            <h1 className='text-xl font-bold'>Invoice</h1>
            <div className='border-b-4 border-indigo-500'></div>
            <p className='mt-2'>Date: 12 Jun 2023</p>
          </div>
        </div>
        <div className='border-b-2 my-4 md:my-8 '></div>
        <div>
          <h1 className='text-xl font-bold mb-5'>Bill To:</h1>
          <p className='flex gap-8 mt-2'><span className='font-bold'>Name:</span> .............Name</p>
          <p className='flex gap-8 mt-2'><span className='font-bold'>Address:</span> .............Address</p>
          <p className='flex gap-8 mt-2'><span className='font-bold'>Phone:</span> 00000......</p>
          <p className='flex gap-8 mt-2'><span className='font-bold'>Email:</span> ......@gmail.com</p>
        </div>
      </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={2}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Desc</TableCell>
            <TableCell align="right">Taka</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell>Doctor fee</TableCell>
              <TableCell align="right">500</TableCell>
              <TableCell align="right">500</TableCell>
            </TableRow>
            <TableRow >
              <TableCell>Booking fee</TableCell>
              <TableCell align="right">50</TableCell>
              <TableCell align="right">50</TableCell>
            </TableRow>
          <TableRow>
            <TableCell align="right"></TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">550</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
