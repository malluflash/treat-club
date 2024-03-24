import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Oops!!!</h1>
            <h2>Something went wrong!!</h2>
            <h3>{err.status} : {err.statusText}</h3>
            <h6>{err.error.message}</h6>
            </div>
    )
}

export default ErrorPage;