import { IAnyObject } from '@/types/common'

export interface IProps {
  formConfig: {
    name: string
    type: string
    placeholder: string
  }[]
  onChange(value: IAnyObject): any
}
