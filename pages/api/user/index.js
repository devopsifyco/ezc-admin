import { API } from "..";

const useUsers = () => {
  
    const getListDataUsers = async () => {
      try {
        
        const userToken = localStorage.getItem('userToken');
        console.log('userToken', userToken);
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
        console.log('xxx', data);
        const totalUsers = data.length; // Assuming data is an array of users
  
        return totalUsers;
      } catch (error) {
        console.log(error);
      }
    };
  
    return { getListDataUsers, getTotalOfUsers };
  };
  
  export default useUsers;
  