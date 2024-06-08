import { useState } from "react"
import NewPasswordForm from '@/components/auth/NewPasswordForm';
import NewPasswordToken from "@/components/auth/NewPasswordToken";
import { ConfirmToken } from "@/types/index";


const NewPassword = () => {
  
  const [token, setToken] = useState<ConfirmToken['token']>('')

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isValidToken, setIsValidToken] = useState(false)
  return (
    <>
        <h1 className="text-5xl font-black text-white">Reestablecer Password</h1>
        <p className="text-2xl font-light text-white mt-5">
            Ingresa el código que restibiste {''}
            <span className=" text-fuchsia-500 font-bold">por email</span>
        </p>

        { !isValidToken ? 
          <NewPasswordToken token={token} setToken={setToken} setIsValidToken={setIsValidToken}  /> :
          <NewPasswordForm token={token} />
        }
    
    </>
  )
}

export default NewPassword
