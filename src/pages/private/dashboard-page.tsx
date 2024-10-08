import { useUser } from "reactfire"

const DashboardPage = () => {

    const {data: user}= useUser();

    console.log({user});

    return (
        <>
        <h1>dashboard-page</h1>
        <h2>welcome {user?.displayName}</h2>
        </>
    )
}

export default DashboardPage