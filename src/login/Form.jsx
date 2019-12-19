import React from 'react';
import useForm from 'react-hook-form';

function Form () {
    const { register, handleSubmit} = useForm();
    const onSubmit = values => console.log(values);

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label> Prénom : </label>
                <input name="firstName" ref={register}/>

                <label> Nom : </label>
                <input name="lastName" ref={register}/>

                <input type="submit" />
                               
            </form>
        </div>
    )
}

export default Form