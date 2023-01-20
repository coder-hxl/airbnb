import { IAnyObject } from '@/types/common'

export type IFormConfig = {
  name: string
  type: 'text' | 'password'
  placeholder: string
}[]

export interface IProps {
  formConfig: IFormConfig
  formData: IAnyObject
  onChange(value: IAnyObject): any
}
