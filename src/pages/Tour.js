import Container from '@mui/material/Container';
import CustomizedAccordions from '../components/Accordion';
import ImageCollage from '../components/ImageCollage';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BasicModal from '../components/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Tour = () => (
  <Container sx={{ width: 900 }}>
    <Typography variant='h3' component='h1' marginTop={3}>
      Explore the World in Vegas
    </Typography>
    <Box marginTop={3} sx={{ display: 'flex' }}>
      <img
        src='https://assistotuviaje.com/wp-content/uploads/2021/08/TSV-Destinos-Jun-Art-12-Foto-2-1030x579.jpg'
        alt=''
        height={325}
      />
      <ImageCollage />
    </Box>
    <Box>
      <Typography variant='h6' component='h4' marginTop={3}>
        About this ticket
      </Typography>
      <Typography variant='paragraph' component='p' marginTop={3}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, distinctio
        quo sequi aliquid modi asperiores nemo officiis similique, mollitia
        reprehenderit soluta itaque dicta deserunt commodi odit voluptatum
        doloribus! Quod sint sequi saepe in iste veniam fugiat aspernatur
        dolores eum porro!
      </Typography>
    </Box>
    <Box marginBottom={10}>
      <Typography variant='h6' component='h4' marginTop={3} marginBottom={2}>
        Frecuently Asked Questions
      </Typography>
      <CustomizedAccordions />
    </Box>
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}>
      <BottomNavigation>
        <BasicModal />
      </BottomNavigation>
    </Paper>
  </Container>
);

export default Tour;
