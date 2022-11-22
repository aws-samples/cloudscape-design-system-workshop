// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import AppLayout, { AppLayoutProps } from '@cloudscape-design/components/app-layout';
import TopNavigation from '@cloudscape-design/components/top-navigation';

import './styles.css';

export interface ShellProps {
  breadcrumbs?: AppLayoutProps['breadcrumbs'];
  contentType?: Extract<AppLayoutProps.ContentType, 'default' | 'table' | 'form'>;
  tools?: AppLayoutProps['tools'];
  children?: AppLayoutProps['content'];
  navigation?: AppLayoutProps['navigation'];
  notifications?: AppLayoutProps['notifications'];
}

export default function Shell({ children, contentType, breadcrumbs, tools, navigation, notifications }: ShellProps) {
  return (
    <>
      <div id="top-nav">
        <TopNavigation
          identity={{
            logo: { src: '/logo.svg', alt: 'Chocolate Factory Logo' },
            title: 'Chocolate Factory',
            href: '/home/index.html',
          }}
          i18nStrings={{
            overflowMenuTriggerText: 'More',
            overflowMenuTitleText: 'All',
          }}
        />
      </div>
      <AppLayout
        contentType={contentType}
        navigation={navigation}
        breadcrumbs={breadcrumbs}
        notifications={notifications}
        stickyNotifications={true}
        tools={tools}
        content={children}
        headerSelector="#top-nav"
        ariaLabels={{
          navigation: 'Navigation drawer',
          navigationClose: 'Close navigation drawer',
          navigationToggle: 'Open navigation drawer',
          notifications: 'Notifications',
          tools: 'Help panel',
          toolsClose: 'Close help panel',
          toolsToggle: 'Open help panel',
        }}
      />
    </>
  );
}
