import devices from "../pages/Devices"
import { DEVICES_ROUTE } from "./consts"




export const publicRoutes = [
    {
        path: DEVICES_ROUTE,
        Component: devices
    }
]