import React from 'react'

export default function RadioButtonGroup({ id, label, children }) {
  return (
    <fieldset id={id}>
      <legend>{label}</legend>
      {children}
    </fieldset>
  )
}