import * as yup from 'yup'

export const registerProductsDTO = yup.object().shape({
  name: yup.string().required().min(1),
  price: yup.number().required().min(0),
})

export interface IRegisterProductsParams extends yup.InferType<typeof registerProductsDTO>{  
}
