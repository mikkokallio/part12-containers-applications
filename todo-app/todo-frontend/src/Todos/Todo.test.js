import React from 'react'
import Todo from './Todo'
import { render, screen} from '@testing-library/react'

describe('Todo', () => {
    const todo = {text: 'do this'}
    test('renders Todo component', async () => {
        render(<Todo todo={todo} />)

        expect(screen.getByText('do this')).toBeInTheDocument()
    })
})