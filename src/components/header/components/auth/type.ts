type UserData = {
  user: {
    name: string;
    lastName: string;
  };
  access_token: string;
  refresh_token: string;
};

export type AuthProps = {
  userData: UserData | null;
};
