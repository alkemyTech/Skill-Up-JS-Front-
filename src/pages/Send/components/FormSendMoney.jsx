import { FormLabel, Input } from '@mui/material'
import { Box } from '@mui/system'
import { Form, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { sendMoney } from '../../../app/actions/index.js'
import { CustomButton } from '../../../Components/CustomButton'
import { alert } from '../../../services/alert/Alert.js'
import { User } from './User'

export const FormSendMoney = ({ user }) => {
  const me = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const balance = useSelector((state) => state.transactions.balance)
  const sendMoneySchema = yup.object().shape({
    id: yup.number('Id incorrecto').required('Seleccione un usuario'),
    amount: yup
      .number()
      .min(1, 'No puedes hacer una operacion menor a 1')
      .max(balance, 'No tienes suficientes fondos'),
    selectedId: yup
      .number()
      .required('No existe el id')
      .notOneOf([yup.ref('id')], 'No puedes enviarte a ti mismo')
  })
  return (
    <>
      <Formik
        initialValues={{
          id: me.user.id,
          selectedId: user.id,
          amount: 1
        }}
        enableReinitialize
        validationSchema={sendMoneySchema}
        onSubmit={(values, { resetForm }) => {
          try {
            dispatch(sendMoney(values))
            alert.confirmation(true, 'Operacion', 'La operacion se hizo correctamente')
            resetForm()
            console.log(values)
          } catch (e) {
            console.log(e.message)
            alert.error(true, 'Error', e.message)
          }
        }}
      >
        {({ touched, errors, handleBlur, handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                minWidth: '40vw'
              }}
            >
              <FormLabel>Enviar dinero a:</FormLabel>
              <User
                img={user.avatar}
                name={`${user.firstName} ${user.lastName}`}
                onChange={(e) => console.log(e)}
              />
              <Input
                error={!!((touched.amount && errors.amount) || errors.selectedId)}
                value={values.amount}
                onBlur={handleBlur}
                onChange={handleChange}
                label='Cantidad'
                helperText={touched.amount && errors.amount}
                variant='standard'
                type='number'
                name='amount'
                fullWidth
                margin='dense'
                sx={{ fontSize: '2rem', textAlign: 'center' }}
              />
              <CustomButton type='submit'>Enviar dinero</CustomButton>
            </Box>
            {(errors.amount || errors.selectedId) && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  padding: '10px 20px',
                  borderRadius: '20px',
                  color: 'error.main'
                }}
              >
                {errors.amount || errors.selectedId}
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </>
  )
}
