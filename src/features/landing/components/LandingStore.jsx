import {
  Chip,
  Card,
  CardMedia,
  CardContent,
  Button,
  CardActions,
  Grid,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { clsx } from 'clsx';
import print from '@assets/Images/landing/store-print.webp';
import maps from '@assets/Images/landing/store-maps.webp';
import cover from '@assets/Images/landing/store-cover.webp';

const useStyles = makeStyles(theme => {
  return {
    wrapper: {
      padding: theme.spacing(9),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(9, 2),
      },
    },
    title: {
      fontFamily: 'Inter',
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: '48px',
      letterSpacing: '-0.019em',
      textAlign: 'left',
      color: '#FFFFFFDE',
      margin: theme.spacing(2, 0),

      [theme.breakpoints.down('md')]: {
        fontSize: '1.25rem',
        lineHeight: '30px',
        letterSpacing: '-0.019em',
      },
    },
    content: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: theme.spacing(3),
      paddingTop: theme.spacing(3),
    },
    card: {
      width: 282,
      height: 282,
      position: 'relative',
      '&$first': {
        backgroundColor: '#B1C5FF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: '#121316',
        '& li': {
          lineHeight: '24px',
        },
      },
      '&:not($first) $cardContent': {
        position: 'absolute',
        top: '50%',
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        background:
          'linear-gradient(0deg, #232426 0%, rgba(35, 36, 38, 0) 100%)',
      },
    },
    first: {},
    cardTitle: {
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: '25px',
      letterSpacing: '-0.019em',
      margin: 0,
    },
    cardContent: {
      padding: theme.spacing(3),
    },
    cardActions: {
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(0, 3, 3, 3),
    },
    instagramButton: {
      backgroundColor: '#121316',
      color: '#B1C5FF',
      '&:hover': {
        backgroundColor: '#121316',
      },
    },
  };
});

export const LandingStore = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <h5 className={classes.title}>
        Наш магазин <Chip color="info" label="В розробці" />
      </h5>
      <Grid container spacing={3}>
        <Grid item xs={12} md="auto" display="flex" justifyContent="center">
          <Card classes={{ root: clsx(classes.card, classes.first) }}>
            <CardContent classes={{ root: classes.cardContent }}>
              <h5 className={classes.cardTitle}>
                В нашому Instagram Ви можете знайти:
              </h5>
              <ul>
                <li>мініатюри;</li>
                <li>книги карт;</li>
                <li>ширми майстрів;</li>
              </ul>
            </CardContent>
            <CardActions classes={{ root: classes.cardActions }}>
              <Button
                fullWidth
                href="https://www.instagram.com/roleplayer_workshop/"
                target="_blank"
                classes={{ root: classes.instagramButton }}
              >
                Перейти в Instagram
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md="auto" display="flex" justifyContent="center">
          <Card classes={{ root: classes.card }}>
            <CardMedia
              component="img"
              image={print}
              alt="Друк Мініатюр"
              sx={{ width: 282, height: 282 }}
            ></CardMedia>
            <CardContent classes={{ root: classes.cardContent }}>
              <h5 className={classes.cardTitle}>Друк Мініатюр</h5>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md="auto" display="flex" justifyContent="center">
          <Card classes={{ root: classes.card }}>
            <CardMedia
              component="img"
              image={maps}
              alt="Книги Карт"
              sx={{ width: 282, height: 282 }}
            ></CardMedia>
            <CardContent classes={{ root: classes.cardContent }}>
              <h5 className={classes.cardTitle}>Книги Карт</h5>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md="auto" display="flex" justifyContent="center">
          <Card classes={{ root: classes.card }}>
            <CardMedia
              component="img"
              image={cover}
              alt="Ширми Майстра"
              sx={{ width: 282, height: 282 }}
            ></CardMedia>
            <CardContent classes={{ root: classes.cardContent }}>
              <h5 className={classes.cardTitle}>Ширми Майстра</h5>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
