import { store } from '../../store'

export const lightTheme = {
    palette: {
        primary: {
            main: '#8a2b06',
            light: '#c44814',
            dark: '#481805',
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
    spacyng: {},
}

export const darkTheme = {
    palette: {
        primary: {
            main: 'rgb(56, 14, 170)',
            light: 'rgb(59, 8, 201)',
            dark: 'rgb(36, 13, 99)',
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
    spacyng: {},
}

export const getTheme = () => {
    const currentTheme = store.getState().ui.themeMode
    return currentTheme === 'light' ? lightTheme : darkTheme
}
