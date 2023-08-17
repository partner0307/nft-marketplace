import React from "react";
import Header from "../../components/layout/header";
import { Main } from "../../components/layout/main";
import Footer from "../../components/layout/footer";
import Sidebar from "../../components/layout/sidebar";

const PublicLayout = ({ children }: { children: React.ReactNode}) => {
    return (
        <>
            <Header />
            <Sidebar />
            <Main>
                { children }
            </Main>
            <Footer />
        </>
    )
}

export default PublicLayout;
