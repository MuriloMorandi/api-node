
import * as yup from 'yup';

// export interface ISignUpParams{
//     name: string;
//     email: string;
//     password: string;
//     cpf: string;
// }

export const signUpDTO = yup.object().shape({
  name: yup.string().required().min(1),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  cpf: yup.string().min(11),
})

export interface ISignUpParams extends yup.InferType<typeof signUpDTO>{
}


