"use client";
import React, { useEffect } from "react";
import { UseFormRegister, UseFormHandleSubmit } from "react-hook-form";
import { BsFillSendCheckFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import scss from "./Home.module.scss";
import Link from "next/link";

interface IFormTelegram {
  name: string;
  master: string;
  service: string;
  time: string;
  day: string;
  email: string;
  phone: string;
}

interface FormSlideProps {
  text: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  register: UseFormRegister<IFormTelegram>;
  handleSubmit: UseFormHandleSubmit<IFormTelegram>;
  onSubmit: (data: IFormTelegram) => void;
}

const FormSlide: React.FC<FormSlideProps> = ({
  text,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  register,
  handleSubmit,
  onSubmit,
}) => {
  useEffect(() => {
    console.log("Выбранная дата:", text4);
    console.log("Выбранная3:", text3);
    console.log("Выбранная2:", text2);
  }, [text4]);

  return (
    <div id={scss.Home}>
      <div className="container">
        <div className={scss.forms}>
          <h1 className={scss.title}>Записаться</h1>
          <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
            <h1>
              <span>дата: </span>
              {text4}
            </h1>
            <h1>
              <span>врем: </span>
              {text3}
            </h1>
            <h1>
              <span>стрижка: </span>
              {text2}
            </h1>
            <h1>
              <span>мастер: </span>
              {text}
            </h1>
            <h1>
              <span>имя: </span>
              {text5}
            </h1>
            <h1>
              <span>email: </span>
              {text6}
            </h1>
            <h1>
              <span>номер: </span>
              {text7}
            </h1>
            <input type="hidden" {...register("day")} />
            <div className={scss.buttons}>
              <button>
                <Link href="/">
                  <MdClose />
                </Link>
              </button>
              <button type="submit">
                <BsFillSendCheckFill />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSlide;
