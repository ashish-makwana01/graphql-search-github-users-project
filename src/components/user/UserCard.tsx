import { Button } from "../ui/button";
import { Card, CardTitle, CardHeader, CardDescription } from "../ui/card";

type UserCardProps = {
  avatarUrl: string;
  name: string;
  description: string;
  url: string;
};

function UserCard({ avatarUrl, name, description, url }: UserCardProps) {
  return (
    <Card className='w-full md:w-1/2 mb-8'>
      <CardHeader className='flex gap-x-4 items-center'>
        <img
          src={avatarUrl}
          alt={name}
          className='w-36 h-36 rounded object-cover'
        />
        <div className='flex flex-col gap-y-4'>
          <CardTitle>{name || "Web Developer"}</CardTitle>
          <CardDescription>
            {description || "Full Stack Developer"}
          </CardDescription>
          <Button asChild size='sm' className='w-1/2 mt-2'>
            <a href={url} target='_blank' rel='noreferrer'>
              View Profile
            </a>
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
}

export default UserCard;
