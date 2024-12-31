import { FormEvent, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

type SearchFormProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

function SearchForm({setUserName }: SearchFormProps) {
  const [text, setText] = useState("");

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text === "") {
      console.log("please provide a user name");
      return;
    }

    setUserName(text);
  };

  return (
    <div>
      <form
        onSubmit={handleSearch}
        className='flex items-center justify-center gap-x-3 w-full md:w-1/3'
      >
        <Label htmlFor='search' className='sr-only'>
          Search
        </Label>
        <Input
          id='search'
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Search github users...'
          className='bg-background'
        />
        <Button type='submit'>Search</Button>
      </form>
    </div>
  );
}

export default SearchForm;
