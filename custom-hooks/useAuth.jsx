import { redirect } from "next/navigation";

const { useSelector } = require("react-redux");

export const useAuth = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  !isLoggedIn && redirect("/");
};
