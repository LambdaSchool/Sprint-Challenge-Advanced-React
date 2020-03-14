import React from 'react';
import { render } from "@testing-library/react";
import Player from './Player';

test("renders correctly", () => {
    const { getByTestId } = render(<Player name="Nikki Lin" country="China" />);

    const playerDisplay = getByTestId("player-display");
    expect(playerDisplay.textContent).toBe("Nikki Lin : China");
});