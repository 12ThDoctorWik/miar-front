import React from 'react';
import './GamePage.scss';
import {
  player,
  player_active,
  fire,
  fire_active,
} from '../../Assets/Icons/icons.js';
import { useParams } from 'react-router-dom';
import { TOAST_LEVEL, toastSlice } from '../../Store/Slices/ToastSlice';
import { useDispatch } from 'react-redux';

const myGame = {
  Id: 3,
  Name: 'Test Session',
  Description: 'Dalekwik`s Test session',
  ImageURL: 'string',
  StartTime: '12-08 07:42',
  MaxPlayer: 5,
  MinLevel: 1,
  MaxLevel: 5,
  Visible: 1,
  PricePerPlayer: 150,
  LocationType: 1,
  Location: 'Re:Bro',
  Tags: ['DnD', 'NewBie'],
  Day: 5,
  MasterName: '',
  Difficult: 0,
  CurrentPlayers: 0,
};

export default function GamePage({ game }) {
  const dispatch = useDispatch();

  game = myGame;
  const params = useParams();
  const gameId = params.gameId;

  let image = game.ImageURL;
  if (image == '' || image == 'string') {
    image = 'https://i.redd.it/nwpa93o6r8k31.jpg';
  }

  // console.log(gameId)

  function handleClick() {
    dispatch(
      toastSlice.actions.showMessage(
        'Реєстрація на ігри тимчасово недоступна',
        TOAST_LEVEL.YELLOW
      )
    );
  }

  return (
    <div className="gamePage">
      <div className="gamePage__container">
        <img src={image} alt="game" className="gamePage__img" />
        <div className="gamePage__info gpInfo">
          <div className="gpInfo__title">{game.Name}</div>

          <div className="gpInfo__subTitle"></div>

          <div className="gpInfo__data">
            <div className="gpInfo__data_who gpInfo__data_block">
              <div className="gpInfo__line">
                Майстер:{' '}
                <span className="gpInfo__line_data">{game.MasterName}</span>
              </div>
              <div className="gpInfo__line">
                Клуб: <span className="gpInfo__line_data">Club</span>
              </div>
              <div className="gpInfo__line">
                Система: <span className="gpInfo__line_data">DND</span>
              </div>
            </div>
            <div className="gpInfo__data_where gpInfo__data_block">
              <div className="gpInfo__line">
                Де: <span className="gpInfo__line_data">{game.Location}</span>
              </div>
              <div className="gpInfo__line">
                Коли:{' '}
                <span className="gpInfo__line_data">{game.StartTime}</span>
              </div>
              <div className="gpInfo__line">
                Ціна:{' '}
                <span className="gpInfo__line_data">
                  {game.PricePerPlayer} грн
                </span>
              </div>
            </div>
            <div className="gpInfo__data_places gpInfo__data_block">
              <div className="gpInfo__line">
                Доступні місця:{' '}
                <span className="gpInfo__line_data">
                  {game.MaxPlayer - game.CurrentPlayers}
                </span>
              </div>

              <div className="gpInfo__iconGroup">
                {/* {game.players.map((e, index) => {
                  return (
                    <img
                      src={player_active}
                      alt="active"
                      className="gpInfo__icon"
                    />
                  );
                })} */}
                {[...Array(game.MaxPlayer - game.CurrentPlayers)].map(
                  (e, index) => {
                    return (
                      <img src={player} alt="active" className="gpInfo__icon" />
                    );
                  }
                )}
              </div>
            </div>

            <div className="gpInfo__data_difficulty gpInfo__data_block">
              <div className="gpInfo__line">
                Складність пригоди:{' '}
                <span className="gpInfo__line_data">{game.Difficult}</span>
              </div>

              <div className="gpInfo__iconGroup">
                {[...Array(game.Difficult)].map((e, index) => {
                  return (
                    <img
                      src={fire_active}
                      alt="active"
                      className="gpInfo__icon"
                    />
                  );
                })}
                {[...Array(5 - game.Difficult)].map((e, index) => {
                  return (
                    <img src={fire} alt="active" className="gpInfo__icon" />
                  );
                })}
              </div>
            </div>
            <div className="gpInfo__data_level gpInfo__data_block">
              <div className="gpInfo__line">Рівні персонажів: </div>
              <div className="gpInfo__line_data" style={{ margin: '0' }}>
                {game.MinLevel + ' - ' + game.MaxLevel} рівні
              </div>
            </div>
          </div>

          <div className="gpInfo__text">{game.Description}</div>
          <div className="gpInfo__tags">
            {game.Tags.map(el => {
              return (
                <div className="gpInfo__tag" key={el}>
                  {el}
                </div>
              );
            })}
          </div>
          <div className="gpInfo__btn" onClick={handleClick}>
            Зареєструватись
          </div>
        </div>
      </div>

      {/* {game.players.length > 0 ?   
        <div className="gamePage__players">
          <div className="gamePage__players_title">Зареєстровані гравці</div>
          <div className="gamePage__players_container">
            {
              game.players.map((el)=>{
                return(
                  <div className="gamePage__player player">
                    <img src={el.photo} className='player__photo' alt="player"/>
                    <div className="player__info">
                      <div className="player__name">{el.name}</div>
                      {el.username == "" ? null : 
                        <div className="player__username">{el.username}</div>
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div> : null
      } */}
    </div>
  );
}
