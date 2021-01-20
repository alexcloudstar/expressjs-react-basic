import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
  margin: 0;
  padding: 0;

}

body {
  overflow: hidden;
  padding: 30px 70px;
  background-image: linear-gradient(to right top, #ac2434, #b6273f, #bf2b4b, #c83057, #d13564);
}

#root {
  padding: 1.5rem;
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
  margin: 0 0.5rem;
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

.input-holder {

  margin: 5px 0;

  input,
  textarea {
    border: 0;
    width: 100%;
    border-bottom: 3px solid #5184b3;
  }
}


`;

export default GlobalStyle;
