import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import {useFetchGifs} from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('Testing GifGrid ', () => { 

    const category = "One Punch"

    test('must show the loading', () => { 
        useFetchGifs.mockReturnValue({images:[],isLoading:true})
        render(<GifGrid category={category}/>)
        expect(screen.getByText("Cargando..."))
        expect(screen.getByText(category))
        
     })
    
     test("show items as long as useFetchGifs is called", () =>{
        const gifs = [{
            id: "abc",
            title:"Saitama",
            url:"https://google.com"
        },{
            id: "xyz",
            title:"Goku",
            url:"https://clarin.com"
        }]
        useFetchGifs.mockReturnValue({images:gifs,isLoading:false})
        render(<GifGrid category={category}/>)
        expect(screen.getAllByRole("img").length).toBe(2)
     })
 })