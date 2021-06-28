import {
  ArrowLeftOutlined,
  AccountBookOutlined,
  BookOutlined,
  DashboardOutlined,
  FileTextOutlined,
  GlobalOutlined,
  LoginOutlined,
  MenuOutlined,
  NotificationOutlined,
  RiseOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Badge, Button, Drawer, Layout, Menu } from 'antd';
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

export default function Menus() {
  const history = useHistory();
  const { appName, logoFile } = usePrsdigg();
  const { mixinEnv, isMobile } = useUserAgent();
  const { t, i18n } = useTranslation();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { currentUser } = useCurrentUser();
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

  const keys = [
    'overview',
    'notifications',
    'settings',
    'articles',
    'subscriptions',
    'revenue',
    'orders',
    'comments',
  ];
  let defaultKey = 'overview';
  keys.forEach((key) => {
    if (location.pathname.match(key)) {
      defaultKey = key;
    }
  });

  const MenuConent = () => (
    <div>
      <div style={{ margin: 15, textAlign: 'center' }}>
        <a href='/'>
          <Avatar size='large' src={imagePath(logoFile)} />
        </a>
      </div>
      <Menu mode='inline' defaultSelectedKeys={[defaultKey]}>
        <Menu.Item key='overview' onClick={() => setDrawerVisible(false)}>
          <Link to='/'>
            <DashboardOutlined />
            <span>{t('overview')}</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='notifications' onClick={() => setDrawerVisible(false)}>
          <Badge dot={currentUser?.unreadNotificationsCount > 0}>
            <Link to='/notifications'>
              <NotificationOutlined />
              <span>{t('notifications_manage')}</span>
            </Link>
          </Badge>
        </Menu.Item>
        <Menu.Item key='settings' onClick={() => setDrawerVisible(false)}>
          <Link to='/settings'>
            <SettingOutlined />
            <span>{t('settings')}</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='articles' onClick={() => setDrawerVisible(false)}>
          <Link to='/articles'>
            <FileTextOutlined />
            <span>{t('articles_manage')}</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='subscriptions' onClick={() => setDrawerVisible(false)}>
          <Link to='/subscriptions'>
            <BookOutlined />
            <span>{t('subscriptions_manage')}</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='revenue' onClick={() => setDrawerVisible(false)}>
          <Link to='/revenue'>
            <RiseOutlined />
            <span>{t('revenue_manage')}</span>
          </Link>
        </Menu.Item>
        <Menu.Item key='orders' onClick={() => setDrawerVisible(false)}>
          <Link to='/orders'>
            <AccountBookOutlined />
            <span>{t('orders_manage')}</span>
          </Link>
        </Menu.Item>
        {
          // <Menu.Item key='comments' onClick={() => setDrawerVisible(false)}>
          //   <Link to='/comments'>
          //     <CommentOutlined />
          //     <span>{t('comments_manage')}</span>
          //   </Link>
          // </Menu.Item>
        }
        {i18n.languages.length > 1 && (
          <Menu.SubMenu
            key='global'
            title={
              i18n.language.includes('en')
                ? 'Language'
                : i18n.language.includes('ja')
                ? '言語'
                : '语言'
            }
            icon={<GlobalOutlined />}
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
        )}
        <Menu.Item key='back'>
          <a href='/'>
            <LoginOutlined />
            <span>{t('back')}</span>
          </a>
        </Menu.Item>
      </Menu>
    </div>
  );
  return (
    <div>
      {isMobile.phone ? (
        <>
          <Drawer
            visible={drawerVisible}
            bodyStyle={{ padding: 0 }}
            closable={false}
            onClose={() => setDrawerVisible(false)}
            placement='right'
          >
            <MenuConent />
          </Drawer>
          <div className='sticky top-0 z-50 flex items-center justify-between px-2 py-1 bg-white shadow-sm'>
            <div
              className='flex items-center'
              onClick={() => history.replace('/')}
            >
              <Avatar size='large' src={imagePath(logoFile)} />
              <span className='ml-2 text-lg font-semibold'>
                {t('dashboard')}
              </span>
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
        <Layout.Sider
          theme='light'
          style={{ height: '100%', position: 'fixed', overflowY: 'scroll' }}
        >
          <MenuConent />
        </Layout.Sider>
      )}
    </div>
  );
}
