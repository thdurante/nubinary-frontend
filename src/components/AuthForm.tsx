import React from 'react';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

type AuthFormType = {
  header: string;
  actionText: string;
  redirectText: string;
  redirectRoute: string;
  onSubmit: Function;
};

const AuthForm = ({ header, actionText, redirectText, redirectRoute, onSubmit }: AuthFormType) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => onSubmit(values),
  });

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle" container>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Image src="nubinary-logo.png" centered />
        <Form size="large" style={{ marginBottom: 30, marginTop: 30 }} onSubmit={formik.handleSubmit}>
          <Segment stacked>
            <Header as="h3" textAlign="center">
              {header}
            </Header>
            <Form.Input
              icon="user"
              name="email"
              iconPosition="left"
              placeholder="E-mail address"
              fluid
              onChange={formik.handleChange}
            />
            <Form.Input
              icon="lock"
              name="password"
              iconPosition="left"
              placeholder="Password"
              type="password"
              fluid
              onChange={formik.handleChange}
            />
            <Button default fluid size="large" type="submit">
              {actionText}
            </Button>
          </Segment>
        </Form>
        <p>
          Go to:&nbsp;&nbsp;
          <Link to={redirectRoute}>{redirectText}</Link>
        </p>
      </Grid.Column>
    </Grid>
  );
};

export default AuthForm;
