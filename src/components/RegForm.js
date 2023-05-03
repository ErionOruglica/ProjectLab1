import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import img1 from '../imgs/home-img4.jpg';
import '../css/register.css';
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
        <section>
        <div className="register">
            <div className="col-1">
                <h2>SIGN IN</h2>
                <span>register and enjoy the service</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onsubmit)}>
                <input type="text" placeholder="Emri i plote..." {...register("Emri")}/>
                <p>{errors.Emri?.message}</p>
                <input type="text" placeholder="Emaili..." {...register("Email")}/>
                <p>{errors.Email?.message}</p>
                <input type="password" placeholder="Fjalekalimi..." {...register("Password")}/>
                <p>{errors.Password?.message}</p>
                <input type="password" placeholder="Konfirmo fjalekalimin..." {...register("ConfirmPassword")}/>
                <p>{errors.ConfirmPassword?.message}</p>
                <input type="submit" value="Regjistrohu" className="btn" />
                </form>

            </div>
            <div className="col-2">
            <img src={img1} alt="" />
            </div>
        </div>
    </section>
    );
};
