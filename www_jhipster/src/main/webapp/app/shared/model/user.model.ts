export interface IUser {
  id?: number;
  profileName?: string;
  avatarContentType?: string;
  avatar?: any;
  postCount?: number;
}

export class User implements IUser {
  constructor(
    public id?: number,
    public profileName?: string,
    public avatarContentType?: string,
    public avatar?: any,
    public postCount?: number
  ) {}
}
