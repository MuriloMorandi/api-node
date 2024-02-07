
import * as yup from 'yup';

export const signInDTO = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
})

export interface ISignInParams extends yup.InferType<typeof signInDTO>{
}


