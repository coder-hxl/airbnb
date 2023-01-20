import React, { memo } from 'react'
import { Input } from 'antd'

import FormWrapper from './style'

import { IProps } from './types'

const Form = memo((props: IProps) => {
  const { formConfig, formData, onChange } = props

  function handleFormChange(
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) {
    const inputValue = e.target.value
    const newFormData = { ...formData, [name]: inputValue }

    onChange(newFormData)
  }

  return (
    <FormWrapper>
      {formConfig.map((item) => {
        const { type } = item

        return type === 'text' ? (
          <Input
            className="item input-focused"
            key={item.name}
            placeholder={item.placeholder}
            value={formData[item.name]}
            onChange={(e) => handleFormChange(e, item.name)}
          />
        ) : type === 'password' ? (
          <Input.Password
            className="item"
            key={item.name}
            placeholder={item.placeholder}
            value={formData[item.name]}
            onChange={(e) => handleFormChange(e, item.name)}
          />
        ) : (
          ''
        )
      })}
    </FormWrapper>
  )
})

export default Form
