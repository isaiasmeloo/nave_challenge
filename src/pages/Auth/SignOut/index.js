import React, { useEffect } from 'react';

import { useAuth } from '../../../hooks/auth';

const SignOut = () => {
  const { signOut } = useAuth()

  useEffect(() => {
     signOut()

  }, [])

  return null
}

export default SignOut;
