import { ThemeProvider } from "styled-components";

const Colors = {
  blue: '#0060AD',
  greyBlue: '#364654',
  brightGreen: '#7FFF00',
  darkGreen: '#041A05',
  blueGreen: '#258073'
}

const defaultTheme = {
  colors: {
    primary: 'white',
    secondary: Colors.blue,
    header: Colors.greyBlue,
    text: 'black',
    hover: 'black'
  },
  headerFont: `'Muro', Geneva, Verdana, sans-serif`,
  contentFont: `Verdana, sans-serif`,
  fontSizes: {
    header: '20px',
    title: '36px',
    default: '14px'
  }
};

const darkTheme = {
  colors: {
    primary: Colors.darkGreen,
    secondary: Colors.blueGreen,
    header: Colors.brightGreen,
    text: Colors.brightGreen,
    hover: Colors.blueGreen
  },
  headerFont: `'Courier New', Tahoma, Geneva, Verdana, sans-serif`,
  contentFont: `'Courier New', Tahoma, Geneva, Verdana, sans-serif`,
  fontSizes: {
    header: '20px',
    title: '24px',
    default: '14px'
  }
};

function Theme({ children, themeType }: any) {
  const getTheme = () => {
    switch (themeType) {
      case 'DEFAULT':
        return defaultTheme;
      case 'DARK':
        return darkTheme;
      default:
        return defaultTheme;
    }
  }

  return <ThemeProvider theme={getTheme()} >{children}</ThemeProvider>
};

export default Theme;