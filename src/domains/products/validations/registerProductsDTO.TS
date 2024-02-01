import * as yup from 'yup'

export interface IRegisterProductsDTO {
    name: string
    price: number
    
}

export const registerProductsDTO = yup.object().shape({
  name: yup.string().required().min(1),
  price: yup.number().required().min(0),
})
