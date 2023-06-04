import { Container } from '@mui/material'

import Navbar from '../components/Navbar/Navbar'

const Layout = ({ children }) => {
  return (
    <Container
      component={'main'}
      sx={{
        backgroundColor: 'primary.main',
        py: 16,
        minHeight: '100vh',
        minWidth: '100%',
      }}
    >
      <Navbar />
      {children}
    </Container>
  )
}

export default Layout
