import { API } from "..";
import { getCookie } from 'cookies-next';


const useUsers = () => {
  
    const getListDataUsers = async () => {
      try {
        const userToken = getCookie('accessToken');
        const res = await fetch(`${API}/users`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userToken}`,
          },
        });
  
        if (res.ok) {
          const data = await res.json();
          return data;
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    const getTotalOfUsers = async () => {
      try {
        const data = await getListDataUsers();
        const totalUsers = data.length;
  
        return totalUsers;
      } catch (error) {
        console.log(error);
      }
    };
  
    return { getListDataUsers, getTotalOfUsers };
  };
  
  export default useUsers;
  