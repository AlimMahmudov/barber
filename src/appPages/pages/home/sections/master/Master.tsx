"use client";
import { useRef } from "react";
import scss from "./Master.module.scss";
import { FaArrowRight } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import barber from "@/shared/images/barber.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { useGetMasterQuery } from "@/redux/api/master";

const Master = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const router = useRouter();
  const { data: masterData } = useGetMasterQuery();

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollRef.current) {
      isDragging.current = true;
      startX.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeft.current = scrollRef.current.scrollLeft;
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX.current;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };

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
            <div
              data-aos="fade-up"
              className={scss.review_scroll}
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
            >
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
                  <img src={el.photo} alt="img" />
                </div>
              ))}
            </div>
            <div
              onClick={() => router.push("/newMaster")}
              className={scss.want}
            >
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
    </div>
  );
};

export default Master;
