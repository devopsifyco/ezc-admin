import HeaderSection from "@aio/components/HeaderSection";
import ListUsers from "../user";

const Profile = (props) => {
    return (
        <>
            <HeaderSection 
                heading={'Lists account users'}
                subHeading={ListUsers}
            />
        </>
    );
}

export default Profile;