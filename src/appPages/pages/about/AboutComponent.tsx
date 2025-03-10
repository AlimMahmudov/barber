import scss from "./AboutComponent.module.scss";

const AboutComponent = () => {
	return (
		<div className={scss.AboutComponent}>
			<div className="container">
				<div className={scss.content}>
					<h2>О нас</h2>
					<p>
						Добро пожаловать в Наш Барбершоп – место, где стиль сочетается с
						профессионализмом! Наша команда мастеров помогает мужчинам выглядеть
						безупречно, создавая стрижки и образы, соответствующие их
						индивидуальности.
					</p>

					<h3>Наша история</h3>
					<p>
						Все началось с небольшой мечты – создать пространство, где каждый
						мужчина может не просто постричься, а почувствовать атмосферу
						настоящего барбершопа. Мы открыли двери 5 лет назад, и с тех пор наш
						барбершоп стал местом, куда клиенты возвращаются не только за
						стрижкой, но и за общением, уютом и уверенностью в своем образе.
					</p>
					<p>
						Мы росли вместе с вами, совершенствуя навыки, изучая новые техники и
						создавая место, которое объединяет традиции классического барберинга
						с современными трендами. Сегодня Наш Барбершоп – это не просто
						салон, а целая культура мужского ухода и стиля.
					</p>

					<h3>Почему выбирают нас?</h3>
					<ul className={scss.advantages}>
						<li>
							<strong>Профессиональные барберы</strong> – наши мастера знают все
							о современных тенденциях и классических стрижках.
						</li>
						<li>
							<strong>Атмосфера</strong> – уютное пространство с расслабляющей
							музыкой и дружелюбной атмосферой.
						</li>
						<li>
							<strong>Персональный подход</strong> – мы подбираем стрижки,
							учитывая ваш стиль, форму лица и тип волос.
						</li>
						<li>
							<strong>Качественные материалы</strong> – используем только
							проверенные бренды средств по уходу за волосами и бородой.
						</li>
						<li>
							<strong>Современные техники</strong> – классические и модные
							стрижки, бритье опасной бритвой, уход за бородой.
						</li>
						<li>
							<strong>Барбершоп – это место для своих</strong> – расслабьтесь,
							насладитесь чашкой кофе и доверьтесь профессионалам.
						</li>
					</ul>

					<h3>Наши услуги</h3>
					<ul className={scss.services}>
						<li>Мужские стрижки</li>
						<li>Оформление бороды и усов</li>
						<li>Королевское бритье опасной бритвой</li>
						<li>Камуфляж седины</li>
						<li>Уходовые процедуры</li>
						<li>Детские стрижки</li>
					</ul>

					<h3>Контакты</h3>
					<div className={scss.contact}>
						<h4>
							📍 <strong>Наш адрес:</strong> Мусаджалила 225 <br />
						</h4>
						<h4>
							🕒 <strong>Режим работы:</strong> 10:00 - 20:00
						</h4>
						 
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutComponent;
