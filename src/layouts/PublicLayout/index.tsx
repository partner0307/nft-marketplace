import React, { useReducer } from "react";
import Header from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import Footer from "@/components/layout/footer";
import Sidebar from "@/components/layout/sidebar";
import { PublicLayoutProvider, PublicLayoutProviderInterface } from "./context";
import { initialState, reducer } from "./reducer";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <PublicLayoutProvider value={{ ...state, dispatch }}>
            <Header />
            <Sidebar />
            <Main slideOpened={state.slideOpened}>
                {children}
            </Main>
            <Footer />
        </PublicLayoutProvider>
    )
}

export default PublicLayout;
