import Tasks from "../pages/tasks-page/Tasks";
import Login from "../pages/login-page/Login";
import Error from "../pages/error-page/Error";
export interface IRoute {
    path: string,
    element: any,
    exact?: boolean
}

export const privateRoutes: IRoute[] = [
    {path: "/tasks", element: Tasks, exact: true}
]

export const publicRoutes: IRoute[] = [
    {path: "/", element: Login, exact: true},
    {path: "/error", element: Error, exact: true}
]
