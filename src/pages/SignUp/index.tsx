import React from 'react';

import AuthForm from '../../components/AuthForm';

const SignUp = () => (
  <AuthForm
    header="Sign up to access platform"
    actionText="Sign up"
    redirectText="Sign In"
    redirectRoute="/"
    onSubmit={() => {}}
  />
);

export default SignUp;
