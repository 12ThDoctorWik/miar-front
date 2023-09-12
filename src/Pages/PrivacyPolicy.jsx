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
import bg from '@assets/Images/privacy-policy-bg.webp';
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
        paddingLeft: theme.spacing(1.5),
      },
    },
  };
});

const PrivacyPolicy = () => {
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
            Умови використання порталу
          </Typography>
          <CardContent classes={{ root: classes.content }}>
            <Stack spacing={3}>
              <Box className={classes.highlightedSection}>
                <Typography variant="h6" className={classes.sectionTitle}>
                  Дякуємо за використання нашого порталу настільно-рольових
                  ігор!
                </Typography>
                <p className={classes.text}>
                  Нижче наведені умови використання, які регулюють ваш доступ і
                  використання нашого веб-сайту. Зверніть увагу, що ваше
                  використання сайту означає вашу згоду з цими умовами. Якщо ви
                  не погоджуєтесь з умовами, будь ласка, припиніть використання
                  сайту.
                </p>
              </Box>
              <span className={classes.text}>
                Останнє оновлення: Серпень 3, 2023
              </span>
              <Box>
                <Typography variant="h6" className={classes.sectionTitle}>
                  1. Інтелектуальна власність
                </Typography>
                <p className={classes.text}>
                  Весь контент нашого порталу, включаючи текст, зображення,
                  логотипи, графіку, аудіо та відео матеріали, належить нам або
                  нашим ліцензіаторам і захищений авторським правом та іншими
                  законами про інтелектуальну власність. Ви не маєте права без
                  нашої письмової згоди використовувати, копіювати, змінювати,
                  розповсюджувати або передавати будь-який контент з нашого
                  порталу.
                </p>
              </Box>
              <Box>
                <Typography variant="h6" className={classes.sectionTitle}>
                  2. Обліковий запис
                </Typography>
                <p className={classes.text}>
                  Деякі функції нашого порталу можуть вимагати створення
                  облікового запису. Ви зобов'язуєтеся надавати точну, актуальну
                  та повну інформацію при реєстрації, а також підтримувати
                  актуальність цієї інформації. Ви несете повну відповідальність
                  за конфіденційність свого облікового запису та паролю, і ви
                  несете відповідальність за всі дії, які здійснюються через ваш
                  обліковий запис.
                </p>
              </Box>
              <Box>
                <Typography variant="h6" className={classes.sectionTitle}>
                  3. Обмеження використання
                </Typography>
                <p className={classes.text}>
                  Ви зобов'язуєтеся використовувати наш портал лише в межах
                  закону та узгодженої доброї поведінки. Вам заборонено:
                  <ul>
                    <li>
                      Використовувати наш портал для поширення спаму або
                      небажаної реклами.
                    </li>
                    <li>
                      Здійснювати дії, які можуть завдати шкоди, перешкодити або
                      надмірно навантажити наш портал або інфраструктуру.
                    </li>
                    <li>
                      Використовувати автоматизовані скрипти або програми для
                      доступу до нашого порталу або збирання інформації.
                    </li>
                    <li>
                      Порушувати права інших користувачів або сторонніх осіб,
                      включаючи авторські права та права на конфіденційність.
                    </li>
                  </ul>
                </p>
              </Box>
              <Box>
                <Typography variant="h6" className={classes.sectionTitle}>
                  4. Посилання на сторонні ресурси
                </Typography>
                <p className={classes.text}>
                  Наш портал може містити посилання на сторонні веб-сайти або
                  ресурси. Ми не несемо відповідальності за зміст та діяльність
                  цих сторонніх ресурсів, і ваш доступ до них здійснюється на
                  ваш ризик.
                </p>
              </Box>
              <Box>
                <Typography variant="h6" className={classes.sectionTitle}>
                  5. Зміни умов
                </Typography>
                <p className={classes.text}>
                  Ми можемо періодично оновлювати ці умови використання для
                  відображення змін у нашій діяльності або з метою врахування
                  нових законів та регуляцій. Вам рекомендується періодично
                  переглядати ці умови. Якщо ви продовжуєте використовувати наш
                  портал після внесення змін, це означає вашу згоду з оновленими
                  умовами.
                </p>
              </Box>
              <Box>
                <Typography variant="h6" className={classes.sectionTitle}>
                  6. Зміна та припинення надання послуг
                </Typography>
                <p className={classes.text}>
                  Ми залишаємо за собою право в будь-який час змінювати або
                  припинити надання послуг нашого порталу без попереднього
                  повідомлення.
                </p>
              </Box>
              <Box>
                <Typography variant="h6" className={classes.sectionTitle}>
                  7. Відмова від відповідальності
                </Typography>
                <p className={classes.text}>
                  Ми надаємо послуги нашого порталу "як є" без будь-яких
                  гарантій. Ми не несемо відповідальності за будь-які втрати або
                  шкоди, що виникли в результаті вашого використання нашого
                  порталу.
                </p>
              </Box>
              <Box>
                <Typography variant="h6" className={classes.sectionTitle}>
                  8. Зв'язок з нами
                </Typography>
                <p className={classes.text}>
                  Якщо у вас є запитання або зауваження щодо цих умов
                  використання, будь ласка, зв'яжіться з нами за допомогою
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

export default PrivacyPolicy;
