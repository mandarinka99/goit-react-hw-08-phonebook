import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
    {isLoggedIn && 
      <NavLink
      to="/contacts">
      Contacts
    </NavLink>
    }
    </nav>
  );
}

export default Navigation;