import React from 'react';
import { LoginTemplate } from './LoginTemplate';
import { useUserRegister } from '../hooks';
// import { RegisterUser } from '../request';
// import Swal from 'sweetalert2';


export const RegisterUI = () => {
  // const [loading, setLoading] = useState(false)

  // const [formValues, handleInputChange] = useForm({
  //   birthDay: '',
  //   email: '',
  //   name: '',
  //   gender: '',
  //   password: '',
  //   firstSurname: '',
  //   secondSurname: ''
  // })

  // const { birthDay, email, name, gender, password, firstSurname, secondSurname } = formValues;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let nameSeparate = name.split(' ')
  //   let data = {
  //     birthDay,
  //     email,
  //     firstName: nameSeparate[0],
  //     firstSurname,
  //     gender,
  //     password,
  //     secondName: nameSeparate[1],
  //     secondSurname
  //   }

  //   setLoading(true)

  //   if (birthDay.trim().length > 2 && email.trim().length > 2 && name.trim().length > 2 && password.trim().length > 2 && firstSurname.trim().length > 2 && secondSurname.trim().length > 2) {

  //     RegisterUser(URI, data)
  //       .then((parshedReadleStream) => {
  //         return parshedReadleStream.text();
  //       })
  //       .then(response => {
  //         console.log('Respon ', response)
  //         let user;
  //         if (response.length !== 2) {
  //           user = JSON.parse(response)
  //         } else {
  //           user = response
  //         }
  //         if (user.exception === "UserAlreadyExistsException") {
  //           Swal.fire({
  //             icon: 'error',
  //             title: 'Oops...',
  //             text: `El email ${email} ya tiene una cuenta asociada`,
  //           })
  //         } else {
  //           if (user.exception === "LengthNotAllowedForPasswordException") {
  //             Swal.fire({
  //               icon: 'error',
  //               title: 'Oops...',
  //               text: `La contrasena debe tener un tamano minimo de 6 caracteres, la suya tiene ${password.length} caracteres`,
  //             })
  //           } else {
  //             Swal.fire({
  //               icon: 'success',
  //               title: 'Registro exitoso'
  //             })
  //           }
  //         }
  //         setLoading(false)
  //       });
  //   } else {
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Oops...',
  //       text: `Todos los campos son obligatorios`,
  //     })
  //     setLoading(false)
  //   }
  // }



  const {
    methods: {
      handleInputChange,
      handleSubmit
    },
    variables: {
      birthDay,
      email,
      firstSurname,
      gender,
      loading,
      name,
      password,
      secondSurname
    }
  } = useUserRegister();

  return (
    <>
      {(loading) && <div className="absolute left-[9rem] top-[19rem] z-20 ml-1 bg-gray-400 rounded sm:left-[40rem] sm:top-[20rem] lds-ring"><div></div><div></div><div></div><div></div></div>}

      <LoginTemplate>
        <div className="w-full max-w-sm mx-auto lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Register your account</h2>
          </div>

          <div className="mt-2">

            <div className="mt-2">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Nombres
                  </label>
                  <div className="mt-1">
                    <input
                      name="name"
                      type="text"
                      placeholder="Juanito socorro"
                      value={name}
                      onChange={handleInputChange}
                      required
                      autoComplete="email"
                      className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Primer apellido
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="firstSurname"
                      placeholder="Sierra"
                      value={firstSurname}
                      onChange={handleInputChange}
                      required
                      className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Segundo apellido
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="secondSurname"
                      placeholder="Sierra"
                      value={secondSurname}
                      onChange={handleInputChange}
                      required
                      className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-1">
                  <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Fecha nacimiento
                    </label>
                    <div className="mt-1">
                      <input
                        type="date"
                        name="birthDay"
                        placeholder="***********"
                        value={null}
                        onChange={handleInputChange}
                        required
                        className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Genero
                    </label>
                    <div className="mt-1">
                      <select
                        value={gender}
                        required
                        onChange={handleInputChange}
                        name="gender"
                        className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option selected>Seleccione</option>
                        <option value="F">F</option>
                        <option value="M">M</option>
                      </select>
                    </div>
                  </div>

                </div>

                <div className="space-y-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Correo
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="email"
                      placeholder="Juanito@exmaple.com"
                      value={email}
                      onChange={handleInputChange}
                      required
                      className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Contraseña
                  </label>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="password"
                      placeholder="***********"
                      value={password}
                      onChange={handleInputChange}
                      required
                      className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    id="btn"
                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </LoginTemplate>
    </>
  )
}
