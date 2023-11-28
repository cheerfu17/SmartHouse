import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import { publicRoutes } from '../utils/routers';
import { observer } from 'mobx-react-lite';
import { DEVICES_ROUTE } from '../utils/consts';
const AppRouter = observer(() => {
    
    return (
        <Routes>

            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} Component={Component} exect/>
            )}

            <Route
                path="*"
                element={<Navigate to={DEVICES_ROUTE}/>}
            />

        </Routes>
    );
});

export default AppRouter;