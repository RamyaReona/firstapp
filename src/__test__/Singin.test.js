import {render, screen} from '@testing-library/react'
import Signin from '../Components/basics/Logintest/Signin'
import App from '../App';

test('checking component loaded', ()=>{
    render(<Signin />);
    expect(screen.queryByText(/Login/)).toBeInTheDocument();
})

test('checking inputfield validation', ()=> {
    render(<Signin />);
    expect(screen.queryByPlaceholderText('email')).toHaveValue("");
    expect(screen.queryByPlaceholderText('pwd')).toHaveValue("");
})