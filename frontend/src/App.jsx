import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";


function App() {
  
  const {
    register: registerUser,
    handleSubmit: handleSubmitUser,
    formState: { errors },
  } = useForm();

  const onRegisterSubmit = async (data) => {
   
    const dataUser = {
      ...data
    }

    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataUser)
    });
    const result = await response.json();
    console.log(result);

  }

  const onLogin = () => {
    navigate('/login', {
      replace: false
    });
  }

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="max-w-md w-full p-10 rounded-md  bg-[#A4C2A8]">
          <div className="flex items-center justify-center mb-4">
            <div>
              <h1 className="text-2xl font-bold">Registro</h1>
            </div>
          </div>
          <form className="flex flex-col" onSubmit={handleSubmitUser(onRegisterSubmit)}>
            <div className="flex items-center justify-center">
              <div className="flex flex-col mr-3">

                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  className="bg-white w-full px-4 py-2 rounded-md"
                  name="nombre"
                  placeholder="Nombre"
                  {...registerUser("nombre", { required: true })}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="apellido">Apellido</label>
                <input
                  type="text"
                  className="bg-white w-full px-4 py-2 rounded-md"
                  name="apellido"
                  placeholder="Apellido"
                  {...registerUser("apellido", { required: true })}
                />
              </div>
            </div>

            <label htmlFor="genero">Genero:</label>
            <select
              className="bg-white w-full px-4 py-2 rounded-md"
              name="genero"
              {...registerUser("genero", { required: true })}
            >
              <option value="">Selecciona tu género</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>


            <label htmlFor="email">Dirección de correo electrónico:</label>
            <input
              type="email"
              className="bg-white w-full px-4 py-2 rounded-md"
              name="email"
              placeholder="example@mail.com"
              {...registerUser("email", { required: true })}
            />
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              className="bg-white w-full px-4 py-2 rounded-md"
              name="passwor"
              placeholder="Escribe tu contraseña"
              {...registerUser("password", { required: true })}
            />

            <div className="flex items-center justify-center">
              <button className="bg-sky-700 hover:bg-sky-500 px-4 py-1 rounded-md my-1 w-full font-semibold "
              >
                Regístrate
              </button>
            </div>
          </form>

          <p className="text-xs block my-1" style={{ color: '#393f81' }}>¿Ya tienes cuenta?
            <a
              onClick={onLogin}
              style={{ color: '#393f81' }} className="link"
            > Ingresa aquí
            </a>
          </p>

        </div>
      </div>
    </>
  )
}

export default App
