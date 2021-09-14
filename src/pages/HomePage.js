import { Container } from "@material-ui/core";
import sprite from "../images/sprite.svg";
import s from "./Pages.module.css";

const HomePage = () => {
  return (
    <Container>
      <h2 className={s.homePage}>
        Welcome to Phonebook!{" "}
        <span>
          <svg className={s.homeIcon}>
            <use href={sprite + "#icon-heart"} />
          </svg>
        </span>
         
      </h2>
    </Container>
  );
};

export default HomePage;
