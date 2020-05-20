import React from 'react';
import AuthForm from '../../components/AuthForm';

const SignIn = () => (
  <AuthForm
    header="Sign in to enter the home page"
    actionText="Sign in"
    redirectText="Sign Up"
    redirectRoute="/signup"
    onChange={() => {}}
    onSubmit={() => {}}
  />
);

export default SignIn;
