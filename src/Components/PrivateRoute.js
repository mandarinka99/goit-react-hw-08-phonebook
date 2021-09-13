import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { getIsLoggedIn } from "../redux/auth/auth-selectors";

const PrivateRoute = ({ children, ...props }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log(`isLoggedIn`, isLoggedIn);
  return (
    <Route {...props}>
      {isLoggedIn ? children : <Redirect to="/register" />}
    </Route>
  );
};

export default PrivateRoute;
