import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: '#422462',
            dark: '#190036',
            contrastText: '#fff',
        },
        secondary: {
            light: '#27AE6010',
            main: '#27AE60',
            dark: '#1b7908',
            contrastText: '#fff',
        },
        error: {
            light: 'rgba(235, 87, 87, 0.7)',
            main: 'rgba(235, 87, 87)',
            contrastText: '#fff',
        },
        info: {
            light: 'rgba(242, 153, 74, 0.7)',
            main: 'rgba(242, 153, 74)',
            contrastText: '#fff',
        },
        grey: {
            main: '#F2F2F2',
            contrastText: '#fff',
        },
        success: {
            light: '#27AE6010',
            main: '#27AE60',
            dark: '#1b7908',
            contrastText: '#000',
        },
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)",
        }
    },
});

export default theme;