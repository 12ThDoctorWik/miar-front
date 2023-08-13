import React from 'react';
import "./GamePage.scss";
import {player, player_active, fire, fire_active} from "../../Assets/Icons/icons.js";

const myGame = {
  photo: "https://i.redd.it/bp3jnfn8hc941.jpg",
  title: "Старе (не) добре підземелля",
  isPrivate: true,
  date: "",
  day: "Saturday",
  details: {
    club: "Майстерня Рольовика",
    master: "NikkiN",
    what: "DND",
    where: "онлайн",
    when: "7 серпня 18:00",
    levels: "5 - 10",
    places: "2 з 5",
    price: "150",
    type: "Приватна",
    max_players: 5,
    difficulty: 3,
    description: `Авантюристи занепокоєні станом Вегепігмів вирішили допомогти їм у розвитку і 
                  самоідентифікації. Одна з реалізованих ідей - відправка деяких Вегепігмів до 
                  особи на ім'я Вордакай. Після завдання, деякі члени фракції не впевнені чи це 
                  була хороша ідея. Тепер вони планують піти до цієї особи і поговорити. 
                  Пригода у відкритій кампанії під назвою Морозна Пустка Арди Якщо ви бажаєте 
                  долучитись до цієї пригоди, пройдіть по посиланню нижче. Там ви можете знайти 
                  опис кампанії, деталі, чат кампанії і форму реєстрації. `,
    tags: ["Frozen Wastelands of Arda", "Майстерня Рольовика", "Online, Roll20"]
  },
  players: [
    {
      name: "John",
      photo:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      username: "@john123",
    },
    {
      name: "Kate",
      photo: "",
      username: "noth_str_",
    },
    {
      name: "Bob",
      photo: "",
      usename: "bobo2bo3",
    },
  ],
};

export default function GamePage({game}) {

  game = myGame;

  return (
    <div className="gamePage">
      <div className="gamePage__container">
        <img src={game.photo} alt="game" className="gamePage__img" />
        <div className="gamePage__info gpInfo">
          <div className="gpInfo__title">{game.title}</div>

          <div className="gpInfo__subTitle"></div>

          <div className="gpInfo__data">
            <div className="gpInfo__data_who gpInfo__data_block">
              <div className="gpInfo__line">
                Майстер:{" "}
                <span className="gpInfo__line_data">{game.details.master}</span>
              </div>
              <div className="gpInfo__line">
                Клуб:{" "}
                <span className="gpInfo__line_data">{game.details.club}</span>
              </div>
              <div className="gpInfo__line">
                Система:{" "}
                <span className="gpInfo__line_data">{game.details.what}</span>
              </div>
            </div>
            <div className="gpInfo__data_where gpInfo__data_block">
              <div className="gpInfo__line">
                Де:{" "}
                <span className="gpInfo__line_data">{game.details.where}</span>
              </div>
              <div className="gpInfo__line">
                Коли:{" "}
                <span className="gpInfo__line_data">{game.details.when}</span>
              </div>
              <div className="gpInfo__line">
                Ціна:{" "}
                <span className="gpInfo__line_data">{game.details.price}</span>
              </div>
            </div>
            <div className="gpInfo__data_places gpInfo__data_block">
              <div className="gpInfo__line">
                Доступні місця:{" "}
                <span className="gpInfo__line_data">
                  {game.details.max_players - game.players.length}
                </span>
              </div>

              <div className="gpInfo__iconGroup">
                {game.players.map((e, index) => {
                  return (
                    <img
                      src={player_active}
                      alt="active"
                      className="gpInfo__icon"
                    />
                  );
                })}
                {[...Array(game.details.max_players - game.players.length)].map(
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
                Складність пригоди:{" "}
                <span className="gpInfo__line_data">
                  {game.details.difficulty}
                </span>
              </div>

              <div className="gpInfo__iconGroup">
                {[...Array(game.details.difficulty)].map((e, index) => {
                  return (
                    <img
                      src={fire_active}
                      alt="active"
                      className="gpInfo__icon"
                    />
                  );
                })}
                {[...Array(5 - game.details.difficulty)].map((e, index) => {
                  return (
                    <img src={fire} alt="active" className="gpInfo__icon" />
                  );
                })}
              </div>
            </div>
            <div className="gpInfo__data_level gpInfo__data_block">
              <div className="gpInfo__line">
                Рівні персонажів:{" "}
              </div>
              <div className="gpInfo__line_data" style={{margin: "0"}}>{game.details.levels + " "} рівні</div>
            </div>
          </div>

          <div className="gpInfo__text">{game.details.description}</div>
          <div className="gpInfo__tags">
          </div>
          <div className="gpInfo__btn">Зареєструватись</div>
        </div>
      </div>
    </div>
  );
}