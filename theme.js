const blue = "#2877CC";
const black = "#161616";
const darkRed = "#C3002F";
const lightRed = "#DD0031";
const white = "#fff";
const grey = "#444";

const theme = {
  fonts: {
    'body': 'Roboto, sans-serif',
  },
  googleFont: 'https://fonts.googleapis.com/css?family=Roboto:400,400i,700',
  colors: {
    text: blue,
    primary: darkRed,
    link: lightRed,
    code: black,
    background: white
  },
  styles: {
    root: {
      textAlign: 'left',
      fontSize: ['1.5em', null, '3em'],
    },
    Slide: {
      display: 'block',
      padding: '2em',
      textAlign: 'left',
    },
    h1: {
      color: blue
    },
    h2: {
      color: lightRed
    },
    h3: {
      color: grey
    },
    p: {
      fontSize: '1.4rem',
      lineHeight: '2.4rem',
      letterSpacing: '.3px',
      fontWeight: '400',
      color: grey,
    }
  },
}

export default theme;