import scss from "../header/Header.module.scss";
import BurgerMenu from "./BurgerMenu";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/shared/images/logo.svg";
import { LuPhoneCall } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
// import { PHONE_NUMBER_WHATSAPP } from "@/constants/admin";

const Header = () => {
 

	const [isMobile, setIsMobile] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const links = [
		{
			name: "Главная",
			link: "/",
		},
		{
			name: "О нас",
			link: "/about",
		},
		{
			name:"Мастера",
			link: "/master",
		},
		{
			name: "Записаться",
			link: "/service",
		},
	];

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 1000);
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<header className={scss.header}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.logo}>
						<Link href={"/"}>
							<Image src={logo} alt="img" />
						</Link>
						<div className={scss.nav}>
							{links.map((item, index) => (
								<Link key={index} href={item.link}>
									{item.name}
								</Link>
							))}
						</div>
					</div>

					{isMobile ? (
						<>
							<button className={scss.bur} onClick={() => setIsOpen(!isOpen)}>
								<GiHamburgerMenu />
							</button>
							<BurgerMenu
								links={links}
								isOpen={isOpen}
							/>
						</>
					) : (
						<>
							<div className={scss.buutons}>
								 
								{/* <Link href={`tel:${PHONE_NUMBER_WHATSAPP}`} target={"_blank"}> */}
								<button>
									<LuPhoneCall /> +996 708 000 000
								</button>
								{/* </Link> */}
							</div>
						</>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
