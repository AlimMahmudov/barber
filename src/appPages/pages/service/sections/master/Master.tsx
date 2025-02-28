"use client";
import { useState } from "react";
import scss from "./Home.module.scss";
import Image from "next/image";

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
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div id={scss.Home}>
      <div className="container">
        <div className={scss.home}>
          <h1 className={scss.title}>Выберите специалиста</h1>
          <div className={scss.zapros}>
            {masterData.map((el) => (
              <div
                key={el.id}
                onClick={() => {
                  setText(el.human);
                  setSelectedId(el.id);
                }}
                className={`${scss.card} ${
                  selectedId === el.id ? scss.selected : ""
                }`}
                style={{
                  backgroundColor: selectedId === el.id ? "#ffa600" : "#fff",
                }}
              >
                <div className={scss.image}>
                  <Image
                    quality={100}
                    width={100}
                    height={100}
                    src={el.photo}
                    alt={el.human}
                  />
                </div>
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
