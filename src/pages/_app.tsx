import React from 'react'

// MUI
import { Typography } from "@mui/material"

// Styles
import '@/styles/globals.css'

// Theme
import { appTheme } from '@/components/theme';
import { ThemeProvider } from '@emotion/react'

// Interface
interface AppInterface {
    Component: any,
    pageProps: any
}

const App = ({ Component, pageProps }: AppInterface) => {
    return (
        <React.Fragment>
            <ThemeProvider theme={appTheme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;