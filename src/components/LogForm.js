import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

export const Form = () => {
  const schema = yup.object().shape({
    Email: yup.string().email("Nuk e keni shenuar emailin mire !").required("Ju lutem shenoni emailin !"),
    Password: yup.string().min(8,"Fjalekalimi duhet te kete te pakten 8 karaktere !").max(20,"Fjalekalimi nuk duhet te kete me shume se 20 karaktere !").required("Ju lutem shenoni fjalekalimin")
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    for (let i = 0; i < 190; i++) {
      const span = document.createElement('span');
      document.getElementById('section').appendChild(span);
    }
  }, []);

  return (
    <section id='section'>
      <div className="signin">
        <div className="Permbajtja">
          <h2>Kyçu</h2>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="inputBx">
              <input type="text" id="adresaEmailit" {...register("Email")} />
              <i>E-maili</i>
              <p>{errors.Email?.message}</p>
            </div>
            <div className="inputBx">
              <input type="password" id="pass" {...register("Password")} />
              <i>Fjalekalimi</i>
              <p>{errors.Password?.message}</p>
            </div>
            <div className="links">
              <a href="#">Keni harruar fjalekalimin?</a>
              <a href="#">Nuk keni llogari?</a>
            </div>
            <div className="inputBx">
              <input type="submit" value="Kyçu" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
