import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import "./style.css";

const Login = ({ setIsAuth }) => {
  const formSchema = yup.object().shape({
    username: yup.string().required("Usuário Obrigatório"),
    password: yup.string().required("Informe sua senha"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ resolver: yupResolver(formSchema) });

  function sendData(FormData) {
    console.log(FormData);
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", FormData)
      .then((response) => {
        console.log(response);
        window.localStorage.clear();
        window.localStorage.setItem("authToken", response.data.access);
        setIsAuth(true);
      })

      .catch((err) => {
        setIsAuth(false);
        setError("password", {
          message: "Sem autorização",
        });
      });
  }

  return (
    <form onSubmit={handleSubmit(sendData)}>
      <h3>Formulário de requisição</h3>
      <input placeholder="username" {...register("username")}></input>
      <p className="Erro">{errors.username?.message}</p>
      <input
        placeholder="password"
        type="password"
        {...register("password")}
      ></input>
      <p className="Erro"> {errors.password?.message}</p>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
