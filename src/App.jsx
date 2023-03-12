import { createTheme, ThemeProvider } from '@mui/material'
import { useMemo } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'

import Snackbar from './components/UI/Snackbar'
import { darkTheme, lightTheme } from './lib/constans/theme'
import AppRouts from './routes/Routes'
import { store } from './store'
import { uiActions } from './store/UI/ui.slice'

function AppContent() {
    const dispatch = useDispatch()

    const snackbar = useSelector((state) => state.ui.snackbar)
    const themeMode = useSelector((state) => state.ui.themeMode)

    const theme = useMemo(() => {
        const currrentTheme =
            themeMode === 'light' ? { ...lightTheme } : { ...darkTheme }
        return createTheme(currrentTheme)
    }, [themeMode])

    return (
        <ThemeProvider theme={theme}>
            <Content>
                <Snackbar
                    isOpen={snackbar.isOpen}
                    severity={snackbar.severity}
                    message={snackbar.message}
                    onClose={() => dispatch(uiActions.closeSnackbar())}
                />
            </Content>
            <AppRouts />
        </ThemeProvider>
    )
}

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppContent />
            </BrowserRouter>
        </Provider>
    )
}

export default App
const Content = styled.div`
    margin-top: 101px;
`
