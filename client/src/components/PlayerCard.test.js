import React from 'react';
import ReactDOM from 'react-dom';
import PlayerCard from "./PlayerCard";
import { render, fireEvent, waitForElement, queryHelpers } from "@testing-library/react"

test("if PlayerCard renders props", async () => {
    const props = {
        name: 'prapti',
        country: 'USA'
    }
    const container = render(<PlayerCard {...props} />)
    const name = container.getByText('prapti')
    const country = container.getByText('USA')
    expect(name.innerHTML).toBe('prapti')
    expect(country.innerHTML).toBe('USA')
})