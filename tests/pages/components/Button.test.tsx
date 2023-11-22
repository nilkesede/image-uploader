import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Button from '../../../src/components/Button'
import { defaultTheme } from '../../../src/styles/theme'

describe('Index', () => {
  it('renders a text', () => {
    const onClickButton = jest.fn()
    render(
      <ThemeProvider theme={defaultTheme}>
        <Button label="Choose a file" onClick={onClickButton} />
      </ThemeProvider>
    )
    const label = screen.getByTestId('button')

    expect(label).toBeInTheDocument()
    expect(label).toHaveTextContent('Choose a file')
  })
})
