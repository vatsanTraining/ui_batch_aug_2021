import React from "react";
import { useState } from "react";

export const useForm = (callback: any, initialState:{}) => {
 
       const [values, setValues] = useState(initialState);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            console.log(values);
            console.log("event.target.name"+event.target.name)
            console.log("event.target.value"+event.target.value)
            
            setValues({ ...values, [event.target.name]: event.target.value });
        };
    
     const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                callback();
            };
           return {
                onChange,
                onSubmit,
                values,
            };
        }
        