import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getIsLoggedIn } from "../redux/auth/auth-selectors";

const PublicRoute = ({
  children,
  restricted = false,
  redirectTo = "/",
  ...props
}) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  console.log(`shouldRedirect`, shouldRedirect);
  return (
    <Route {...props}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
};

export default PublicRoute;
