
type UserProfileProps = {
  userName: string;
};

function UserProfile({ userName }: UserProfileProps) {
  return (
    <div>
      <h3>{userName}</h3>
    </div>
  );
}

export default UserProfile;
