import { primaryColor, secondaryColor } from '@/styles/theme.module.scss'
import { createTheme } from '@mui/material';

const appTheme = createTheme({
    shape: {
        borderRadius: 10
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    padding: '12px',
                    color: '#fff'
                },
            }
        },
        MuiTypography: {
            styleOverrides: {
                paragraph: {
                    color: 'red'
                },
            }
        }
    },
    palette: {
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor
        },
    },
    typography: {
        fontSize: 13,
        fontFamily: 'Manrope',
        allVariants: {
            color: '#858585',
        },
        subtitle1: {
            '&:hover': {
                color: primaryColor
            }
        },
    }
});

export {
    appTheme
}