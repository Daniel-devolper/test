import React, { useState, useEffect } from 'react'
import { useForm } from '../hooks';
import { LoginUser, ProfileUserData } from '../request';
import Swal from 'sweetalert2';


const URI = 'https://java-app-devops.azurewebsites.net:443/user/login';
const URIProfile= 'https://java-app-devops.azurewebsites.net:443/user/myself';

export const useUserLogin = () => {

  const [loading, setLoading] = useState(false)
  const [userInformationProfile, setUserInformationProfile] = useState('')
  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  })

  const { email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    LoginUser(URI, email, password)
      .then((data) => {
        console.log("🚀 ~ file: LoginUI.jsx ~ line 26 ~ LoginUser ~ data", data)
        if (data.length > 0) {
          setLoading(false)
          sessionStorage.setItem('bearer', data)
          ProfileUserData(URIProfile).then((userInfomation)=>{
            setUserInformationProfile(userInfomation.firstName+" "+userInfomation.secondName+" " +userInfomation.firstSurname+" "+userInfomation.secondSurname)
          })
          // Swal.fire({
          //   icon: 'success',
          //   title: `${userInformationProfile}`
          // })
        } else {
          setLoading(false)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o contraseña incorrectas',
          })
        }
      })
  }

  useEffect(() => {
    if(userInformationProfile.length>0){
      Swal.fire({
        icon: 'success',
        title: `Bienvenido sr/sra ${userInformationProfile}`
      })
    }    
  }, [userInformationProfile])
  

  return {
    methods: {
      handleInputChange,
      handleSubmit
    },
    variables: {
      loading,
      email,
      password,
    }
  }
}
