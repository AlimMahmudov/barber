"use client";
import Image from "next/image";
import scss from "./Map.module.scss";
import logo from "@/shared/images/logo.svg";
import { LuPhoneCall } from "react-icons/lu";

import { FaFacebook, FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

const Map = () => {
	const router = useRouter();

	return (
		<div id={scss.Map}>
			<div className="container">
				<div className={scss.map}>
					<div className={scss.text}>
						<div className={scss.logo}>
							<Image src={logo} alt="" />
							<div className={scss.logo_text}>
								<h1>Bro Barber</h1>
								<p>#1 Барбер в Бишкеке</p>
							</div>
						</div>
						<button onClick={() => router.push("/about")}>О нас</button>
					</div>

					<div className={scss.map_text_mob}>
						<h1>записывайтесь мы всегда вас ждем</h1>
						<p>
							<LuPhoneCall /> +996 708 000 000
						</p>
						<p>
							Кыргызстан, Бишкек, улица Лучшая 35 Ежедневно с 08:00 до 20:00
						</p>
						<div className={scss.icons}>
							<h2>
								<FaInstagram />
							</h2>
							<h2>
								<SlSocialTwitter />
							</h2>
							<h2>
								<FaFacebook />
							</h2>
						</div>
					</div>

					<div className={scss.maps}>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53554.386318567886!2d74.60243555901626!3d42.8786739251832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7001cd01707%3A0xf88a0e755a4b44f0!2z0YPQu9C40YbQsCDQstC10YHQtdC70LDRjyAzNQ!5e0!3m2!1sru!2skg!4v1733516654799!5m2!1sru!2skg"
							loading="lazy"></iframe>

						<div className={scss.map_text}>
							<h1>записывайтесь мы всегда вас ждем</h1>
							<p>
								<LuPhoneCall /> +996 708 000 000
							</p>
							<p>
								Кыргызстан, Бишкек, улица Лучшая 35 Ежедневно с 08:00 до 20:00
							</p>
							<div className={scss.icons}>
								<Link href={"/"}>
									<h2 className={scss.btn}>
										<AiFillInstagram />
									</h2>
								</Link>
								<Link href={"/"}>
									<h2 className={scss.btn}>
										<FaTelegramPlane />
									</h2>
								</Link>
								<Link href={"/"}>
									<h2 className={scss.btn}>
										<RiWhatsappFill />
									</h2>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Map;
