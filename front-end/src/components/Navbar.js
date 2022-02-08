import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';


const pages = ['Home', 'Service center', 'Assessment', 'FAQ'];
const settings = ['Sign in'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [selectedPage, setSelectedPage] = useState(pages[0])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className='navbar' position="static">
      <Container maxWidth="1680">
        <Toolbar disableGutters sx={{ px: 1 }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: '#777272', display: { xs: 'none', md: 'flex' }, fontWeight: 600, fontSize: 38 }
          }
          >
            MoodMent
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            MoodMent
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center'}}>
            {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu && setSelectedPage(page || 'Home')}
                  component={Link}
                  to={page.replaceAll(' ', '')}
                  sx={{
                     my: 2, mx: 3, color: '#000000', display: 'block', textTransform: 'capitalize', fontSize: 24,
                     ':hover': {
                      bgcolor: 'transparent',
                      color: 'black'
                    },
                 }}
                  >
                  <Typography
                    noWrap
                    component="div"
                    className={page === selectedPage ? 'text-underline color-black' : 'primary-text-color'}
                    sx={{ mr: 3, display: { xs: 'none', md: 'flex' }, fontSize: 24}}
                  >
                     {page}
                  </Typography>
                </Button>
            ))}
          </Box>
          <Typography
            noWrap
            component="div"
            className='primary-text-color'
            sx={{ mr: 3, display: { xs: 'none', md: 'flex' }, fontSize: 24}}
          >
            Your mental health
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;