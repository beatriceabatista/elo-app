import React from "react";
import { useForm } from "react-hook-form";

import "./App.css";

export default function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    alert(JSON.stringify(data));
  };
  const onError = (errors, e) => null;

  return (
    <div className="MainPage">
      <h1 className="title">EloGroup</h1>

      <h3> Novo Lead</h3>
      <div className="formulario">
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="coluna1">
            <label htmlFor="nome">Nome:</label>
            <input
              aria-invalid={errors.name ? "true" : "false"}
              {...register("nome", { required: true, maxLenght: 30 })}
            />
            {errors.nome && (
              <span role="alert" className="alert">
                Preencha o campo Nome
              </span>
            )}

            <label htmlFor="email">E-mail:</label>
            <input
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido",
                },
              })}
            />
            {errors.email && (
              <span role="alert" className="alert">
                Preencha o campo Email
              </span>
            )}

            <label htmlFor="telefone">Telefone:</label>
            <input
              aria-invalid={errors.telefone ? "true" : "false"}
              type="number"
              {...register("telefone", {
                required: true,
                minLength: 9,
                maxLength: 9
              })}
            />
            {errors.telefone && (
              <span role="alert" className="alert">
                Preencha o campo Telefone (999999999)
              </span>
            )}
          </div>

          <div className="coluna2">
            <h4>Oportunidades:</h4>
            <table>
              <tbody>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        let value = e.target.checked;
                        let checks = document.querySelectorAll(
                          "input[type='checkbox']"
                        );
                        let x = checks.length;
                        while (x--) {
                          checks[x].checked = value;
                        }
                      }}
                    />
                  </th>
                  <th></th>
                </tr>

                <tr>
                  <th>
                    <input type="checkbox" {...register("RPA", {})} />
                  </th>
                  <th>
                    <label htmlFor="RPA">RPA</label>
                  </th>
                </tr>

                <tr>
                  <th>
                    <input type="checkbox" {...register("ProdutoDigital")} />
                  </th>
                  <th>
                    <label htmlFor="ProdutoDigital">Produto Digital</label>
                  </th>
                </tr>

                <tr>
                  <th>
                    <input type="checkbox" {...register("Analytics")} />
                  </th>
                  <th>
                    <label htmlFor="Analytics">Analytics</label>
                  </th>
                </tr>

                <tr>
                  <th>
                    <input type="checkbox" {...register("BPM")} />
                  </th>
                  <th>
                    <label htmlFor="BPM">BPM</label>
                  </th>
                </tr>
              </tbody>
            </table>

            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
