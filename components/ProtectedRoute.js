import { redirect } from "next/navigation";

const ProtectedRoute = ({ children, user }) => {
  console.log(user);

  if (!user) {
    return redirect("/login");
  }

  return children;
};

export default ProtectedRoute;
