export interface Profile {
  id: string;
  user_id: string;
  username: string;
  photo: string | "/pfp/default-32x32.png";
  createdAt: Date;
  updatedAt: Date;
}