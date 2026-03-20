import { getUsers, getUserById, createUser, updateUser, deleteUser } from "../axios/fetch"

export default async function testApi() {
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
}

testApi();