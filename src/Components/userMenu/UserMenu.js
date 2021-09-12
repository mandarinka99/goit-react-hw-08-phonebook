import { useDispatch, useSelector } from "react-redux";
import { getUserEmail } from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserEmail);
  return (
    <div>
      <p>Welcome, {name}</p>
      <button 
        type="button" 
        onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
