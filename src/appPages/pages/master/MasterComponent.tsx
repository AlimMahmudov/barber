"use client";

import { useGetMasterQuery } from "@/redux/api/master";
import scss from "./MasterComponents.module.scss";
import Image from "next/image";
import Map from "../home/sections/map/Map";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MasterComponent = () => {
  const { data } = useGetMasterQuery();
  const router = useRouter();

  console.log(data);

  return (
    <div id={scss.AllMaster}>
      <div className="container">
        <div className={scss.allmaster}>
          <h1 className={scss.title}>Все мастера</h1>

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
                  <h3>{el.work}</h3>
                  <h2>
                    <span>Рейтинг: </span> {el.rating}
                  </h2>
                  <h2>
                    <span>Опыт: </span> {el.skills} лет
                  </h2>
                  <p>{el.description}</p>
                  <button onClick={() => router.push("/service")}>
                    Записатся
                  </button>
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
