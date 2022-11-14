import React, { useState, useEffect } from 'react';
import { useForm } from '../hooks';
import { RegisterUser } from '../request';
import Swal from 'sweetalert2';
import { useRouter } from 'next/dist/client/router';

const URI = 'https://java-app-devops.azurewebsites.net:443/user/save-user';

export const useUserRegister = () => {

  const router = useRouter();
  const [loading, setLoading] = useState(false)
  const [backLogin, setBackLogin] = useState(false)

  const [formValues, handleInputChange] = useForm({
    birthDay: '',
    email: '',
    name: '',
    gender: '',
    password: '',
    firstSurname: '',
    secondSurname: ''
  })

  const { birthDay, email, name, gender, password, firstSurname, secondSurname } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    let nameSeparate = name.split(' ')
    let data = {
      birthDay,
      email,
      firstName: nameSeparate[0],
      firstSurname,
      gender,
      password,
      secondName: nameSeparate[1],
      secondSurname
    }

    setLoading(true)

    if (birthDay.trim().length > 2 && email.trim().length > 2 && name.trim().length > 2 && password.trim().length > 2 && firstSurname.trim().length > 2 && secondSurname.trim().length > 2) {

      RegisterUser(URI, data)
        .then((parshedReadleStream) => {
          return parshedReadleStream.text();
        })
        .then(response => {
          console.log('Respon ', response)
          let user;
          if (response.length !== 2) {
            user = JSON.parse(response)
          } else {
            user = response
          }
          if (user.exception === "UserAlreadyExistsException") {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `El email ${email} ya tiene una cuenta asociada`,
            })
          } else {
            if (user.exception === "LengthNotAllowedForPasswordException") {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `La contrasena debe tener un tamano minimo de 6 caracteres, la suya tiene ${password.length} caracteres`,
              })
            } else {
              Swal.fire({
                icon: 'success',
                title: 'Registro exitoso',
                confirmButtonText: 'OK'
              }).then((result) => {
                if (result.isConfirmed) {
                  setBackLogin(true)
                }
              })
            }
          }
          setLoading(false)
        });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Todos los campos son obligatorios`,
      })
      setLoading(false)
    }
  }

  useEffect(() => {
    (backLogin == true) && (router.push('/'))
  }, [backLogin])

  return {
    methods: {
      handleInputChange,
      handleSubmit,
    },
    variables: {
      loading,
      birthDay,
      email,
      gender,
      name,
      password,
      firstSurname,
      secondSurname
    }
  }
}
