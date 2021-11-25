import React, {Fragment} from 'react'
import { useForm } from 'react-hook-form'

const FormularioHook = () => {

    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Fragment>
            <h2>Hooks Forms</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Ingrese nombre de usuario"
                    className="form-control mb-2"
                    name="usuario"
                    {...register("usuario", { required: {value: true, message: 'Campo obligatorio'} })}
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors.usuario && errors.usuario.message}
                </span>
                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </form>
            
        </Fragment>
    );
}

export default FormularioHook;