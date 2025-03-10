"use client";
import scss from "./About.module.scss";
import img from "@/shared/images/About_img.svg";
import img2 from "@/shared/images/About_img2.svg";
import img3 from "@/shared/images/About_img3.svg";
import img4 from "@/shared/images/About_img4.svg";

import Image from "next/image";

const About = () => {
	const data = [
		{
			image: img,
			text: "Мастера с золотыми руками",
			discription:
				"Мы следим за последними трендами и постоянно повышаем свою квалификацию.",
		},
		{
			image: img2,
			text: "Широкий спектр услуг",

			discription:
				"У нас вы можете не только подстричься, но и оформить бороду, уложить волосы.",
		},
		{
			image: img3,
			text: "Атмосфера релакса",
			discription:
				"Это место, где вы можете отдохнуть от суеты и насладиться процессом преображения.",
		},
		{
			image: img4,
			text: "Гарантия качества",
			discription:
				"Мы уверены в качестве наших услуг и предоставляем гарантию на все выполненные работы.",
		},
	];

	return (
		<div data-aos="fade-up" id={scss.About}>
			<div className="container">
				<div className={scss.about}>
					<div className={scss.text}>
						<h1>О НАС</h1>
						<h2>
            Мы открылись
							<span className={scss.span}>
              в 2020 году
							</span>
							в Бишкеке и уверенно
							<span className={scss.span2}>
              стали лучшими
							</span>
							в этой отрасли.
						</h2>
					</div>
					<div className={scss.block}>
						{data.map((el, index) => (
							<div
								data-aos="fade-up"
								data-aos-delay={index * 200}
								key={index}
								className={scss.box}>
								<div className={scss.images}>
									<Image src={el.image} alt="img" />
								</div>
								<h2>{el.text}</h2>
								<p>{el.discription}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
