import { useDispatch, useSelector } from "react-redux";
import actions from "components/redux/contact/contact-action";
import { getFilter } from '../redux/contact/contact-selector';

import './Filter.module.css';
import TextField from '@material-ui/core/TextField';


function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <TextField
      size="small"
      label="Search"
      variant="outlined"
      type="text"
      value={value}
      onChange={event => dispatch(actions.changeFilter(event.target.value))}
    />
  );
}

export default Filter;