import { useCallback, useEffect, useRef, useState } from 'react'
import { Box, Button, Stack } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const Carrousel = ({ images }) => {
  // Se utiliza useRef para mantener una referencia al temporizador del carrousel
  const timerRef = useRef(null)
  // Se utiliza useState para almacenar el índice actual del carrousel
  const [currentIndex, setCurrentIndex] = useState(0)

  // Función para ir a la diapositiva anterior
  const goToPrevious = () => {
    // Comprueba si la diapositiva actual es la primera
    const isFirstSlide = currentIndex === 0
    // Calcula el nuevo índice basado en si es la primera diapositiva o no
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1

    // Establece el nuevo índice actual
    setCurrentIndex(newIndex)
  }

  // Función para ir a la siguiente diapositiva
  // Utilizamos useCallback para memorizar la función goToNext y evitar que se cree una nueva cada vez que se renderiza el componente
  const goToNext = useCallback(() => {
    // Comprueba si la diapositiva actual es la última
    const isLastSlide = currentIndex === images.length - 1
    // Calcula el nuevo índice basado en si es la última diapositiva o no
    const newIndex = isLastSlide ? 0 : currentIndex + 1

    // Establece el nuevo índice actual
    setCurrentIndex(newIndex)
  }, [currentIndex, images])

  // Se utiliza useEffect para iniciar el temporizador cuando se monta el componente
  useEffect(() => {
    // Limpia el temporizador existente si hay alguno
    if (timerRef.current) clearTimeout(timerRef.current)

    // Configura un nuevo temporizador para avanzar a la siguiente diapositiva después de 3 segundos
    timerRef.current = setTimeout(() => {
      goToNext()
    }, 3000)

    // Se ejecuta al desmontar el componente o al cambiar la dependencia goToNext
    return () => clearTimeout(timerRef.current)
  }, [goToNext])

  return (
    <Box
      borderRadius={'8px'}
      height={'100%'}
      sx={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${images[currentIndex].src})`,
        position: 'relative',
      }}
      width={'100%'}
    >
      <Box>
        {/* Botón para ir a la diapositiva anterior */}
        <Button
          color="tertiary"
          sx={{
            position: 'absolute',
            top: '50%',
            transform: 'translate(0, -50%)',
            left: '0px',
            zIndex: 1,
            borderRadius: '9999px',
          }}
          variant="text"
          onClick={goToPrevious}
        >
          <ArrowBackIcon fontSize="large" />
        </Button>
        {/* Botón para ir a la siguiente diapositiva */}
        <Button
          color="tertiary"
          sx={{
            position: 'absolute',
            top: '50%',
            transform: 'translate(0, -50%)',
            right: '0px',
            borderRadius: '9999px',
            zIndex: 1,
          }}
          variant="text"
          onClick={goToNext}
        >
          <ArrowForwardIcon fontSize="large" />
        </Button>
      </Box>
      <Stack
        borderRadius={'8px'}
        height={'100%'}
        sx={{
          transition: 'all 0.5s ease-in-out',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${images[currentIndex].src})`,
        }}
        width={'100%'}
      >
        {/* Se itera sobre las imágenes y se muestra una caja vacía para cada una */}
        {images.map((_image, index) => (
          <Box key={index} />
        ))}
      </Stack>
    </Box>
  )
}

export default Carrousel
