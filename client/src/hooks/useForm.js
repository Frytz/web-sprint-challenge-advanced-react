// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = initialValue => {
    //state
    const [values,setValues] = useState(initialValue)

//handle change

const handleChanges = e => {
    setValues ({
        ...values, [e.target.name]: e.target.value
    });
};
return [values, handleChanges];
};
