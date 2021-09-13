import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getIsLoggedIn } from "../redux/auth/auth-selectors";

const PublicRoute = ({ children, restricted = false, ...props }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...props}>
      {shouldRedirect ? <Redirect to="/login" /> : children}
    </Route>
  );
};

export default PublicRoute;
