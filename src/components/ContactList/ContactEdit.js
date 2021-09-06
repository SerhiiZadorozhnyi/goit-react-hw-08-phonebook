import { useHistory, useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateContact } from "components/redux/contact/contact-operations";

import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { InputMask } from "react-input-mask";


function ContactEdit() {
    const { contactId } = useParams();
    const location = useLocation();
    const [name, setName] = useState(location.name);
    const [number, setNumber] = useState(location.number);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        const { name, value } = target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();

        dispatch(updateContact({ contactId, name, number }));
        history.push(location?.state?.from ?? '/');
        return;
    };

    return (
        <>
            <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                className="item__form-edit"
            >
                <div className="item__input-edit">
                    <TextField
                        size="small"
                        label="Name"
                        variant="outlined"
                        type="text"
                        name="name"
                        placeholder="Jack Sparrow"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="item__input-edit">
                    <InputMask
                        mask="(999)999-99-99"
                        maskChar={null}
                        size="small"
                        label="Phone"
                        variant="outlined"
                        type="text"
                        name="number"
                        value={number}
                        onChange={handleChange}
                    >
                        {inputProps => (
                            <TextField
                                {...inputProps}
                                type="number"
                                variant="outlined"
                            />
                        )}
                    </InputMask>
                </div>

                <div className="item__input">
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                disabled={name === '' || number === ''}
                            >
                                Оновити контакт
                            </Button>
                </div>
            </form>
        </>
    );
}

export default ContactEdit;