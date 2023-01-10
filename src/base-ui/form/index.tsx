import React, { memo, useState } from 'react'
import { Input } from 'antd'

import FormWrapper from './style'

import { IProps } from './types'
import { IAnyObject } from '@/types/common'

const Form = memo((props: IProps) => {
  const { formConfig, onChange } = props
  const initFormData: IAnyObject = {}
  formConfig.forEach((item) => {
    initFormData[item.name] = ''
  })
  const [formData, setFormData] = useState(initFormData)

  function handleFormChange(
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) {
    const inputValue = e.target.value
    const newFormValue = { ...formData, [name]: inputValue }

    setFormData(newFormValue)
    onChange(newFormValue)
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
            onChange={(e) => handleFormChange(e, item.name)}
          />
        ) : type === 'password' ? (
          <Input.Password
            className="item"
            key={item.name}
            placeholder={item.placeholder}
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
