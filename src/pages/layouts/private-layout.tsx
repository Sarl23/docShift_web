import { Navigate, Outlet } from "react-router-dom"
import { useSigninCheck } from 'reactfire';

const PrivateLayout = () => {

    const { status, data: signInCheckResult } = useSigninCheck();

    if (status === "loading") {
        return <div>loading</div>
    }

    if (signInCheckResult.signedIn) {
        return <Outlet />
    }

    return (
        <>
            <main className="container my-6">
                <Navigate to="/" />
            </main>
        </>
    )
}

export default PrivateLayout