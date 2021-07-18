import { Col, Layout, Row } from 'antd';
import { AppWrapperComponent } from 'apps/shared';
import { i18nCall } from 'apps/shared/locales/i18n';
// https://github.com/apollographql/apollo-client/issues/6381
import 'core-js/features/promise';
import { User } from 'graphqlTypes';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import Routes from './Routes';

export default function App(props: {
  csrfToken: string;
  currentUser?: Partial<User>;
  prsdigg: { appId: string; pageTitle?: string; attachmentEndpoint?: string };
  defaultLocale: 'en' | 'ja' | 'zh-CN';
  availableLocales: [string];
}) {
  i18nCall(props.availableLocales);

  return (
    <AppWrapperComponent {...props}>
      <Router>
        <Layout>
          <HeaderComponent />
          <Layout.Content className='p-4 bg-white'>
            <Row justify='center'>
              <Col flex={1} xs={24} sm={24} md={18} lg={16} xl={14} xxl={12}>
                <Routes />
              </Col>
            </Row>
          </Layout.Content>
        </Layout>
      </Router>
    </AppWrapperComponent>
  );
}
