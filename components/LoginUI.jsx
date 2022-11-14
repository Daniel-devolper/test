import React from 'react'
import { useUserLogin } from '../hooks'
import { LoginTemplate } from './LoginTemplate'
import { useRouter } from 'next/dist/client/router';
// import { useForm } from '../hooks';
// import { LoginUser } from '../request';
// import Swal from 'sweetalert2';



export const LoginUI = () => {

  //   const [loading, setLoading] = useState(false)
  //   const router=useRouter();

  //   const [formValues, handleInputChange]=useForm({
  //     email: '',
  //     password: ''
  //   })

  //   const {email, password} = formValues;

  //   const handleSubmit=(e)=>{
  //     e.preventDefault();
  //     setLoading(true)
  //     LoginUser(URI, email, password)
  //       .then((data)=>{
  //           console.log("🚀 ~ file: LoginUI.jsx ~ line 26 ~ LoginUser ~ data", data)
  //           if (data.length>0) {

  //               setLoading(false)
  //               Swal.fire({
  //                 icon: 'success',
  //                 title: 'exitoso'
  //               })
  //               sessionStorage.setItem('bearer',data)
  //           }else{
  //               setLoading(false)
  //               Swal.fire({
  //                   icon: 'error',
  //                   title: 'Oops...',
  //                   text: 'Usuario o contraseña incorrectas',
  //                 })
  //           }
  //       })

  // }

  const router = useRouter();

  const {
    methods: {
      handleInputChange,
      handleSubmit
    },
    variables: {
      email,
      loading,
      password
    }
  } = useUserLogin();


  return (
    <>

      {(loading) && <div className="absolute left-[9rem] top-[19rem] z-20 ml-1 bg-gray-400 rounded sm:left-[40rem] sm:top-[20rem] lds-ring "><div></div><div></div><div></div><div></div></div>}
      <LoginTemplate>
        <div className="w-full max-w-sm mx-auto lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Inicia sesión con tu cuenta</h2>
          </div>

          <div className="mt-8">

            <div className="mt-6">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Correo electrónico
                  </label>
                  <div className="mt-1">
                    <input
                      name="email"
                      type="email"
                      placeholder="example@micorreo.com"
                      value={email}
                      onChange={handleInputChange}
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
                      placeholder="*****"
                      value={password}
                      onChange={handleInputChange}
                      onKeyUp={(e) => {
                        var keyCode = (e.keyCode ? e.keyCode : e.which)
                        if (keyCode == '13') {
                          handleSubmit();
                        }
                      }}
                      className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                {/* <div className="fle"> */}
                {/* <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Forgot your password?
                    </a>
                  </div> */}
                <div
                  onClick={() => {
                    router.push('/registrarse')
                  }}
                  className="text-sm text-right"
                >
                  <p className="font-medium text-indigo-600 cursor-pointer hover:text-indigo-500">
                    Registrarse
                  </p>
                </div>
                {/* </div> */}

                <div>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Iniciar sesión
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
