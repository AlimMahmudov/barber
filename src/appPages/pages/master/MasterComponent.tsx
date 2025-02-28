"use client";

import { useGetMasterQuery } from "@/redux/api/master";
import scss from "./MasterComponents.module.scss";
import Image from "next/image";

const MasterComponent = () => {
  const { data } = useGetMasterQuery();
  console.log(data);

  return (
    <div id={scss.AllMaster}>
      <div className="container">
        <div className={scss.allmaster}>
          <div className={scss.block}>
            {data?.map((el) => (
              <div key={el.id} className={scss.card}>
                <div className={scss.image}>
                  <Image
                    width={300}
                    height={300}
                    src={el.photo}
                    alt={el.human}
                  />
                </div>
                <div className={scss.text}>
                  <h1>{el.human}</h1>
                  <h2>{el.work}</h2>
                  <h2>
                    <span>Рейтинг: </span> {el.rating}
                  </h2>
                  <h2>
                    <span>Опыт: </span> {el.skills} лет
                  </h2>
                  <p>{el.description}</p>
                  <button>Записатся</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterComponent;
