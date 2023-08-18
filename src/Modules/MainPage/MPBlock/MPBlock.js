import { Button } from '@mui/material';
import './MPBlock.scss';

export default function MPBlock() {
  return (
    <div className="mpBlock">
      <div className="mpBlock__title">Master Is Always Right</div>
      <div className="mpBlock__text">
        “Відчиніть важкі двері й крокніть у світ, де немає меж фантазії. Тут,
        серед затаєних таємниць і переповнених небезпеками, ваші персонажі
        почнуть свою епічну подорож.”
      </div>
      <div className="mpBlock__btns">
        <Button size="large" sx={{ borderRadius: 44 }} href="/calendar">
          Календар ігор
        </Button>
        <Button size="large" variant="outlined" sx={{ borderRadius: 44 }}>
          Замовити гру
        </Button>
      </div>
    </div>
  );
}
