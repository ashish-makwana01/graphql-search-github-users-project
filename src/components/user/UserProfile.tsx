import { GET_USER } from "@/queries";
import { UserData } from "@/types";
import { useQuery } from "@apollo/client";
import UserCard from "./UserCard";
import StatsContainer from "./StatsContainer";
import ForkedReposChart from "../charts/ForkedReposChart";
import StarReposChart from "../charts/StarReposChart";
import LanguageReposChart from "../charts/LanguageReposChart";

type UserProfileProps = {
  userName: string;
};

function UserProfile({ userName }: UserProfileProps) {
  const { data, loading, error } = useQuery<UserData>(GET_USER, {
    variables: { login: userName },
  });

  if (loading) {
    return <h2 className='mt-8'>Loading...</h2>;
  }

  if (error) {
    return <h2 className='mt-8'>{error.message}</h2>;
  }

  if (!data) {
    return <h2 className='mt-8'>User not found...</h2>;
  }

  const {
    name,
    bio,
    avatarUrl,
    repositories,
    followers,
    following,
    gists,
    url,
  } = data.user;

  return (
    <div className='mt-8 mb-20'>
      <UserCard name={name} avatarUrl={avatarUrl} bio={bio} url={url} />
      <StatsContainer
        totalRepos={repositories.totalCount}
        followers={followers.totalCount}
        following={following.totalCount}
        gists={gists.totalCount}
      />
      {repositories.totalCount > 0 && (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 md:mt-16'>
          <ForkedReposChart repositories={repositories.nodes} />
          <StarReposChart repositories={repositories.nodes} />
          <LanguageReposChart repositories={repositories.nodes} />
        </div>
      )}
    </div>
  );
}

export default UserProfile;
