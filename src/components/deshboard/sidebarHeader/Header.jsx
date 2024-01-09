import GlobalStyles from '@mui/joy/GlobalStyles';
import IconButton from '@mui/joy/IconButton';
import Sheet from '@mui/joy/Sheet';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { toggleSidebar } from './util';

export const Header = () => {
    return (
        <Sheet
            sx={{
                // display: { xs: 'flex', md: 'none' },
                display : "flex",  
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'sticky',
                top: 0,
                width: '100%',
                height: '60px',
                zIndex: 9998,
                p: 2,
                gap: 1,
                borderBottom: '1px solid',
                borderColor: 'background.level1',
                boxShadow: 'sm',
                ml: "var(--Sidebar-width)"
            }}
        >
            <GlobalStyles
                styles={(theme) => ({
                    ':root': {
                        '--Header-height': '52px',
                        [theme.breakpoints.up('md')]: {
                            '--Header-height': '0px',
                        },
                    },
                })}
            />
            <IconButton
                onClick={() => toggleSidebar()}
                variant="outlined"
                color="neutral"
                size="sm"
            >
                <MenuRoundedIcon />
            </IconButton>
        </Sheet>
    );
}