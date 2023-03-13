import { store } from '../../store'

export const lightTheme = {
    palette: {
        primary: {
            main: '#a47231',
            light: '#a47231',
            dark: '#a47231',
            constrastText: '#FFF',
        },
        secondary: {
            main: '#8a2b06',
            light: '#8a2b06',
            dark: '#8a2b06',
            constrastText: '#FFF',
            themeBtn: '#1d02b3',
            hover: 'rgb(59, 8, 201)',
        },
        error: {
            main: '#ee1616',
            light: '#ee1616',
            dark: '#ee1616',
            constrastText: '#FFF',
        },
        success: {
            main: '#0cec32',
            light: '#0cec32',
            dark: '#0cec32',
            constrastText: '#FFF',
        },
    },
    typorgraphy: {
        fontFamily: 'Roboto',
        fontSize: 14,
    },
}

export const darkTheme = {
    palette: {
        primary: {
            main: '#3f3f3f',
            light: '#3f3f3f',
            dark: '#3f3f3f',
            contrastText: '#fff',
        },
        secondary: {
            main: '#878787 ',
            light: '#969C9A',
            dark: '#5c5957',
            themeBtn: '#8a2b06',
            hover: '#c44814',
            constrastText: '#FFF',
        },
        error: {
            main: '#ee1616',
            light: '#ee1616',
            dark: '#ee1616',
            constrastText: '#FFF',
        },
        success: {
            main: '#0cec32',
            light: '#0cec32',
            dark: '#0cec32',
            constrastText: '#FFF',
        },
    },
    typorgraphy: {
        fontFamily: 'Roboto',
        fontSize: 14,
    },
}

export const getTheme = () => {
    const currentTheme = store.getState().ui.themeMode
    return currentTheme === 'light' ? lightTheme : darkTheme
}
