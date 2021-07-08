import {
  ArrowLeftOutlined,
  GithubOutlined,
  GlobalOutlined,
  MenuOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import { Avatar, Badge, Button, Col, Drawer, Layout, Menu, Row } from 'antd';
import {
  imagePath,
  useCurrentUser,
  usePrsdigg,
  useUserAgent,
} from 'apps/shared';
import { useSwitchLocaleMutation } from 'graphqlTypes';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import { OPEN_SOURCE_URL } from './shared';

export default function Menus() {
  const history = useHistory();
  const { currentUser } = useCurrentUser();
  const { appName, logoFile } = usePrsdigg();
  const { mixinEnv, isMobile } = useUserAgent();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { t, i18n } = useTranslation();
  const [switchLocale] = useSwitchLocaleMutation();

  useEffect(() => {
    if (!currentUser) {
      return;
    }
    if (currentUser.locale !== i18n.language) {
      switchLocale({ variables: { input: { locale: i18n.language } } });
    }
    i18n.on('languageChanged', (lng: string) => {
      switchLocale({ variables: { input: { locale: lng } } });
    });
  }, []);
  const MenuConent = (props: { mode: 'horizontal' | 'vertical' }) => (
    <Row
      justify='center'
      style={
        props.mode === 'horizontal'
          ? { flexWrap: 'nowrap' }
          : { flexDirection: 'column', textAlign: 'center' }
      }
    >
      <Col>
        {currentUser && props.mode === 'vertical' ? (
          <div style={{ margin: 15 }}>
            <a href='/dashboard'>
              <Avatar size='large' src={currentUser.avatar}>
                {currentUser.name[0]}
              </Avatar>
            </a>
          </div>
        ) : (
          <div style={{ margin: '0 15px' }}>
            <Link to='/' replace>
              <Avatar size='large' src={imagePath(logoFile)} />
            </Link>
          </div>
        )}
      </Col>
      <Col flex={1}>
        <Menu theme='light' mode={props.mode} selectable={false}>
          <Menu.Item key='read' onClick={() => setDrawerVisible(false)}>
            <Link to='/' replace>
              {t('read')}
            </Link>
          </Menu.Item>
          <Menu.Item key='write' onClick={() => setDrawerVisible(false)}>
            {currentUser ? (
              <a href='/dashboard/articles/new' target='_blank'>
                {t('write')}
              </a>
            ) : (
              <a href={`/login?return_to=${encodeURIComponent(location.href)}`}>
                {t('write')}
              </a>
            )}
          </Menu.Item>
          <Menu.Item key='search' onClick={() => setDrawerVisible(false)}>
            <Link to='/search' replace>
              {t('search')}
            </Link>
          </Menu.Item>
          <Menu.Item key='rules' onClick={() => setDrawerVisible(false)}>
            <Link to='/rules' replace>
              {t('rules')}
            </Link>
          </Menu.Item>
          <Menu.Item key='fair' onClick={() => setDrawerVisible(false)}>
            <Link to='/fair' replace>
              {t('fair')}
            </Link>
          </Menu.Item>
          <Menu.Item key='open_source' onClick={() => setDrawerVisible(false)}>
            <a href={OPEN_SOURCE_URL} target='_blank'>
              <GithubOutlined className='mr-2' />
              {t('open_source')}
            </a>
          </Menu.Item>
        </Menu>
      </Col>
      {i18n.languages.length > 1 && (
        <Col>
          <Menu theme='light' mode={props.mode} selectable={false}>
            <Menu.SubMenu
              key='global'
              title={
                props.mode === 'horizontal' ? (
                  <GlobalOutlined />
                ) : i18n.language.includes('en') ? (
                  'Language'
                ) : i18n.language.includes('ja') ? (
                  '言語'
                ) : (
                  '语言'
                )
              }
            >
              {i18n.languages.map((lng) => {
                if (lng.includes('CN')) {
                  return (
                    <Menu.Item key={lng}>
                      <a onClick={() => i18n.changeLanguage('zh-CN')}>中文</a>
                    </Menu.Item>
                  );
                } else if (lng.includes('en')) {
                  return (
                    <Menu.Item key={lng}>
                      <a onClick={() => i18n.changeLanguage('en')}>EN</a>
                    </Menu.Item>
                  );
                } else if (lng.includes('ja')) {
                  return (
                    <Menu.Item key={lng}>
                      <a onClick={() => i18n.changeLanguage('ja')}>日本語</a>
                    </Menu.Item>
                  );
                }
              })}
            </Menu.SubMenu>
          </Menu>
        </Col>
      )}
      {currentUser ? (
        <Col>
          <Menu mode={props.mode} selectable={false}>
            <Menu.Item
              key='notifications'
              onClick={() => setDrawerVisible(false)}
            >
              <Badge dot={currentUser.unreadNotificationsCount > 0}>
                <a href='/dashboard/notifications'>
                  {props.mode === 'horizontal' ? (
                    <NotificationOutlined />
                  ) : (
                    t('notifications_manage')
                  )}
                </a>
              </Badge>
            </Menu.Item>
            <Menu.Item key='dashboard' onClick={() => setDrawerVisible(false)}>
              <a href='/dashboard' target='_blank'>
                {t('dashboard')}
              </a>
            </Menu.Item>
            <Menu.Item key='logout' onClick={() => setDrawerVisible(false)}>
              <a href='/logout'>{t('logout')}</a>
            </Menu.Item>
          </Menu>
        </Col>
      ) : (
        <Col>
          <Button type='link' href='/login'>
            {t('login')}
          </Button>
        </Col>
      )}
    </Row>
  );
  return (
    <React.Fragment>
      {isMobile.phone ? (
        <>
          <Drawer
            bodyStyle={{ padding: 0 }}
            visible={drawerVisible}
            closable={false}
            onClose={() => setDrawerVisible(false)}
            placement='right'
          >
            <MenuConent mode='vertical' />
          </Drawer>
          <div className='sticky top-0 z-50 flex items-center justify-between px-2 py-1 bg-white shadow-sm'>
            <div
              className='flex items-center'
              onClick={() => history.replace('/')}
            >
              <Avatar size='large' src={imagePath(logoFile)} />
              <span className='ml-2 text-lg font-semibold'>{appName}</span>
            </div>
            <div className='flex items-center'>
              <Button
                className='text-gray-500'
                type='link'
                size='large'
                onClick={() => history.goBack()}
                icon={<ArrowLeftOutlined />}
              />
              <Button
                className={`text-gray-500 ${mixinEnv && 'mr-24'}`}
                type='link'
                size='large'
                onClick={() => setDrawerVisible(true)}
                icon={<MenuOutlined />}
              />
            </div>
          </div>
        </>
      ) : (
        <Layout.Header
          style={{
            WebkitBoxShadow: '0 2px 8px #f0f1f2',
            background: '#fff',
            boxShadow: '0 2px 8px #f0f1f2',
            padding: 0,
            zIndex: 10,
          }}
        >
          <MenuConent mode='horizontal' />
        </Layout.Header>
      )}
    </React.Fragment>
  );
}
