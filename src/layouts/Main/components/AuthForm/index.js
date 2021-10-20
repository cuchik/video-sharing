import React from 'react';
import cn from 'classnames';
import { Form, Input, Button } from 'antd';
import classes from './styles.module.scss';

const AuthForm = ({ className, onSubmit, loading }) => {
  return (
    <div className={cn(classes.wrapper, className)}>
      <Form
        name="login/register"
        initialValues={{ email: '', password: '' }}
        onFinish={onSubmit}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          rules={[{ required: true, type: 'email', message: '' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '' }]}>
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Login/Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AuthForm;
