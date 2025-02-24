"use client";
import scss from "./Home.module.scss";

interface WatchInter {
  id: number;
  oclock: string;
}

interface HomeProps {
  watchData: WatchInter[];
  setText3: (text: string) => void;
}

const Time: React.FC<HomeProps> = ({ watchData, setText3 }) => {
  return (
    <div id={scss.Home}>
      <div className="container">
        <div className={scss.home}>
          <div className={scss.zapros}>
            {watchData.map((el) => (
              <div
                onClick={() => setText3(el.oclock)}
                key={el.id}
                className={scss.watch}
              >
                <h1>{el.oclock}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
