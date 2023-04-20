import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {IRoute, privateRoutes, publicRoutes} from "../router/routes";
import {logout} from "../redux/actions";

function AppRouter() {
    const dispatch = useDispatch()
    let auth = useSelector((state: any) => state.app.login)
    if (localStorage.getItem('token')){
        auth = true
    }
    return (
        auth ? <Routes>
                {privateRoutes.map((route:IRoute) => {
                    return <Route path={route.path} element={<route.element />} key={route.path} />
                })}
            <Route path="*" element={<Navigate to="/tasks" replace />}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map((route: IRoute) => {
                    return <Route path={route.path} element={<route.element />} key={route.path} />
                })}
                <Route path="*" element={<Navigate to="/error" replace />}/>
            </Routes>
    )
}

export default AppRouter;
