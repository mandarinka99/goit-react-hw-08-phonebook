import s from "./FilterContactForm.module.css";
import { useDispatch } from "react-redux";
import { filterChange } from "../../redux/contacts/contacts-actions";
import { TextField } from "@material-ui/core";

const FilterContacts = () => {
  const dispatch = useDispatch();
  const onHandleChange = (e) => {
    const { value } = e.target;
    dispatch(filterChange(value));
  };
  return (
    <div>
      <form className={s.form} onSubmit={(e) => e.preventDefault()}>
        <TextField
          type="name"
          name="name"
          onChange={onHandleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          label="Find contacts by name"
          required
          variant="outlined"
          size="small"
          className={s.input}
        />
      </form>
    </div>
  );
};

export default FilterContacts;
