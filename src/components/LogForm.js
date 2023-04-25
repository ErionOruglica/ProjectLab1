import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
export const Form = () =>{
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver: yupResolver(skema),
    });
    const skema = yup.object.shape({
        Emaili: yup.string().email("Nuk e keni shenuar emailin mire !").required("Ju lutem shenoni emailin tuaj !"),
        Password: yup.string().min(8,"Fjalekalimi duhet te kete te pakten 8 karaktere !").required("Ju lutem shenoni fjalekalimin !"),
    })
     const onSubmit= () => {
        alert("Jeni kycur me sukses !");
     }
    return(
        <div className='Login'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Emaili..." {...register("Email")}/>
        <p>{errors.Email?.message}</p>
        <input type="password" placeholder="Fjalekalimi..." {...register("Password")}/>
        <p>{errors.Password?.message}</p>
        </form>
        </div>
    );
};