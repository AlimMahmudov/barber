"use client";
import scss from "./Master.module.scss";
import { FaArrowRight } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { useGetMasterQuery } from "@/redux/api/master";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Master = () => {
  const router = useRouter();
  const { data: masterData } = useGetMasterQuery();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id={scss.Master}>
      <div className="container">
        <div className={scss.master}>
          <div className={scss.title}>
            <h1>Команда профессионалов</h1>
            <Link href={"/master"}>
              <h2>
                <GoArrowRight />
              </h2>
            </Link>
          </div>
          <h2>
            Наша команда – это сплоченный коллектив
            <span>опытных</span> барберов, каждый из которых – настоящий мастер
            своего дела.
          </h2>
          <div className={scss.block}>
            <div data-aos="fade-up" className={scss.review_scroll}>
              {masterData?.map((el) => (
                <div key={el.id} className={scss.box}>
                  <div className={scss.box_text}>
                    <div className={scss.box_h1}>
                      <h1>{el.human}</h1>
                      <p>{el.work}</p>
                    </div>
                    <h2>
                      <FaInstagram />
                    </h2>
                  </div>
                  <img src={el.photo} alt="photo" />
                </div>
              ))}
            </div>
            <div onClick={() => setIsOpen(true)} className={scss.want}>
              <div className={scss.want_box}>
                <h1>Хочешь к нам в команду?</h1>
                <p>
                  Присылай резюме
                  <span>
                    <FaArrowRight />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={scss.modelOkno}>
        {isOpen && (
          <div className={scss.overlay} onClick={() => setIsOpen(false)}>
            <div className={scss.modal} onClick={() => setIsOpen(false)}>
              <div className={scss.block}onClick={(e) => e.stopPropagation()}>
                <button
                  className={scss.closeButton}
                  onClick={() => setIsOpen(false)}
                >
                  <IoMdClose />
                </button>
                <h2>Заполни форму</h2>
                <form className={scss.form}>
                  <input type="text" placeholder="Имя" />
                  <input type="text" placeholder="gmail" />
                  <input type="text" placeholder="номер" />

                  <button>ОТПРАВИТЬ</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Master;
