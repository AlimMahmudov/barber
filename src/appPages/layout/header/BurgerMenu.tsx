import React, { FC } from "react";
import scss from "../header/BurgerMenu.module.scss";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

interface LinksType {
	name: string;
	link: string;
}

interface BurgerMenuProps {
	links: LinksType[];
	isOpen: boolean;
	setIsOpen: (state: boolean) => void;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ links, isOpen, setIsOpen }) => {
	return (
		<div
			onClick={() => setIsOpen(!isOpen)}
			className={
				isOpen ? `${scss.burger_menu} ${scss.active}` : `${scss.burger_menu}`
			}>
			<div
				onClick={(e) => e.stopPropagation()}
				className={
					isOpen ? `${scss.content} ${scss.active}` : `${scss.content}`
				}>
				<h1 className={scss.icon} onClick={() => setIsOpen(!isOpen)}>
					<GoArrowRight />
				</h1>
				<div className={scss.nav}>
					{links.map((item, index) => (
						<Link
							key={index}
							onClick={() => setIsOpen(!isOpen)}
							href={item.link}
							className={scss.link}>
							{item.name}
						</Link>
					))}
				</div>
				<div className={scss.buutons}>
					<Link href={"/"}>
						<button onClick={() => setIsOpen(!isOpen)} className={scss.btn}>
							<AiFillInstagram />
						</button>
					</Link>
					<Link href={"/"}>
						<button onClick={() => setIsOpen(!isOpen)} className={scss.btn}>
							<FaTelegramPlane />
						</button>
					</Link>
					<Link href={"/"}>
						<button onClick={() => setIsOpen(!isOpen)} className={scss.btn}>
							<RiWhatsappFill />
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BurgerMenu;
