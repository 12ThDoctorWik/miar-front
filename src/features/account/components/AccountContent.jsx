import { useState, useMemo, useEffect } from 'react';
import { Card, Tabs, Tab, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { AccountDetails } from './AccountDetails';
import { AccountOwnedGames } from './AccountOwnedGames';
import { AccountPlannedGames } from './AccountPlannedGames';
import { AccountCharacters } from './AccountCharacters';
import { useAuthContext } from '@providers/AuthProvider';
import { useSearchParams } from 'react-router-dom';

const useStyles = makeStyles(theme => {
  return {
    tabs: {
      borderBottom: '1px solid rgba(255, 255, 255, .12)',
      padding: theme.spacing(0.75, 3, 0, 3),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0),
      },
    },
    tab: {
      padding: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(3, 1),
      },
    },
    content: {
      padding: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
      },
    },
  };
});

export const AccountContent = () => {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = useState('details');
  const [searchParams, setSearchParams] = useSearchParams();
  const { currentUser } = useAuthContext();

  const tabs = useMemo(
    () => [
      {
        value: 'details',
        label: 'Мій аккаунт',
      },
      {
        value: 'characters',
        label: 'Мої персонажі',
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

  useEffect(() => {
    const predefinedTab = searchParams.get('tab');

    if (predefinedTab && tabs.find(({ value }) => value === predefinedTab)) {
      setCurrentTab(predefinedTab);
      setSearchParams({});
    }
  }, [searchParams, setSearchParams, tabs]);

  return (
    <Card>
      <Tabs
        value={currentTab}
        onChange={(_, value) => setCurrentTab(value)}
        aria-label="Account tabs"
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
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
            characters: <AccountCharacters />,
          }[currentTab]
        }
      </CardContent>
    </Card>
  );
};
