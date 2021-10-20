import React, { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import cn from 'classnames';
import { Form, Input, Button } from 'antd';
import { Modal } from 'components';
import classes from './styles.module.scss';

const Profile = ({ className, loginData, logout, onSubmit, loading }) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const toggleModal = () => {
    setVisible(!visible);
  };

  return (
    <div className={cn(classes.wrapper, className)}>
      <div>Welcome: {loginData?.email}</div>
      <div className={classes.buttons}>
        <Button htmlType="button" type="primary" onClick={toggleModal}>
          Share a movie
        </Button>
        <Button htmlType="button" onClick={logout}>
          Logout
        </Button>
      </div>
      <Modal
        footer={null}
        centered
        maskClosable={false}
        title={<>Share a youtube movie</>}
        visible={visible}
        closeIcon={
          <CloseOutlined
            onClick={(event) => {
              event.preventDefault();
              toggleModal();
            }}
          />
        }
        width={800}
        className={cn(classes.modal)}
      >
        <Form
          name="share-video"
          form={form}
          initialValues={{ video: '', title: '', description: '' }}
          onFinish={(values) => {
            onSubmit(values, () => {
              toggleModal();
              form.resetFields();
            });
          }}
          autoComplete="off"
        >
          <Form.Item name="video" rules={[{ required: true, message: '' }]}>
            <Input placeholder="Video URL" autoFocus />
          </Form.Item>
          <Form.Item name="title">
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item name="description">
            <Input placeholder="Description" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={classes.submitBtn}
              loading={loading}
            >
              Share
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Profile;
