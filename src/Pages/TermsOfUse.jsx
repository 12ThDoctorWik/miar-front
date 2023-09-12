import {
  Box,
  Container,
  Stack,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Link,
} from '@mui/material';
import bg from '@assets/Images/terms-of-service-bg.webp';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => {
  return {
    title: {
      fontFamily: 'Inter',
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: '30px',
      position: 'absolute',
      top: 144,
      left: theme.spacing(5),
      [theme.breakpoints.down('md')]: {
        left: theme.spacing(2),
        fontSize: '1.2rem',
      },
    },
    content: {
      fontFamily: 'Inter',
      padding: theme.spacing(5),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2),
      },
      '&:last-child': {
        paddingBottom: theme.spacing(5),
      },
    },
    highlightedSection: {
      backgroundColor: '#FFFFFF17',
      borderRadius: 8,
      padding: theme.spacing(3),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2),
      },
    },
    sectionTitle: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: '22px',
      color: '#FFFFFFDE',
    },
    text: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '20px',
      color: '#FFFFFF99',
      '& > ul': {
        margin: 0,
        paddingLeft: theme.spacing(1.5),
        '& > li': {
          padding: theme.spacing(0.25, 0),
        },
      },
    },
  };
});

const TermsOfUse = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Box py={5}>
        <Card sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            image={bg}
            sx={{ height: 214 }}
          ></CardMedia>
          <Typography variant="h1" className={classes.title}>
            Політика конфіденційності
          </Typography>
          <CardContent classes={{ root: classes.content }}>
            <Stack spacing={3}>
              <Box className={classes.highlightedSection}>
                <Typography variant="h6" className={classes.sectionTitle}>
                  Дякуємо, що вибрали наш портал настільно-рольових ігор!
                </Typography>
                <p className={classes.text}>
                  Ми прагнемо забезпечити вам найкращий досвід ігор та
                  гарантуємо захист вашої особистої інформації. Ця політика
                  конфіденційності пояснює, яку інформацію ми збираємо, як ми її
                  використовуємо, як забезпечуємо її безпеку.
                </p>
              </Box>
              <span className={classes.text}>
                Останнє оновлення: Серпень 3, 2023
              </span>
              <Box>
                <Typography variant="h6" className={classes.sectionTitle}>
                  1. Збір інформації
                </Typography>
                <p className={classes.text}>
                  Ми можемо збирати наступну інформацію про вас:
                  <ul>
                    <li>
                      <b>Особисті дані:</b> ім'я, електронна адреса, номер
                      телефону, дата народження та інші контактні дані, якщо ви
                      їх надаєте добровільно для створення облікового запису або
                      зв'язку з нами.
                    </li>
                    <li>
                      <b>Технічна інформація:</b> інформація про ваш пристрій,
                      операційну систему, IP-адресу, браузер та інші технічні
                      характеристики, що допомагають нам вдосконалювати наш
                      сервіс.
                    </li>
                  </ul>
                </p>
              </Box>
              <Box>
                <Typography variant="h6" className={classes.sectionTitle}>
                  2. Використання інформації
                </Typography>
                <p className={classes.text}>
                  Ми використовуємо вашу інформацію для наступних цілей:
                  <ul>
                    <li>
                      Забезпечення доступу до ігор та функцій нашого порталу.
                    </li>
                    <li>
                      Підтримка користувачів та відповідь на ваші запитання.
                    </li>
                    <li>
                      Покращення нашого сервісу та розробка нових функцій.
                    </li>
                    <li>
                      Відправка інформаційних листів та повідомлень про
                      оновлення, які ви підписались отримувати.
                    </li>
                    <li>
                      Аналіз відвідувань та взаємодії з порталом для покращення
                      його ефективності.
                    </li>
                  </ul>
                </p>
              </Box>
              <Box>
                <Typography variant="h6" className={classes.sectionTitle}>
                  3. Розкриття інформації третім особам
                </Typography>
                <p className={classes.text}>
                  Ми не продаватимемо, не обмінюватимемо або не передаватимемо
                  вашу особисту інформацію третім особам без вашої письмової
                  згоди, за винятком випадків, передбачених законом або якщо це
                  необхідно для надання послуг.
                </p>
              </Box>
              <Box>
                <Typography variant="h6" className={classes.sectionTitle}>
                  4. Захист інформації
                </Typography>
                <p className={classes.text}>
                  Ми приймаємо всі необхідні заходи для забезпечення безпеки
                  вашої особистої інформації. Ми використовуємо технічні та
                  організаційні заходи для захисту даних від несанкціонованого
                  доступу, втрати або зміни.
                </p>
              </Box>
              <Box>
                <Typography variant="h6" className={classes.sectionTitle}>
                  5. Посилання на сторонні веб-сайти
                </Typography>
                <p className={classes.text}>
                  Наш портал може містити посилання на сторонні веб-сайти. Ми не
                  несемо відповідальність за збір та використання інформації на
                  цих веб-сайтах. Перед використанням сторонніх веб-сайтів,
                  рекомендуємо ознайомитись з їхніми політиками
                  конфіденційності.
                </p>
              </Box>
              <Box>
                <Typography variant="h6" className={classes.sectionTitle}>
                  6. Зміни до політики конфіденційності
                </Typography>
                <p className={classes.text}>
                  Ми можемо періодично оновлювати цю політику конфіденційності
                  для відображення змін у нашій практиці збору та використання
                  інформації. Якщо внесемо значні зміни, повідомимо вас шляхом
                  розміщення сповіщення на нашому порталі або відправимо
                  повідомлення на вашу електронну адресу.
                </p>
              </Box>
              <Box>
                <Typography variant="h6" className={classes.sectionTitle}>
                  7. Зв'язок з нами
                </Typography>
                <p className={classes.text}>
                  Якщо у вас є запитання або зауваження щодо цієї політики
                  конфіденційності, будь ласка, зв'яжіться з нами за допомогою
                  наступної електронної адреси:{' '}
                  <Link href="mailto:contact_with_us@miar.com">
                    contact_with_us@miar.com
                  </Link>
                </p>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default TermsOfUse;
