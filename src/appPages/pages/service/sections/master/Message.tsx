import scss from "./Home.module.scss";

interface MessageProps {
  setText5: (value: string) => void;
  setText6: (value: string) => void;
  setText7: (value: string) => void;
}

const Message: React.FC<MessageProps> = ({ setText5, setText6, setText7 }) => {
  return (
    <div id={scss.Home}>
      <div className="container">
        <div className={scss.message}>
          <h1 className={scss.title}>Введите ваши данные</h1>
          <div className={scss.message_form}>
            <div className={scss.inputs}>
              <h1>Имя *</h1>
              <input
                onChange={(e) => setText5(e.target.value)}
                type="text"
                placeholder="name"
              />
            </div>

            <div className={scss.inputs}>
              <h1>Email *</h1>
              <input
                type="email"
                onChange={(e) => setText6(e.target.value)}
                placeholder="email"
              />
            </div>

            <div className={scss.inputs}>
              <h1>Телефон *</h1>
              <input
                onChange={(e) => setText7(e.target.value)}
                type="number"
                placeholder="phone"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
