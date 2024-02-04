import * as yup from 'yup'

export const ProductsDTO = yup.object().shape({
  name: yup.string().required().min(1),
  price: yup.number().required().min(0),
})


export interface IProductsParams extends yup.InferType<typeof ProductsDTO>{  
}
