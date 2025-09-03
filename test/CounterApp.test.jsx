/**
 * @jest-environment jsdom
 */
import {  fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


/* eslint-disable no-undef */
describe('Test on <CounterApp/>', () => { 
    const initialValue = 100;

    test('Match with snapshot', () => { 
        const {container} = render(<CounterApp value={ initialValue }/>);
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar el valor inicial a 100', () => { 
        render(<CounterApp value={ initialValue }/>);
        expect(screen.getByText(initialValue)).toBeTruthy();
    });

    test('debe incrementar con el botón +1', () => { 
        render(<CounterApp value={ initialValue }/>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('101')).toBeTruthy();
    });

    test('debe decrementar con el botón -1', () => { 
        render(<CounterApp value={ initialValue }/>);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('99')).toBeTruthy();
    });

    test('debe funcionar  el botón reset', () => { 
        render(<CounterApp value={ initialValue }/>);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        // fireEvent.click(screen.getByText('reset'));
        fireEvent.click(screen.getByRole('button', {name: 'button-reset'}));
   
        expect(screen.getByText(initialValue)).toBeTruthy();
    });
 });