import { GET_USER } from "@/queries";
import { UserData } from "@/types";
import { useQuery } from "@apollo/client";
import UserCard from "./UserCard";
import UserStats from "./UserStats";
import StatsContainer from "./StatsContainer";

type UserProfileProps = {
  userName: string;
};

function UserProfile({ userName }: UserProfileProps) {
  const { data, loading, error } = useQuery<UserData>(GET_USER, {
    variables: { login: userName },
  });

  if (loading) {
    return <h2 className="mt-8">Loading...</h2>;
  }

  if (error) {
    return <h2 className="mt-8">{error.message}</h2>;
  }

  if (!data) {
    return <h2 className="mt-8" >User not found...</h2>;
  }
  
  const {name, bio, avatarUrl, repositories, followers, following, gists, url} = data.user;


  return (
    <div className="mt-8"> 
      <UserCard name={name} avatarUrl={avatarUrl} bio={bio} url={url} />
      <StatsContainer totalRepos={repositories.totalCount} followers={followers.totalCount} following={following.totalCount} gists={gists.totalCount} />
    </div>
  );
}

export default UserProfile;
