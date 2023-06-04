import { useState } from 'react'
import dayjs from 'dayjs'

const useForm = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dni: '',
    birthDate: null,
    email: '',
    phoneNumber: '',
  })

  // Estado para almacenar los errores de validación del formulario
  const [error, setError] = useState({
    error: false,
    formErrors: {
      firstName: '',
      lastName: '',
      dni: '',
      birthDate: '',
      email: '',
      phoneNumber: '',
    },
  })

  // Función para validar el formato del correo electrónico
  const emailValidation = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

    return regex.test(email)
  }

  // Función para validar el formato del DNI
  const dniValidation = (dni) => {
    const regex = /^\d{8}$/i

    return regex.test(dni)
  }

  // Función para validar el formato del número de teléfono
  const phoneValidation = (phoneNumber) => {
    const regex = /^[0-9]{10}$/i

    return regex.test(phoneNumber)
  }

  // Función para validar el formulario antes de enviarlo
  const validateForm = () => {
    let formErrors = {}

    // Validar el campo de cumpleaños
    if (!formData.birthDate) {
      formErrors = {
        ...formErrors,
        birthDate: 'Ingrese una fecha de nacimiento válida.',
      }
    }

    // Validar el campo de correo electrónico
    if (!emailValidation(formData.email) || formData.email === '') {
      formErrors = {
        ...formErrors,
        email: 'Ingrese un correo electrónico válido.',
      }
    }

    // Validar el campo de DNI
    if (!dniValidation(formData.dni) || formData.dni === '') {
      formErrors = {
        ...formErrors,
        dni: 'Ingrese un DNI válido (8 dígitos numéricos).',
      }
    }

    // Validar el campo de número de teléfono
    if (!phoneValidation(formData.phoneNumber) || formData.phoneNumber === '') {
      formErrors = {
        ...formErrors,
        phoneNumber: 'Ingrese un número de teléfono válido (10 dígitos numéricos).',
      }
    }

    // Validar el campo de nombre
    if (formData.firstName.trim() === '') {
      formErrors = {
        ...formErrors,
        firstName: 'Ingrese su nombre.',
      }
    }

    // Validar el campo de apellido
    if (formData.lastName.trim() === '') {
      formErrors = {
        ...formErrors,
        lastName: 'Ingrese su apellido.',
      }
    }

    return formErrors
  }

  // Función para manejar el envío del formulario
  const onSubmit = (e) => {
    e.preventDefault()

    const formErrors = validateForm()

    if (Object.keys(formErrors).length > 0) {
      // Si hay errores de validación, establecer el estado de error y mostrar los errores
      setError({
        error: true,
        formErrors,
      })

      return
    }

    // Formatear la fecha de nacimiento
    const formattedDate = dayjs(formData.birthDate).format('YYYY-MM-DD')

    // Actualizar el estado de los datos del formulario con la fecha de nacimiento formateada
    setFormData({
      ...formData,
      birthDate: formattedDate,
    })

    // Enviar el formulario
    //eslint-disable-next-line
    console.log('Formulario enviado:', {
      ...formData,
      birthDate: formattedDate,
    })

    // Restablecer el estado de error y los errores del formulario
    setError({
      error: false,
      formErrors: {
        firstName: '',
        lastName: '',
        dni: '',
        birthDate: '',
        email: '',
        phoneNumber: '',
      },
    })

    // Restablecer el estado de los datos del formulario
    setFormData({
      firstName: '',
      lastName: '',
      dni: '',
      birthDate: null,
      email: '',
      phoneNumber: '',
    })
  }

  // Función para manejar los cambios en los campos del formulario
  const handleChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return {
    formData,
    error,
    onSubmit,
    handleChange,
    setFormData,
  }
}

export default useForm
