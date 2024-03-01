export type UserType = {
  id: string;
  role: string;
  email: string;
  name: string;
  lastName: string;
  avatar: string;
};

export interface UserInterface {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: {
    provider: "email" | "google" | "github" | "facebook";
    providers: string[];
  };
  user_metadata: { name: string; lastName: string; avatar: string };
  identities: any[];
  created_at: string;
  updated_at: string;
}
