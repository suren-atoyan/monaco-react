import React from 'react';

import { useStore } from 'store';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from './SnackbarContent';
import config from 'config';

const Notifications = _ => {
  const { state: { notifications }, actions: { hideNotification } } = useStore();

  return <Snackbar
    open={notifications.isActive}
    onClose={hideNotification}
    {...config.notifications.props}
    {...notifications.opt}
  >
    <SnackbarContent
      message={notifications.message}
      onClose={hideNotification}
      variant={notifications.variant}
    />
  </Snackbar>
};

export default Notifications;
