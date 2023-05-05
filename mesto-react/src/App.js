import logo from "./images/logo.svg"
import kusto from "./images/kusto.svg"

function App() {
  return (
    <div className="root">
    <div className="page">
      <header className="header">
        <img
          src={logo}
          alt="логотип Место"
          className="header__logo"
        />
      </header>

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
      <footer className="footer">
        <p className="footer__copyright">&copy; 2023 Mesto Russia</p>
      </footer>
    </div>

    <div className="popup" id="popup-edit-profile">
      <div className="popup__container">
        <button
          className="popup__button popup__button_act_exit"
          type="button"
          value="close"
        >
          Закрыть
        </button>
        <form
          method="post"
          name="form-popup-profile"
          className="form-popup-profile form-popup"
          noValidate
        >
          <h2 className="popup__title">Редактировать профиль</h2>
          <input
            name="name"
            className="popup__input popup__input_type_name"
            id="input-name"
            type="text"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span id="input-name-error" className="popup__error"></span>
          <input
            name="description"
            id="input-job"
            className="popup__input popup__input_type_job"
            type="text"
            placeholder="Описание"
            minLength="2"
            maxLength="200"
            required
          />
          <span id="input-job-error" className="popup__error"></span>
          <button
            className="popup__button popup__button_act_submit"
            type="submit"
            value="save"
          >
            Сохранить
          </button>
        </form>
      </div>
    </div>

    <div className="popup" id="popup-add-photo">
      <div className="popup__container">
        <button
          className="popup__button popup__button_act_exit"
          type="button"
          value="close"
        >
          Закрыть
        </button>
        <form
          method="post"
          name="form-popup-photo"
          className="form-popup-photo form-popup"
          noValidate
        >
          <h2 className="popup__title">Новое место</h2>
          <input
            name="title"
            id="input-title"
            className="popup__input popup__input_type_title"
            type="text"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span id="input-title-error" className="popup__error"></span>
          <input
            name="link"
            id="input-link"
            className="popup__input popup__input_type_link"
            type="url"
            placeholder="Ссылка на картинку"
            required
          />
          <span id="input-link-error" className="popup__error"></span>
          <button
            className="popup__button popup__button_act_submit"
            id="button-add-photo"
            type="submit"
            value="save"
          >
            Создать
          </button>
        </form>
      </div>
    </div>

    <div className="popup" id="popup-show-photo">
      <figure className="popup__background">
        <button
          className="popup__button popup__button_act_exit"
          type="button"
          value="close"
        >
          Закрыть
        </button>
        <img className="popup__photo" src="#" alt="" />
        <figcaption className="popup__caption"></figcaption>
      </figure>
    </div>

    // Popup редактирования аватара
    <div className="popup popup_type_avatar">
      <div className="popup__container">
        <button
          aria-label="сlose"
          className="popup__button popup__button_act_exit"
          type="button"
        ></button>
        <h2 className="popup__title">Обновить аватар</h2>
        <form
          className="popup__form popup__form_type_avatar form-popup"
          name="form-avatar"
          noValidate
        >
          <input
            id="input-avatar"
            type="url"
            name="avatar"
            className="popup__input popup__input_type_link"
            placeholder="Ссылка на аватар"
            required
          />
          <span id="input-avatar-error" className="popup__error"></span>
          <button className="popup__button popup__button_act_submit" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>

    //Popup подтверждения удаления
    <div className="popup popup_type_delete">
      <div className="popup__container">
        <h2 className="popup__title">Вы уверены?</h2>
        <button className="popup__button popup__button_act_submit" type="submit">
          Да
        </button>
        <button
          aria-label="сlose"
          className="popup__button popup__button_act_exit"
          type="button"
        ></button>
      </div>
    </div>

    //Шаблон карточки
    <template id="card">
      <div className="card">
        <button type="button" className="card__delete"></button>
        <button type="button" className="card__picture"></button>
        <div className="card__place-down">
          <h2 className="card__title"></h2>
          <div className="card__like-container">
            <button type="button" className="card__like"></button>
            <span className="card__like_count card__span"></span>
          </div>
        </div>
      </div>
    </template>
  </div>
  );
}

export default App;
