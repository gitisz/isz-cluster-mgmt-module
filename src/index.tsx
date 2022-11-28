import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'isz-app';
import { ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { Dns } from '@mui/icons-material';

const ClusterMgmt = React.lazy(() => import('./ClusterMgmt'));

export function setup(app: PiletApi) {
  app.registerPage('/cluster-mgmt', ClusterMgmt);

  app.showNotification('Hello from Cluster Management!', {
    autoClose: 2000,
  });
  app.registerMenu(() =>
    <ListItemButton
      component={Link}
      to="/cluster-mgmt"
      sx={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
        }}
      >
        <Dns />
      </ListItemIcon>
      <ListItemText primary="Cluster Mgmt" sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  );
  app.registerTile(() => <div>Lets manage that cluster!</div>, {
    initialColumns: 2,
    initialRows: 2,
  });
}
