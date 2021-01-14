import { createGlobalStyle } from 'styled-components';
import mern_bg from 'assets/mern_bg.jpg';

const GlobalStyle = createGlobalStyle`
html,
body {
  margin: 0;
  padding: 0;

}

body {
  overflow: hidden;
  padding: 60px 70px;
  background-image: linear-gradient(to right top, #ac2434, #b6273f, #bf2b4b, #c83057, #d13564);
}

#root {
  padding: 2rem;
  background: #fff;
  box-shadow: 3px 3px 14px 2px rgba(0,0,0,0.75);
}

a {
    text-decoration: none;
}

li {
  list-style-type: none;
}

button {
  outline: none;
  color: #fff;
  margin: 0 2rem;
  font-size: 20px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background: #2565ab;
  border: 1px solid #2565ab;
  box-shadow: 5px 4px 4px 0px rgba(0,0,0,0.75);

  &.active {
    span {
      color: #ff461c;
      font-weight: 700;
    }
  }
}

h1,h2,h3,h4,h5,h6 {
    font-weight: 500;
    font-family: 'Roboto', sans-serif, Arial, Helvetica;
}

a,
p,
button,
li,
ul
 {
    font-family: 'Lobster', cursive,sans-serif, Arial, Helvetica;
    font-weight: 400;
}


`;

export default GlobalStyle;
