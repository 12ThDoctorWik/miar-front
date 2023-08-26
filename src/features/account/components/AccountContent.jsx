import { useState, useMemo } from 'react';
import { Card, Tabs, Tab, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { AccountDetails } from './AccountDetails';
import { AccountOwnedGames } from './AccountOwnedGames';
import { AccountPlannedGames } from './AccountPlannedGames';
import { useAuthContext } from '@providers/AuthProvider';

const useStyles = makeStyles(theme => {
  return {
    tabs: {
      borderBottom: '1px solid rgba(255, 255, 255, .12)',
      padding: theme.spacing(0.75, 3, 0, 3),
    },
    tab: {
      padding: theme.spacing(3),
    },
    content: {
      padding: theme.spacing(3),
    },
  };
});

export const AccountContent = () => {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = useState('details');
  const { currentUser } = useAuthContext();

  const tabs = useMemo(
    () => [
      {
        value: 'details',
        label: 'Мій аккаунт',
      },
      {
        value: 'planned',
        label: 'Мої заплановані ігри',
      },
      ...(['ADMIN', 'DM'].includes(currentUser?.Role.toUpperCase())
        ? [
            {
              value: 'owned',
              label: 'Ігри, що я проводжу',
            },
          ]
        : []),
    ],
    [currentUser]
  );

  return (
    <Card>
      <Tabs
        value={currentTab}
        onChange={(_, value) => setCurrentTab(value)}
        aria-label="Account tabs"
        classes={{ root: classes.tabs }}
      >
        {tabs.map(tab => (
          <Tab
            key={tab.value}
            label={tab.label}
            value={tab.value}
            classes={{ root: classes.tab }}
          />
        ))}
      </Tabs>
      <CardContent classes={{ root: classes.content }}>
        {
          {
            details: <AccountDetails />,
            planned: <AccountPlannedGames />,
            owned: <AccountOwnedGames />,
          }[currentTab]
        }
      </CardContent>
    </Card>
  );
};
