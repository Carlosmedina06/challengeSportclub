import { Box, Button, Stack, Typography } from '@mui/material'

import Carrousel from '../components/Carrousel'
import Layout from '../Layout/Layout'

const images = [
  {
    src: 'https://assets-global.website-files.com/6006f5bf87d96d2131258ef0/63bc1c50b4f246288c9addde_Artboard%201.png',
    alt: 'sportclub 1',
  },
  {
    src: 'https://assets-global.website-files.com/6006f5bf87d96d2131258ef0/63bc1c51a1bb392c6f8fac65_Artboard%202.png',
    alt: 'sportclub 2',
  },
  {
    src: 'https://assets-global.website-files.com/6006f5bf87d96d2131258ef0/63bc1c51abbf1f17ea68aa73_Artboard%204.png',
    alt: 'sportclub 3',
  },
  {
    src: 'https://assets-global.website-files.com/6006f5bf87d96d2131258ef0/63bc1c51792ad2a23897c18a_Artboard%203.png',
    alt: 'sportclub 4',
  },
  {
    src: 'https://assets-global.website-files.com/6006f5bf87d96d2131258ef0/63bc1c58f541cbf863be5112_Artboard%205.png',
    alt: 'sportclub 5',
  },
  {
    src: 'https://assets-global.website-files.com/6006f5bf87d96d2131258ef0/63bc1c58ccf5c38f4e4f689c_Artboard%206.png',
    alt: 'sportclub 6',
  },
]

const Home = () => {
  return (
    <Layout>
      <Stack
        alignItems={'center'}
        component={'section'}
        direction={{
          xs: 'column',
          md: 'row',
        }}
        height={{
          xs: '100vh',
          md: '80vh',
        }}
        px={{
          xs: 0,
          md: 12,
        }}
        spacing={6}
      >
        <Box
          component={'article'}
          height={{
            xs: '50%',
            md: '100%',
          }}
          width={{
            xs: '100%',
            md: '70%',
          }}
        >
          <Carrousel images={images} />
        </Box>
        <Stack
          alignItems={'start'}
          component={'article'}
          direction={'column'}
          justifyContent={'center'}
          spacing={4}
        >
          <Stack alignItems="start">
            <Typography color={'secondary.main'} component={'h1'} fontWeight="bold" variant="h2">
              TU MEMBRESÍA
            </Typography>
            <Typography color={'tertiary.main'} component={'span'} fontWeight="bold" variant="h2">
              A OTRO NIVEL
            </Typography>
            <Typography color={'secondary.main'} fontWeight="medium" maxWidth={'50ch'}>
              Todo lo que necesitas para acceder a un mundo de deporte, salud y bienestar con +300
              centros deportivos en todo el país.
            </Typography>
          </Stack>
          <Button
            color={'tertiary'}
            sx={{
              borderRadius: '9999px',
              boxShadow: 'none',
              textTransform: 'capitalize',
              padding: '1rem 3rem',
            }}
            variant={'contained'}
          >
            <Typography component={'p'} fontWeight={'bold'} variant="h5">
              Asociate
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </Layout>
  )
}

export default Home
