import { UserInterface } from "@/constants/types/auth";

function parseUser(user: UserInterface) {
  return {
    id: user.id,
    email: user.email,
    role: user.role,
    ...user.user_metadata,
  };
}

export default parseUser;
