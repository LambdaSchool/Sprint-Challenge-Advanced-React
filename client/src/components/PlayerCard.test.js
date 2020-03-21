import React from 'react';
import ReactDOM from 'react-dom';
import PlayerCard from "./PlayerCard";
import { render, fireEvent, waitForElement, queryHelpers } from "@testing-library/react"

test("if PlayerCard renders props", async () => {
    const props = {
        name: 'thomas',
        country: 'USA'
    }
    const container = render(<PlayerCard {...props} />)
    const name = container.getByText('thomas')
    const country = container.getByText('USA')
    expect(name.innerHTML).toBe('thomas')
    expect(country.innerHTML).toBe('USA')
})

