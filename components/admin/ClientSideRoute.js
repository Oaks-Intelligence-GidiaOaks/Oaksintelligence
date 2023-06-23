import Link from "next/link";

const ClientSideRoute = ({ children, route }) => {
  return <Link href={route}>{children}</Link>;
};

export default ClientSideRoute;
