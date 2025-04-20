import { Outlet } from "react-router-dom";
import Header from './../components/layout/Header';
import Footer from './../components/layout/Footer';

const UserLayout = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <Outlet />
            <Footer />
        </>
    )
}

export default UserLayout;