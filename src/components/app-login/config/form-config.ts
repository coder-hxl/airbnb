import { IFormConfig } from '@/base-ui/form/types'

export default function getFormConfig(type: 'signUp' | 'signIn') {
  const formConfig: IFormConfig = [
    { name: 'name', type: 'text', placeholder: '账号' },
    { name: 'password', type: 'password', placeholder: '密码' }
  ]

  if (type === 'signIn') {
    formConfig.splice(1, 0, {
      name: 'cellphone',
      type: 'text',
      placeholder: '手机'
    })
  }

  return formConfig
}
