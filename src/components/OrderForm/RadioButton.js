import React from 'react'
import { useField } from 'formik'

export default function RadioButton({ id, label, name, value, ...props }) {
  const [field, meta] = useField(name)
  return (
    <div>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={value === field.value}
        onBlur={field.onBlur}
        onChange={field.onChange}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}