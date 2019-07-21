export class User {
  user:{
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
  password: string;
}
sessionToken?: string};

export class Bio{
  user:{
    bio: string
  }
}