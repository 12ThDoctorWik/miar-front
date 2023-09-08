import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { format } from 'date-fns';
import { lock, date, master, location } from '../../Assets/Icons/icons.js';
import './GameCard.scss';

export const GameCard = ({ session }) => {
  return (
    <>
      <div className="gameCard">
        <div
          className="front"
          style={{
            backgroundImage: `url(${
              session.ImageURL || 'https://i.redd.it/nwpa93o6r8k31.jpg'
            })`,
          }}
        >
          <div className="gameCard__marks">
            {session.isPrivate ? (
              <img src={lock} alt="private" className="gameCard__mark" />
            ) : null}
          </div>
          <div className="gameCard__overlay">
            <div className="gameCard__title">{session.Name}</div>
            <div className="gameCard__data">
              <div className="gameCard__line">
                <img src={master} alt="master" />{' '}
                <span>{session.MasterName}</span>
              </div>
              <div className="gameCard__line">
                <img src={date} alt="date" />{' '}
                <span>{format(session.StartTime, 'd MMMM HH:mm')}</span>
              </div>
              <div className="gameCard__line">
                <img src={location} alt="location" />{' '}
                <span>{session.Location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="back">
          <div className="back__info">
            <div className="back__text">
              Клуб: <span className="back__data">{session.ClubName}</span>{' '}
            </div>
            <div className="back__text">
              Майстер: <span className="back__data">{session.MasterName}</span>{' '}
            </div>
            <div className="back__text">
              Що: <span className="back__data">{session.System?.Name}</span>{' '}
            </div>
            <div className="back__text">
              Де: <span className="back__data">{session.Location}</span>{' '}
            </div>
            <div className="back__text">
              Коли:{' '}
              <span className="back__data">
                {format(session.StartTime, 'd MMMM HH:mm')}
              </span>{' '}
            </div>
            <div className="back__text">
              Рівні:{' '}
              <span className="back__data">
                {session.MinLevel} {' - '} {session.MaxLevel}
              </span>{' '}
            </div>
            <div className="back__text">
              Доступні місця:{' '}
              <span className="back__data">
                {session.MaxPlayer - session.CurrentPlayers}
              </span>{' '}
            </div>
            <div className="back__text">
              Ціна:{' '}
              <span className="back__data">{session.PricePerPlayer} грн</span>
            </div>
            <div className="back__text">
              Тип партії:{' '}
              <span className="back__data">
                {session.LocationType ? 'Online' : 'Offline'}
              </span>{' '}
            </div>
          </div>
          <Button component={NavLink} to={`/calendar/${session.Id}`}>
            Детальніше
          </Button>
        </div>
      </div>
    </>
  );
};
