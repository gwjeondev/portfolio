import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
${reset}
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap');

* {
    box-sizing: border-box;
}

a {
    color: rgba(178, 190, 195,1.0);
    text-decoration: none;
}
body {
    font-family: 'Noto Sans KR', sans-serif;
}
`;

export default globalStyles;