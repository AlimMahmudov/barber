"use client";

import React, { useState, useRef, useEffect } from "react";
import scss from "./Review.module.scss";
import img from "@/shared/images/video-img.png";
import Image from "next/image";
import { FaRegPlayCircle } from "react-icons/fa";
import axios from "axios";
import { useGetVideoQuery } from "@/redux/api/master";

const Review = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentVideo, setCurrentVideo] = useState<string | null>(null);

	const { data } = useGetVideoQuery();

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
					<div className={scss.scollvideo}>
						{data?.map((el, index) => (
							<div key={index} className={scss.box}>
								<iframe
									width="100%"
									height="100%"
									src={el.youtube}
									frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen></iframe>

								<div className={scss.click} onClick={() => openModal(el.youtube)}>
									<FaRegPlayCircle />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Модальное окно */}
			{isModalOpen && currentVideo && (
				<div className={scss.modal}>
					<div className={scss.modalContent}>
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
							allowFullScreen></iframe>
					</div>
				</div>
			)}
		</div>
	);
};

export default Review;
