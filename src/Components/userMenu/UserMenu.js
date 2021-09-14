import { useDispatch, useSelector } from "react-redux";
import { getUserEmail } from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operations";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserEmail);
  return (
    <div className={s.userMenu}>
      <h2>Welcome, {name}!</h2>

      <button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        className={s.menuBut}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
