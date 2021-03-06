import { createGlobalStyle } from 'styled-components';
import { lighten, darken } from 'polished';
import 'react-toastify/dist/ReactToastify.css';
import background from '../assets/images/background.svg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    /* background: #191920 url(${background}) no-repeat center top; */
    /* background: ${lighten(0.1, 'green')} */
    background:  #4682B4;
    background: ${darken(0.211, '#0088cc')}
    --webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    max-width: 1380px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;
