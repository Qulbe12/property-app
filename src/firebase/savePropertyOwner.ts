import {getDatabase, ref, set} from "firebase/database";
import uuid from 'react-native-uuid'

const savePropertyOwner = async (userId: string | undefined, name: string | undefined | null, phone: string | undefined | null) => {
    const db = getDatabase();
    const randomId = uuid.v4();
    console.log(randomId)
    const response = await set(ref(db, `users/${userId}/propertyOwner/${randomId}`), {
        username: name,
        phone: phone,
    })
    console.log(response)
}

export default savePropertyOwner
