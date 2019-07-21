export class User {
  user:{
    id?: string;
    username: string;
    email: string;
    password: string;
    bio: string;
  }
  sessionToken?: string
  };
export class UserLogin{
  user:{
  email: string;
  id?: string;
  bio?: string;
  username?: string;
  password: string;
}
sessionToken?: string};

export class Bio{
  user:{
    bio: string
  }
}