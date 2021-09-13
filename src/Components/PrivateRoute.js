import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { getIsLoggedIn } from "../redux/auth/auth-selectors";

const PrivateRoute = ({ children, redirectTo = "/", ...props }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log(`isLoggedIn`, isLoggedIn, children);
  return (
    <Route {...props}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

export default PrivateRoute;
