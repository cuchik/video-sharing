import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import cn from 'classnames';
import { Container } from 'components';
import AuthForm from './components/AuthForm';
import Profile from './components/Profile';
import { useActions, useIndexData } from './selectorData';
import classes from './styles.module.scss';

const MainLayout = (props) => {
  const { loginData, loginLoading, shareVideoLoading } = useIndexData();
  const currentEmail = loginData?.email || '';
  const loggedIn = !!loginData.token;
  const { login, logout, shareVideo } = useActions();
  const {
    component: Component,
    match,
    history,
    isFullWidth,
    noPadding,
    isWhite,
    ...otherProps
  } = props;

  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <div className={classes.pageHeader}>
          <HomeOutlined className={classes.homeIcon} />
          <span>Funny Movies</span>
          {loggedIn ? (
            <Profile
              loginData={loginData}
              logout={logout}
              onSubmit={(values, cb) => {
                shareVideo(
                  {
                    ...values,
                    email: currentEmail,
                  },
                  (res) => {
                    if (res && cb) cb();
                  }
                );
              }}
              loading={shareVideoLoading}
            />
          ) : (
            <AuthForm
              onSubmit={(values) => {
                login(values, (res) => {
                  console.log(res);
                });
              }}
              loading={loginLoading}
            />
          )}
        </div>
        <div className={cn(classes.mainContentWrapper, {})}>
          <Component
            {...{
              ...otherProps,
              match,
            }}
            history={history}
          />
        </div>
        <footer>Copyright © 2021 Luan Nguyen</footer>
      </Container>
    </div>
  );
};

export default MainLayout;
