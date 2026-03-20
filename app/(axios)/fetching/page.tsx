import { getUsers, getUserById, createUser, updateUser, deleteUser } from "../axios/fetch"
import testApi from "../axios/testApi"


export default async function Fetching() {
    const users = await getUsers();
    console.log('Users:', users);

    const userById = await getUserById(1);
    console.log('User by ID:', userById);

    const newUser = await createUser({ name: 'John Doe', email: 'johndoe@gmail.com' });
    console.log('New User:', newUser);

    const updatedUser = await updateUser(1, { name: 'Jane Doe' });
    console.log('Updated User:', updatedUser);
    
    const deletedUser = await deleteUser(1);
    console.log('Deleted User:', deletedUser);
    

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Fetching Data</h1>
            <p>This page is for demonstrating data fetching with Axios.</p>

        </div>
    )
}