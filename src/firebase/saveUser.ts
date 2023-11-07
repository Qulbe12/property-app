import {getDatabase, ref, set} from "firebase/database";


const saveUser = async (userId: string | undefined, name: string | undefined | null, phone: string | undefined | null) => {
    const db = getDatabase();
    const response = await set(ref(db, 'users/' + userId), {
        username: name,
        phone: phone,
    });
}

export default saveUser
