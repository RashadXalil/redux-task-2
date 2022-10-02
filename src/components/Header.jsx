import * as React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import {
  Box,
  Divider,
  IconButton,
  List,
  AppBar,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
  Typography,
} from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const drawerWidth = 240

function Header(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Drivers/redux
      </Typography>
      <Divider />
      <List>
        <Link to="/">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={'Drivers'} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/favorites">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={'Favorites'} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  const favorites = useSelector((state) => state.favoriteReducer)

  return (
    <Box sx={{ display: 'flex', marginBottom: '80px' }}>
      <AppBar
        sx={{
          justifyContent: 'center',
          background: '#b11226',
        }}
        component="nav"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              cursor: 'pointer',
            }}
          >
            Rashad Xalilov App
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link to="/">
              <Button className="link" sx={{ color: '#fff' }}>
                Drivers
              </Button>
            </Link>
            <Link to="favorites">
              <Button className="link" sx={{ color: '#fff' }}>
                Favorites <sup className="sup"> {favorites.length}</sup>
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

export default Header
