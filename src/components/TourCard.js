import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AccessTime } from '@mui/icons-material';
import Rating from '@mui/material/Rating';

const TourCard = () => {
  return (
    <Grid item xs={6}>
      <Paper elevation={3}>
        <img
          src='https://static.wixstatic.com/media/b20ea8_d1e33e6255fb46b38d8a3706b681d124~mv2.jpeg/v1/fill/w_940,h_705,al_c,q_90/b20ea8_d1e33e6255fb46b38d8a3706b681d124~mv2.webp'
          alt=''
          className='img'
        />
        <Box paddingX={1}>
          <Typography variant='subtitle1' component='h2'>
            Immerse into the Falls
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}>
            <AccessTime sx={{ width: 12.5 }} />
            <Typography variant='body2' component='p' marginLeft={0.5}>
              5 hours
            </Typography>
          </Box>
          <Box marginTop={3} sx={{ display: 'flex', alignItems: 'center' }}>
            <Rating
              name='read-only'
              value={4.5}
              readOnly
              precision={0.5}
              size='small'
            />
            <Typography variant='body2' component='p' marginLeft={0.5}>
              4.5
            </Typography>
            <Typography variant='body3' component='p' marginLeft={1.5}>
              (655 reviews)
            </Typography>
          </Box>
          <Box>
            <Typography variant='h6' component='h3' marginTop={0}>
              From C $147
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
