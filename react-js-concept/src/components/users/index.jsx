import { useEffect, useState } from "react";

const Users = () => {

    const [usersList, setUsersList] = useState([]);
    // it takes time to load so for some time it could show no users found, to make this work properly we will use useState.
    const [pending, setPending] = useState(false);

    async function fetchAllUsers() {
        try {
            const apiResponse = await fetch('https://dummyjson.com/users');
            const result = await apiResponse.json();
            // console.log(result);

            if (result?.users) {
                setUsersList(result?.users);
                setPending(false);
            } else {
                setUsersList([]);
                setPending(true);
            }

        } catch (err) {
            console.log(err);

        }
    }

    // const handleFetchList = () => {
    //     fetchAllUsers();
    // }

    // useEffect(() => {
    //     fetchAllUsers();
    // }, [])

    console.log(usersList);

    if (pending) {
        return <h1>Fetching Users! Please Wait</h1>
    }


    return (
        <div>
            <h1>All Users Lists</h1>
            <button onClick={fetchAllUsers}>Fetch Users List</button>
            <ul>
                {
                    usersList && usersList.length > 0 ?
                        usersList.map((userItem) => (
                            <li key={userItem?.id}>
                                <p>
                                    {userItem?.firstName} {userItem?.lastName}
                                </p>

                            </li>
                        )) : (<h1>No users found!</h1>)
                }
            </ul>
        </div>
    )
}

export default Users;