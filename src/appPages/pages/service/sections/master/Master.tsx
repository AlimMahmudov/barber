"use client";
import scss from "./Home.module.scss";

interface MasterInter {
  id: number;
  human: string;
  photo: string;
  work: string;
}

interface MasterProps {
  masterData: MasterInter[];
  setText: (text: string) => void;
}

const Master: React.FC<MasterProps> = ({ masterData, setText }) => {
  return (
    <div id={scss.Home}>
      <div className="container">
        <div className={scss.home}>
          <div className={scss.zapros}>
            {masterData.map((el) => (
              <div
                onClick={() => setText(el.human)}
                key={el.id}
                className={scss.card}
              >
                <img src={el.photo} alt={el.human} />
                <h1>{el.human}</h1>
                <p>{el.work}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Master;
