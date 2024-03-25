import styles from "./UserIcon.module.css";
import useProfile from "pages/api/profile";

const UserIcon = ({ onClick = () => {} }) => {
  const { profileData } = useProfile();
  console.log(profileData);

  return (
    <div onClick={onClick} className={styles.container}>
       {profileData && profileData.avatar && profileData.avatar.downloadLink ? (
        <img
          src={profileData.avatar.downloadLink}
          alt="User Profile image"
          width={40}
          height={40}
        />
      ) : (
        <img
          src={`/profile-user.png`}
          alt="Default User Profile image"
          width={40}
          height={40}
        />
      )}
    </div>
  );
};

export default UserIcon;
