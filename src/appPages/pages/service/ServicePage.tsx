"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import Master from "./sections/master/Master";
import Service from "./sections/master/Service";
import Time from "./sections/master/Time";
import MyCustomCalendar from "./sections/master/Calendar";
import Message from "./sections/master/Message";
import FormSlide from "./sections/master/FormSlide";
import scss from "./sections/HomePage.module.scss";

import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import {
  useGetMasterQuery,
  useGetShaveQuery,
  useGetWatchQuery,
} from "@/redux/api/master";

interface IFormTelegram {
  name: string;
  master: string;
  service: string;
  time: string;
  day: string;
  email: string;
  phone: string;
}

const ServicePage = () => {
  const { data: masterData } = useGetMasterQuery();
  const { data: shaveData } = useGetShaveQuery();
  const { data: watchData } = useGetWatchQuery();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");
  const [text7, setText7] = useState("");

  const { register, handleSubmit, reset, setValue } = useForm<IFormTelegram>();

  const TOKEN = process.env.NEXT_PUBLIC_TG_TOKEN;
  const CHAT_ID = process.env.NEXT_PUBLIC_TG_CHAT_ID;

  const messageModel = (data: IFormTelegram) => {
    return `
      Имя: <b>${data.name}</b>
      Мастер: <b>${data.master}</b>
      Услуга: <b>${data.service}</b>
      Время: <b>${data.time}</b>
      Дата: <b>${data.day}</b>
      Email: <b>${data.email}</b>
      Телефон: <b>${data.phone}</b>
    `;
  };

  const onSubmit: SubmitHandler<IFormTelegram> = async (data) => {
    if (Object.values(data).some((value) => !value.trim())) {
      alert("Заполните все поля");
      return;
    }

    try {
      await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: messageModel(data),
      });

      reset();
      setText("");
      setText2("");
      setText3("");
      setText4("");
      setText5("");
      setText6("");
      setText7("");
      setCurrentSlide(0);
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error);
    }
  };

  const handleDelete = () => {
    reset();
    setText("");
    setText2("");
    setText3("");
    setText4("");
    setText5("");
    setText6("");
    setText7("");
    setCurrentSlide(0);
  };

  useEffect(() => {
    setValue("master", text);
    setValue("service", text2);
    setValue("time", text3);
    setValue("day", text4);
    setValue("name", text5);
    setValue("email", text6);
    setValue("phone", text7);
  }, [text, text2, text3, text4, text5, text6, text7, setValue]);

  useEffect(() => {
    console.log("Выбранная дата:", text4);
  }, [text4]);

  const components = [
    <MyCustomCalendar key="calendar" setText4={setText4} />,
    <Time key="time" watchData={watchData ?? []} setText3={setText3} />,
    <Service key="service" shaveData={shaveData ?? []} setText2={setText2} />,
    <Master key="master" masterData={masterData ?? []} setText={setText} />,
    <Message
      key="message"
      setText5={setText5}
      setText6={setText6}
      setText7={setText7}
    />,
    <FormSlide
      key="form"
      text={text}
      text2={text2}
      text3={text3}
      text4={text4}
      text5={text5}
      text6={text6}
      text7={text7}
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      handleDelete={handleDelete}
    />,
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % components.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + components.length) % components.length
    );
  };

  return (
    <div id={scss.Home}>
      <div className="container">
        <div className={scss.home}>
          <div className={scss.blog}>{components[currentSlide]}</div>
          <div className={scss.buttons}>
            <button onClick={prevSlide}>
              <GrFormPreviousLink /> Предыдущий
            </button>
            <button onClick={nextSlide}>
              Следующий <GrFormNextLink />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
