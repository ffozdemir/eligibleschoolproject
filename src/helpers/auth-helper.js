import { auth } from "@/auth";
import { appConfig } from "./config";

export const getAuthHeader = async () => {
  const session = await auth();
  const token = session?.accessToken;

  let authHeader = {
    "Content-Type": "application/json",
  };

  if (token) {
    authHeader["Authorization"] = token;
  }

  return authHeader;
};

const parseJWT = (token) => {
  return JSON.parse(atob(token.split(".")[1]));
  //token.split(".")[1] decodes the payload of the JWT
  // atob() decodes a base-64 encoded string
  // JSON.parse() converts the string into a JavaScript object
};

export const getIsTokenValid = (token) => {
  if (!token) {
    return false; // If no token is provided, it's not valid
  }

  const jwtExpireTimeStamp = parseJWT(token).exp; // Extract the expiration time from the JWT (second based)

  const jwtExpireDateTime = new Date(jwtExpireTimeStamp * 1000); // Convert to milliseconds

  return jwtExpireDateTime > new Date(); // Check if the token is still valid
};

export const getIsUserAuthorized = (role, targetPath) => {
  if (!role || !targetPath) return false;

  const userRight = appConfig.userRightsOnRoutes.find((item) =>
    item.urlRegex.test(targetPath)
  );

  if (!userRight) return false;

  return userRight.roles.includes(role);
};
