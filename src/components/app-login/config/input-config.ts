export default function getInputConfig(type: 'signUp' | 'signIn') {
  const inputConfig = [
    { name: 'name', type: 'text', placeholder: '账号' },
    { name: 'password', type: 'password', placeholder: '密码' }
  ]

  if (type === 'signIn') {
    inputConfig.splice(1, 0, {
      name: 'cellphone',
      type: 'text',
      placeholder: '手机'
    })
  }

  return inputConfig
}
