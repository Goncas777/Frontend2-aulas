const cardStyles = {
    padding: "6px",
    backgroundColor: "#0055ffff",
    borderRadius: "10px",
};

const ProfileCard = ({
    name,
    profilePic,
    email,


}:
{
    name?: string;
    profilePic?: string;
    email?: string;
}) => {
    return  <div style={cardStyles}>
        <h2 style={cardStyles}>{name}</h2>
        <div style={cardStyles}>{email}</div>
        <img src={profilePic} alt={name} />
    </div>;
};

export default ProfileCard;

