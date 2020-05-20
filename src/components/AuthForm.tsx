import React from 'react';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

type AuthFormType = {
  header: string;
  actionText: string;
  redirectText: string;
  redirectRoute: string;
  onChange: Function;
  onSubmit: Function;
};

const AuthForm = ({ header, actionText, redirectText, redirectRoute, onChange, onSubmit }: AuthFormType) => (
  <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle" container>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Image src="nubinary-logo.png" centered />
      <Form size="large" style={{ marginBottom: 30, marginTop: 30 }}>
        <Segment stacked>
          <Header as="h3" textAlign="center">
            {header}
          </Header>
          <Form.Input fluid icon="user" name="email" iconPosition="left" placeholder="E-mail address" />
          <Form.Input fluid icon="lock" name="password" iconPosition="left" placeholder="Password" type="password" />
          <Button default fluid size="large">
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

export default AuthForm;
