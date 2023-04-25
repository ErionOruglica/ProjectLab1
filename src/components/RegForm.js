import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
export const Form = () =>{
const skema = yup.object().shape({
    Emri: yup.string("Emri nuk duhet te permbaje numra !").required("Ju lutem shenoni emrin !").min(2),
    Email: yup.string().email("Nuk e keni shenuar emailin mire !").required("Ju lutem shenoni emailin !"),
    Password: yup.string().min(8,"Fjalekalimi duhet te kete te pakten 8 karaktere !").max(20,"Fjalekalimi nuk duhet te kete me shume se 20 karaktere !").required("Ju lutem shenoni fjalekalimin"),
    ConfirmPassword: yup.string().oneOf([yup.ref("Password"),null],"Fjalekalimi nuk perputhet !").required(" Ju lutem shenoni perseri fjalekalimin !"),
    });

    const { register,handleSubmit,formState:{errors} }=useForm({
        resolver: yupResolver(skema),
    });

    const onsubmit = (data) =>{
    console.log(data);
    }
    return(
    <form onSubmit={handleSubmit(onsubmit)}>
        <input type="text" placeholder="Emri i plote..." {...register("Emri")}/>
        <p>{errors.Emri?.message}</p>
        <input type="text" placeholder="Emaili..." {...register("Email")}/>
        <p>{errors.Email?.message}</p>
        <input type="password" placeholder="Fjalekalimi..." {...register("Password")}/>
        <p>{errors.Password?.message}</p>
        <input type="password" placeholder="Konfirmo fjalekalimin..." {...register("ConfirmPassword")}/>
        <p>{errors.ConfirmPassword?.message}</p>
        <input type="submit" value="Regjistrohu" />
    </form>
    );
};
