import {render, screen} from "@testing-library/react";
import React from "react";
import App from '../../../src/App';

describe('all elements are rendered correctly', () => {
    beforeEach(() => {
        render(<App />);
    })
    it('renders header', () => {
        expect(screen.getByText('Карточка бармена')).toBeInTheDocument();
        expect(screen.getByText('Вход')).toBeInTheDocument();
    })
    it('renders greeting when not authorized', () => {
        expect(screen.getByText('Войдите или зарегистрируйтесь')).toBeInTheDocument();
    })
    it('does not render link to barmen when not authorized', () => {
        expect(screen.queryByText('МОЙ РЕЙТИНГ')).toBe(null);
    })
})