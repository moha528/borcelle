import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/header.tsx";

export default function Root() {
    return (
        <>
            <HeaderComponent />
            <Outlet />
        </>
    );
}
