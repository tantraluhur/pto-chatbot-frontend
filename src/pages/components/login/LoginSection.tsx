import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { CarouselSection } from './components';

export const LoginSection = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh'}}
        >
            <Box
            width={1000}
            height={500}
            display={'flex'}
            >   
                <CarouselSection />
            </Box>
        </Grid>
    )
}