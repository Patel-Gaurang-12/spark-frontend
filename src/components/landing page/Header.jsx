import { useEffect, useState } from 'react';
import { useColorScheme } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import Avatar from '@mui/joy/Avatar';
import Button from '@mui/joy/Button';
import Tooltip from '@mui/joy/Tooltip';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import ListDivider from '@mui/joy/ListDivider';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
// import BookRoundedIcon from '@mui/icons-material/BookRounded';
// import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
// import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
// import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
// import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Link } from 'react-router-dom';

function ColorSchemeToggle() {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return <IconButton size="sm" variant="outlined" color="primary" />;
    }
    return (
        <Tooltip title="Change theme" variant="outlined">
            <IconButton
                id="toggle-mode"
                size="md"
                variant="plain"
                color="neutral"
                sx={{ alignSelf: 'center', borderRadius: "100%" }}
                onClick={() => {
                    if (mode === 'light') {
                        setMode('dark');
                    } else {
                        setMode('light');
                    }
                }}
            >
                {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
            </IconButton>
        </Tooltip>
    );
}

export default function Header() {
    const { mode } = useColorScheme();
    return (
        <Box
            sx={{
                overflow: "hidden",
                backgroundImage: "none",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                flexShrink: 0,
                position: "absolute",
                zIndex: 1100,
                top: "0px",
                left: "auto",
                right: "0px",
                padding: "15px 30px",
                boxShadow: "none",
                backdropFilter: "blur(8px)",
                borderStyle: "solid",
                borderColor: mode == "light" ? "#E5EAF2" : "rgba(194, 224, 255, 0.08)",
                borderWidth: "0px 0px thin",
                backgroundColor: mode == "light" ? "rgba(255, 255, 255, 0.5)" : "rgba(16, 20, 24, 0.8)",
                color: "rgb(157, 168, 183)",
            }}
        >
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
                sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
                {/* <IconButton
                    size="md"
                    variant="outlined"
                    color="neutral"
                    sx={{
                        display: { xs: 'none', sm: 'inline-flex' },
                        borderRadius: '50%',
                    }}
                >
                    <LanguageRoundedIcon />
                </IconButton> */}
                <Button
                    variant="plain"
                    color="neutral"
                    aria-pressed="true"
                    component="a"
                    href="/joy-ui/getting-started/templates/email/"
                    size="sm"
                    sx={{ alignSelf: 'center' }}
                >
                    Email
                </Button>
                <Button
                    variant="plain"
                    color="neutral"
                    component="a"
                    href="/joy-ui/getting-started/templates/team/"
                    size="sm"
                    sx={{ alignSelf: 'center' }}
                >
                    Team
                </Button>
                <Link to="/deshboard">
                    <Button
                        variant="plain"
                        color="neutral"
                        size="sm"
                        sx={{ alignSelf: 'center' }}
                    >
                        Deshboard
                    </Button>
                </Link>
            </Stack>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2.5,
                    alignItems: 'center',
                }}
            >
                <IconButton
                    size="lg"
                    variant="outlined"
                    color="neutral"
                    sx={{ display: { xs: 'inline-flex', sm: 'none' }, alignSelf: 'center' }}
                >
                    <SearchRoundedIcon />
                </IconButton>
                {/* <Tooltip title="Joy UI overview" variant="outlined">
                    <IconButton
                        size="sm"
                        variant="plain"
                        color="neutral"
                        component="a"
                        href="/blog/first-look-at-joy/"
                        sx={{ alignSelf: 'center' }}
                    >
                        <BookRoundedIcon />
                    </IconButton>
                </Tooltip> */}

                <Dropdown>
                    <MenuButton
                        variant="plain"
                        size="sm"
                        sx={{ maxWidth: '32px', maxHeight: '32px', borderRadius: '100%' }}
                    >
                        <Avatar
                            sx={{ maxWidth: '35px', maxHeight: '35px' }}
                        />
                    </MenuButton>
                    <Menu
                        placement="bottom-end"
                        size="sm"
                        sx={{
                            zIndex: '99999',
                            p: 1,
                            gap: 1,
                            '--ListItem-radius': 'var(--joy-radius-sm)',
                        }}
                    >
                        <MenuItem>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar
                                    sx={{ borderRadius: '50%' }}
                                />
                                <Box sx={{ ml: 1.5 }}>
                                    <Typography level="title-sm" textColor="text.primary">
                                        Rick Sanchez
                                    </Typography>
                                    <Typography level="body-xs" textColor="text.tertiary">
                                        rick@email.com
                                    </Typography>
                                </Box>
                            </Box>
                        </MenuItem>
                        {/* <ListDivider />
                        <MenuItem>
                            <HelpRoundedIcon />
                            Help
                        </MenuItem>
                        <MenuItem>
                            <SettingsRoundedIcon />
                            Settings
                        </MenuItem>
                        <ListDivider />
                        <MenuItem component="a" href="/blog/first-look-at-joy/">
                            First look at Joy UI
                            <OpenInNewRoundedIcon />
                        </MenuItem>
                        <MenuItem
                            component="a"
                            href="https://github.com/mui/material-ui/tree/master/docs/data/joy/getting-started/templates/email"
                        >
                            Sourcecode
                            <OpenInNewRoundedIcon />
                        </MenuItem> */}
                        <ListDivider />
                        <MenuItem>
                            <LogoutRoundedIcon />
                            Log out
                        </MenuItem>
                    </Menu>
                </Dropdown>
                <ColorSchemeToggle />
            </Box>
        </Box >
    );
}
