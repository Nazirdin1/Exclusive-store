
import React, { useState } from 'react';
import FormExample from './Form';
import LoginExample from './Login';



const SignUp = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [user, setUser] = useState(null);
  return (
    <div>
     
        {!isSuccess && <FormExample setIsSuccess={setIsSuccess} />}
        {isSuccess && <LoginExample setIsSuccess={setIsSuccess} setUser={setUser} />}
    </div>
  )
}

export default SignUp