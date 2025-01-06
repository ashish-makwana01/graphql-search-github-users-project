import UserStats from "./UserStats";

type UserProps = {
  totalRepos: number;
  followers: number;
  following: number;
  gists: number;
};

function StatsContainer({
  totalRepos,
  followers,
  following,
  gists,
}: UserProps) {
  return (
    <div className='grid grid-cols-1 gap-5 mb-8 md:grid-cols-2 lg:grid-cols-4'>
      <UserStats title='repositories' count={totalRepos} />
      <UserStats title='followers' count={followers} />
      <UserStats title='following' count={following} />
      <UserStats title='gists' count={gists} />
    </div>
  );
}

export default StatsContainer;
