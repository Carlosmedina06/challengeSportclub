import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import StickyNote2Icon from '@mui/icons-material/StickyNote2'
import { Link, useRoute } from 'wouter'

import NavbarDrawer from './NavbarDrawer'

const navLinks = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    title: 'Form',
    path: '/form',
    icon: <StickyNote2Icon />,
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false) // Declaración de un estado "open" y su función de actualización "setOpen" con un valor inicial de false.

  const [isActiveHome] = useRoute('/') // Declaración de una variable "isActiveHome" utilizando el hook useRoute para determinar si la ruta actual coincide con '/'.

  const [isActiveForm] = useRoute('/form') // Declaración de una variable "isActiveForm" utilizando el hook useRoute para determinar si la ruta actual coincide con '/form'.

  const isActive = (path) => {
    // Declaración de una función isActive que toma una ruta como argumento.
    if (path === '/' && isActiveHome) {
      // Comprueba si la ruta es '/' y si isActiveHome es verdadero (la ruta actual coincide con '/').
      return true // Devuelve true si la ruta es activa.
    } else if (path === '/form' && isActiveForm) {
      // Comprueba si la ruta es '/form' y si isActiveForm es verdadero (la ruta actual coincide con '/form').
      return true // Devuelve true si la ruta es activa.
    }

    return false // Devuelve false si la ruta no es activa.
  }

  return (
    <>
      <AppBar
        color={'secondary'}
        position="fixed"
        sx={{
          width: { xs: '100%' },
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <IconButton
            color="inherit"
            edge="start"
            size="large"
            sx={{ display: { xs: 'flex', sm: 'none' } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="img"
            p={2}
            src="https://www.traductores.org.ar/wp-content/uploads/2023/01/logo-SportClub-WEB-.jpg"
            sx={{ height: 100, width: 150, objectFit: 'contain' }}
          />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navLinks.map((item) => (
              <Button
                key={item.title}
                color={isActive(item.path) ? 'tertiary' : 'secondary'}
                component={Link}
                sx={{
                  borderRadius: '9999px',
                  boxShadow: 'none',
                  textTransform: 'capitalize',
                  padding: '1rem 3rem',
                  margin: '0 0.5rem',
                }}
                to={item.path}
                variant={'contained'}
              >
                <Typography
                  component={'p'}
                  fontWeight={isActive(item.path) ? 'bold' : 'light'}
                  textTransform={'capitalize'}
                  variant="h5"
                >
                  {item.title}
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={open}
        sx={{ display: { xs: 'flex', sm: 'none' } }}
        onClose={() => setOpen(false)}
      >
        <NavbarDrawer component={Link} navLinks={navLinks} setOpen={setOpen} />
      </Drawer>
    </>
  )
}
