import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Uploader from '../../src/pages/index'
import { defaultTheme } from '../../src/styles/theme'

describe('Index', () => {
  it('renders a text', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Uploader />
      </ThemeProvider>
    )
    const label = screen.getByTestId('input-label')

    expect(label).toBeInTheDocument()
    expect(label).toHaveTextContent('File should be Jpeg, Png..')
  })
})
