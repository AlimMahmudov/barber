"use client";
import scss from "./Home.module.scss";

interface ShaveInter {
  id: number;
  title: string;
  image: string;
  price: string;
}

interface HomeProps {
  shaveData: ShaveInter[];
  setText2: (text: string) => void;
}

const Service: React.FC<HomeProps> = ({ shaveData, setText2 }) => {
  return (
    <div id={scss.Home}>
      <div className="container">
        <div className={scss.home}>
          <div className={scss.zapros}>
            {shaveData.map((el) => (
              <div
                onClick={() => setText2(el.title)}
                key={el.id}
                className={scss.card}
              >
                <img src={el.image} alt={el.title} />
                <h1>{el.title}</h1>
                <p>{el.price} сом</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
