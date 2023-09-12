import React from "react";
import { ThemeProvider } from "styled-components";

const defaultTheme = {
    colors: {
        primary: 'white',
        secondary: '#0060AD',
        header: '#364654',
        text: 'black',
        hover: 'black'
    },
    fontFamily: `Geneva, Verdana, sans- serif`,
    fontSizes: {
        header: '20px',
        title: '22px',
        default: '14px'
    }
};

const darkTheme = {
    colors: {
        primary: '#041A05',
        secondary: '#258073',
        header: '#7FFF00',
        text: '#7FFF00',
        hover: '#258073'
    },
    fontFamily: `'Courier New', Tahoma, Geneva, Verdana, sans - serif`,
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