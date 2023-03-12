import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../components/header/adminheader/AdminHeader'
const AdminLayout = () => {
    return (
        <>
            <AdminHeader />
            <Grid>
                <Outlet />
            </Grid>
        </>
    )
}

export default AdminLayout
