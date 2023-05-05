import React from "react";
import kusto from "../images/kusto.svg"

export default function Main() {
    return (
<main className="main">
        <section className="profile">
          <div className="profile__avatar-edit">
            <img
              src={kusto}
              className="profile__logo"
              alt="Картинка профиля"
            />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="profile__button-edit" type="button"></button>
            <p className="profile__description">Исследователь океана</p>
          </div>

          <button className="profile__button-add" type="button"></button>
        </section>

        <section className="elements"></section>
      </main>
    )
}