import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Button from '../../../src/components/Button'
import { defaultTheme } from '../../../src/styles/theme'

describe('Index', () => {
  it('renders and click a button', () => {
    const onClickButton = jest.fn()
    render(
      <ThemeProvider theme={defaultTheme}>
        <Button label="Choose a file" onClick={onClickButton} />
      </ThemeProvider>
    )
    const button = screen.getByTestId('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Choose a file')

    button.click()
    expect(onClickButton).toHaveBeenCalled()
  })
})
