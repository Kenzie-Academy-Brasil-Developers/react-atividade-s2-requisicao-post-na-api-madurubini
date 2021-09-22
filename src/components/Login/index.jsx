import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const Login = () => {
  const [dataForm, setDataForm] = useState("");
  const formSchema = yup.object().shape({
    username: yup.string().required("Usuário Obrigatório"),
    password: yup
      .string()
      .min(8, "Sua senha precisa ter no mínimo 8 caracteres")
      .required("Informe sua senha"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  function sendData(data) {
    setDataForm(data);
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(sendData)}>
        <h3>Formulário de requisição</h3>
        <input placeholder="username" {...register("username")}></input>
        {errors.username?.message}
        <input
          placeholder="password"
          type="password"
          {...register("password")}
        ></input>
        {errors.password?.message}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
