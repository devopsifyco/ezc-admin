const { API } = require("..");
import { getCookie } from 'cookies-next';



const getAllChallenge = async() => {
    const userToken = getCookie('accessToken');

    try {
        const res = await fetch(`${API}/challenges`, {
            method: 'GET',
            headers: {
                'Content-Type': `application/json`,
                Authorization: `Bearer ${userToken}`,
              },
        });

        if (res.ok) {
            const data = await res.json();

            return data
        }

    } catch (error) {
        console.log(error);
        
    }
}

export default getAllChallenge;