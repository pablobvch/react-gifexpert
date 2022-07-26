import { render, screen } from '@testing-library/react';
import { GifGridItem } from '../../src/components/GifGridItem';

describe('GifGridItem tests', () => { 
        const title = "Title test"
        const url = "http://www.google.com/"
        
    test('match with snapshot', () => {
        
        const { container } = render(<GifGridItem title={ title } url = {url} />);
        expect( container ).toMatchSnapshot();
    });

    test('must show the image with the url', () => {
        render(<GifGridItem title={ title } url = {url} />);
        //expect(screen.getByRole("img").src).toBe(url)
        const {src,alt} = screen.getByRole("img")
        expect(src).toBe(url)
        expect(alt).toBe(title)
    });
    test('must show the title in the component', () => {
        render(<GifGridItem title={ title } url = {url} />);
        expect(screen.getByText(title)).toBeTruthy()
    });
 })