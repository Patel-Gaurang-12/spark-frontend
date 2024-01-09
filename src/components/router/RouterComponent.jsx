import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom'
import { LandingPage } from '../landing page/LandingPage';
import { LoginSignup } from '../auth/LoginSignup';
import { Deshboard } from '../deshboard/Deshboard';
// import { useCookies } from 'react-cookie';
import { Sidebar } from '../deshboard/sidebarHeader/Sidebar';
import { Auth } from '../auth/Auth';

export const RouterComponent = () => {

    // const [cookies, setCookies] = useCookies(['name']);
    // setCookies("name", "cookie");

    const router = createBrowserRouter([
        {
            path: "/",
            element: <LandingPage />
        },
        {
            path: "auth",
            element: <LoginSignup />
        },
        {
            element: <Auth />,
            children:
                [{
                    path: "/creater",
                    element: <Sidebar />,
                    children: [{
                        path: "deshboard",
                        element: <Deshboard />
                    }]
                }]
        },
    ]);

    return <RouterProvider router={router} />
}
