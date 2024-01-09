// import { CssVarsProvider } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
// import CssBaseline from '@mui/joy/CssBaseline';
// import framesxTheme from '../../theme/theme';
import { Block1 } from '../blocks/Block1';
import Header from './Header';

export const LandingPage = () => {
    //   <CssVarsProvider disableTransitionOnChange theme={framesxTheme}>
    //       <CssBaseline />
    return (
        <>
            <Header />
            <Box
                sx={{
                    height: '100vh',
                    // width : 200,
                    overflowY: 'scroll',
                    scrollSnapType: 'y mandatory',
                    '& > div': {
                        scrollSnapAlign: 'start',
                    },
                }}
            >
                <Block1 />
                <Block1 />
                <Block1 />
                <Block1 />
            </Box>
        </>
    )
    //   </CssVarsProvider>
}
