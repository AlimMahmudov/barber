"use client";
import { useState } from "react";
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
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div id={scss.Home}>
      <div className="container">
        <div className={scss.home}>
          <h1 className={scss.title}>Выберите время</h1>
          <div className={scss.zapros}>
            {watchData.map((el) => (
              <div
                key={el.id}
                onClick={() => {
                  setText3(el.oclock);
                  setSelectedId(el.id);
                }}
                className={`${scss.watch} ${
                  selectedId === el.id ? scss.selected : ""
                }`}
                style={{
                  backgroundColor: selectedId === el.id ? "#ffa600" : "#fff",
                }}
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
