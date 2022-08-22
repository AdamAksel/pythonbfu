import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0; 
    font-family: 'Lato', sans-serif; 

}

div{
  border: 1px solid black;
}

body {
        background-color: white;
        color: #141c3a;
    }


    button {
        background-color: white;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
}

button:hover {
  background: transparent;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
}

button:active {
  outline: none;
  border: none;
}

button:focus {
  outline: 0;
}

`
