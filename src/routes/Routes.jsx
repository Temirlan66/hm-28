import { Route, Routes } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import UserLayout from '../layout/UserLayout'
import MealsPage from '../pages/user/Meals'
import AdminLayout from '../layout/AdminLayout'
import OrdersForAdmin from '../pages/admin/Orders.page'
import MealsAdmin from '../pages/admin/Meals.page'
import { ProtectedRoute } from './ProtectedRoute'
import { UserRoles } from '../lib/constans/common'
import SignIn from '../pages/user/SignIn'
import SigUpPage from '../pages/user/SignUp'
import UsersOrderPage from '../pages/user/UsersOrder'

const AppRoutes = () => {
    const role = useSelector((state) => state.auth.user.role)

    const isAllowed = (roles) => {
        return roles.includes(role)
    }

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProtectedRoute
                        isAllowed={isAllowed([UserRoles.GUEST, UserRoles.USER])}
                        fallBackPath="/admin/meals"
                        component={UserLayout}
                    />
                }
            >
                <Route
                    index
                    element={
                        <ProtectedRoute
                            isAllowed={isAllowed([
                                UserRoles.GUEST,
                                UserRoles.USER,
                            ])}
                            fallBackPath="/admin/meals"
                            component={MealsPage}
                        />
                    }
                />
                <Route
                    path="/userorders"
                    element={
                        <ProtectedRoute
                            isAllowed={isAllowed([UserRoles.USER])}
                            fallBackPath="/userorders"
                            component={UsersOrderPage}
                        />
                    }
                />
                <Route
                    path="signup"
                    element={
                        <ProtectedRoute
                            isAllowed={isAllowed([
                                UserRoles.GUEST,
                                UserRoles.USER,
                            ])}
                            fallBackPath={
                                role === UserRoles.ADMIN ? '/admin/meals' : '/'
                            }
                            component={SigUpPage}
                        />
                    }
                />
                <Route
                    path="signin"
                    element={
                        <ProtectedRoute
                            isAllowed={isAllowed([
                                UserRoles.GUEST,
                                UserRoles.USER,
                            ])}
                            fallBackPath={
                                role === UserRoles.ADMIN ? '/admin/meals' : '/'
                            }
                            component={SignIn}
                        />
                    }
                />
            </Route>
            <Route
                path="/admin"
                element={
                    <ProtectedRoute
                        isAllowed={isAllowed([UserRoles.ADMIN])}
                        fallBackPath="/"
                        component={AdminLayout}
                    />
                }
            >
                <Route
                    path="meals"
                    element={
                        <ProtectedRoute
                            isAllowed={isAllowed([UserRoles.ADMIN])}
                            fallBackPath="/"
                            component={MealsAdmin}
                        />
                    }
                />
                <Route
                    path="orders"
                    element={
                        <ProtectedRoute
                            isAllowed={isAllowed([UserRoles.ADMIN])}
                            fallBackPath="/"
                            component={OrdersForAdmin}
                        />
                    }
                />
            </Route>
            <Route
                path="*"
                element={<Typography>404 Page Not Found</Typography>}
            />
        </Routes>
    )
}

export default AppRoutes
