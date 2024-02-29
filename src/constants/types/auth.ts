// | {
//     avatar_url: string;
//     email: string;
//     email_verified: boolean;
//     full_name: string;
//     iss: string;
//     lastName: string;
//     name: string;
//     phone_verified: boolean;
//     picture: string;
//     provider_id: string;
//     sub: string;
//   };

type UserData = {
  user: {
    name: string;
    lastName: string;
    avatar: string;
  };

  access_token: string;
  refresh_token: string;
};

export type AuthProps = {
  userData: UserData;
};

export interface UserInterface {
  app_metadata: {
    provider: string;
    providers: string[];
  };
  aud: string;
  confirmed_at: string;
  created_at: string;
  email: string;
  email_confirmed_at: string;
  id: string;
  identities: string[]; // Assuming this could be any data structure
  last_sign_in_at: string;
  phone: string;
  role: string;
  updated_at: string;
  user_metadata: UserData["user"];
}
