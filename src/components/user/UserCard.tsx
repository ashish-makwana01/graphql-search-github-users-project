import { Button } from "../ui/button";
import { Card, CardTitle, CardHeader, CardDescription } from "../ui/card";

type UserCardProps = {
  avatarUrl: string;
  name: string;
  bio: string;
  url: string;
};

function UserCard({ avatarUrl, name, bio, url }: UserCardProps) {
  return (
    <Card className='w-full md:w-1/2 mb-8'>
      <CardHeader className='flex flex-row gap-x-8 items-center'>
        <img
          src={avatarUrl}
          alt={name}
          className='w-36 h-36 md:w-44 md:h-44 rounded object-cover'
        />
        <div className='flex flex-col gap-y-2'>
          <CardTitle className="text-lg md:text-xl tracking-wide">{name || "Web Developer"}</CardTitle>
          <CardDescription className="text-md tracking-wide">
            {bio || "Full Stack Developer"}
          </CardDescription>
          <Button asChild size='lg' className='w-28 md:w-28 mt-4' >
            <a href={url} target='_blank' rel='noreferrer' className="tracking-wide">
              View Profile
            </a>
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
}

export default UserCard;
