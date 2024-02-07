import * as yup from 'yup'
import { validateCPF } from '../../../helpers/CPF'

export const signUpDTO = yup.object().shape({
  name: yup.string().required().min(1),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  cpf: yup
    .string()
    .min(11)
    .test('valid-cpf', 'Invalid CPF', (cpf) => {
      return validateCPF(cpf || '')
    })
})

export interface ISignUpParams extends yup.InferType<typeof signUpDTO> {}
