import { Outlet } from "react-router-dom";
import PublicLayout from "@/layouts/PublicLayout";

const PublicPage = () => {
    return (
        <PublicLayout>
            <Outlet />
        </PublicLayout>
    )
}

export default PublicPage;
