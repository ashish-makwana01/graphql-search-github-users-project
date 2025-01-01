import { GET_USER } from "@/queries";
import { UserData } from "@/types";
import { useQuery } from "@apollo/client";

type UserProfileProps = {
  userName: string;
};

function UserProfile({ userName }: UserProfileProps) {
  const { data, loading, error } = useQuery<UserData>(GET_USER, {
    variables: { login: userName },
  });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  if (!data) {
    return <h2>User not found...</h2>;
  }
  
  const {name, bio, avatarUrl, repositories, followers, following, gists} = data.user;


  return (
    <div> 
      <h3>{bio}</h3>
    </div>
  );
}

export default UserProfile;
