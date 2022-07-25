import React, { useState } from 'react';
import { Box, Typography, Input, Button, Grid, Container } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';

function App() {

  const [val, setVal] = useState('');

  const backspace = () => {
    try {
      setVal(val.slice(0, -1))
    } catch (error) {
      setVal('')
    }
  }

  const calculator = () => {
    try {
      setVal(eval(val));
    } catch (error) {
      setVal(Error)
    }
  }


  return (
    <Container maxWidth='xs'>
      <Box>
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography className='text-info' variant='h3'> Calculator </Typography>
        </Box>
        <Box>
          <Box sx={{ boxShadow: 3 }}>
            <Input type='text' className='form-control text-center' value={val} />
          </Box>
        </Box>
        <Box sx={{ py: 3 }}>
          <Box>
            <Grid container>
              <Grid xs={6}>
                <Box>
                  <Button color="error" variant='contained' value='C' onClick={() => backspace()}> Clear </Button>
                </Box>
              </Grid>
              <Grid xs={3}>
                <Box>
                  <CalculateIcon />
                </Box>
              </Grid>
              <Grid xs={3}>
                <Box>
                  <Button value='+' onClick={(e) => setVal(val + e.target.value)}> + </Button>
                </Box>
              </Grid>
              <Grid xs={3}>
                <Box sx={{py: 3}}>
                  <Button value='7' onClick={(e) => setVal(val + e.target.value)}> 7 </Button>
                </Box>
              </Grid>
              <Grid xs={3}>
                <Box sx={{py: 3}}>
                  <Button value='8' onClick={(e) => setVal(val + e.target.value)}> 8 </Button>
                </Box>
              </Grid>
              <Grid xs={3}>
                <Box sx={{py: 3}}>
                  <Button value='9' onClick={(e) => setVal(val + e.target.value)}> 9 </Button>
                </Box>
              </Grid>
              <Grid xs={3}>
                <Box sx={{py: 3}}>
                  <Button value='*' onClick={(e) => setVal(val + e.target.value)}> * </Button>
                </Box>
              </Grid>
              <Grid xs={3}>
                <Box>
                  <Button value='4' onClick={(e) => setVal(val + e.target.value)}> 4 </Button>
                </Box>
              </Grid>
              <Grid xs={3}>
                <Box>
                  <Button value='5' onClick={(e) => setVal(val + e.target.value)}> 5 </Button>
                </Box>
              </Grid>
              <Grid xs={3}>
                <Box>
                  <Button value='6' onClick={(e) => setVal(val + e.target.value)}> 6 </Button>
                </Box>
              </Grid>
              <Grid xs={3}>
                <Box>
                  <Button value='-' onClick={(e) => setVal(val + e.target.value)}> - </Button>
                </Box>
              </Grid>
              <Grid xs={3}>
                <Box sx={{py: 3}}>
                  <Button value='1' onClick={(e) => setVal(val + e.target.value)}> 1 </Button>
                </Box>
              </Grid>
              <Grid xs={3}>
                <Box sx={{py: 3}}>
                  <Button value='2' onClick={(e) => setVal(val + e.target.value)}> 2 </Button>
                </Box>
              </Grid>
              <Grid xs={3}>
                <Box sx={{py: 3}}>
                  <Button value='3' onClick={(e) => setVal(val + e.target.value)}> 3 </Button>
                </Box>
              </Grid>
              <Grid xs={3}>
                <Box sx={{py: 3}}>
                  <Button value='/' onClick={(e) => setVal(val + e.target.value)}> / </Button>
                </Box>
              </Grid>
              <Grid xs={3}>
                <Box sx={{py: 2}}>
                  <Button value='0' onClick={(e) => setVal(val + e.target.value)}> 0 </Button>
                </Box>
              </Grid>
              <Grid xs={3}>
                <Box sx={{py: 2}}>
                  <Button value='.' onClick={(e) => setVal(val + e.target.value)}> . </Button>
                </Box>
              </Grid>
              <Grid xs={6}>
                <Box sx={{py: 2}}>
                  <Button variant='contained' fullWidth value='=' onClick={() => calculator()}> = </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default App