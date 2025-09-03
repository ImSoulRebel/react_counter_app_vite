/**
 * @jest-environment jsdom
 */
import {  render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


/* eslint-disable no-undef */
describe('Test on <FirstApp.test/>', () => { 


    test('Match with snapshot', () => { 
        const title = 'I am  Goku';
        const {container} = render(<FirstApp title={ title }/>);
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar el titulo en un h1', () => { 
        const title = 'I am  Goku';
        const {container, getByTestId} = render(<FirstApp title={ title }/>);
        // expect( getByText(title) ).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);
        expect(getByTestId('test-title').innerHTML).toContain(title);
     });

     test('debe mostrar screen el titulo en un h1', () => { 
        const title = 'I am  Goku';
         render(<FirstApp title={ title }/>);     
        expect(screen.getByRole('heading', {level: 1}) .innerHTML).toContain(title);
     });
 });