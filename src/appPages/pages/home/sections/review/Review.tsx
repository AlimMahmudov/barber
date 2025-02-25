"use client";

import React, { useState, useRef, useEffect } from "react";
import scss from "./Review.module.scss";
import img from "@/shared/images/video-img.png";
import Image from "next/image";
import { FaRegPlayCircle } from "react-icons/fa";
import axios from "axios";

interface VideoInter {
  youtube: string;
}

const Review = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const [services, setServices] = useState<VideoInter[]>([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://barber-backend-e5nu.onrender.com/video/get-all"
    );
    console.log(data);
    setServices(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  const openModal = (video: string) => {
    setCurrentVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };
   

  return (
    <div id={scss.Review}>
      <div className="container">
        <div className={scss.review}>
          <h1>ВИДЕО</h1>
          <div
            className={scss.review_scroll}
            data-aos="fade-up"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
          >
            {services.map((el, index) => (
              <div key={index} className={scss.box}>
                <Image src={img} alt="img" />
                <h2 onClick={() => openModal(el.youtube)}>
                  <FaRegPlayCircle />
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      {isModalOpen && currentVideo && (
        <div className={scss.modal}>
          <div data-aos="zoom-in" className={scss.modalContent}>
            <button className={scss.closeButton} onClick={closeModal}>
              ×
            </button>
            <iframe
              className={scss.video}
              width="100%"
              height="100%"
              src={currentVideo}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;
