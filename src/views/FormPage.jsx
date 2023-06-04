import React from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import Layout from '../Layout/Layout'
import useForm from '../hook/useForm'

export default function FormPage() {
  const { formData, error, onSubmit, handleChange, setFormData } = useForm()

  return (
    <Layout>
      <Grid
        container
        justifyContent={'center'}
        sx={{
          p: 4,
          my: 2,
          mx: 'auto',
          bgcolor: 'secondary.main',
          borderRadius: 1,
          height: '100%',
          width: '100%',
        }}
      >
        <Grid item alignItems={'center'} xs={12}>
          <Box
            component="img"
            src="https://assets-global.website-files.com/6006f5bf87d96d2131258ef0/63ad982efc88fa59728c9cf9_Aerolineas%20Plus%20-%20SportClub-02-p-3200.png"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: 2,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Box autoComplete="off" component="form" onSubmit={onSubmit}>
            <TextField
              fullWidth
              error={error.error && !!error.formErrors.firstName}
              helperText={error.formErrors.firstName}
              label="Nombre"
              margin="normal"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              error={error.error && !!error.formErrors.lastName}
              helperText={error.formErrors.lastName}
              label="Apellido"
              margin="normal"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              required
              error={error.error && !!error.formErrors.dni}
              helperText={error.formErrors.dni}
              label="DNI"
              margin="normal"
              name="dni"
              value={formData.dni}
              onChange={handleChange}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                disableFuture
                openTo="year"
                slotProps={{
                  textField: {
                    fullWidth: true,
                    required: true,
                    label: 'Fecha de nacimiento',
                    margin: 'normal',
                    name: 'birthDate',
                    value: formData.birthDate,
                    onChange: handleChange,
                    error: error.error && !!error.formErrors.birthDate,
                    helperText: error.formErrors.birthDate,
                  },
                }}
                value={formData.birthDate}
                view="year"
                onChange={(newValue) => {
                  setFormData({
                    ...formData,
                    birthDate: newValue,
                  })
                }}
              />
              <TextField
                fullWidth
                required
                error={error.error && !!error.formErrors.email}
                helperText={error.formErrors.email}
                label="Email"
                margin="normal"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                required
                error={error.error && !!error.formErrors.phoneNumber}
                helperText={error.formErrors.phoneNumber}
                label="Número de teléfono"
                margin="normal"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <Button
                color="tertiary"
                sx={{
                  width: '100%',
                  borderRadius: '9999px',
                  boxShadow: 'none',
                  textTransform: 'capitalize',
                  padding: '1rem 3rem',
                  marginTop: '1rem',
                }}
                type="submit"
                variant="contained"
              >
                <Typography component="p" fontWeight="bold" textTransform="capitalize" variant="h5">
                  Enviar
                </Typography>
              </Button>
            </LocalizationProvider>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}
