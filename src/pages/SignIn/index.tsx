import React, { useContext } from 'react';

import AuthForm from '../../components/AuthForm';
import Context from '../../hooks/context';

const SignIn = () => {
  const { authStore } = useContext(Context);

  return (
    <AuthForm
      header="Sign in to enter the home page"
      actionText="Sign in"
      redirectText="Sign Up"
      redirectRoute="/signup"
      onSubmit={authStore ? authStore.handleSignIn : () => {}}
    />
  );
};

export default SignIn;
