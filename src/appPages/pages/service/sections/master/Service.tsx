"use client";
import { useState } from "react";
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
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div id={scss.Home}>
      <div className="container">
        <div className={scss.home}>
          <h1 className={scss.title}>Выберите стрижку</h1>
          <div className={scss.zapros}>
            {shaveData.map((el) => (
              <div
                key={el.id}
                onClick={() => {
                  setText2(el.title);
                  setSelectedId(el.id);
                }}
                className={`${scss.card2} ${
                  selectedId === el.id ? scss.selected : ""
                }`}
                style={{
                  backgroundColor: selectedId === el.id ? "#ffa600" : "#fff",
                }}
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
