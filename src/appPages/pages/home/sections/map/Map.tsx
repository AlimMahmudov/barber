"use client";
import Image from "next/image";
import scss from "./Map.module.scss";
import logo from "@/shared/images/logo.svg";
import { LuPhoneCall } from "react-icons/lu";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { useLanguageStore } from "@/shared/stores/Language"; // Импортируем useLanguageStore для использования translate
import { useRouter } from "next/navigation";

const Map = () => {
  const { translate } = useLanguageStore();
  const router = useRouter();

  return (
    <div id={scss.Map}>
      <div className="container">
        <div className={scss.map}>
          <div className={scss.text}>
            <div className={scss.logo}>
              <Image src={logo} alt="" />
              <div className={scss.logo_text}>
                <h1>{translate("Bro Barber", "Bro Barber", "Bro Barber")}</h1>
                <p>
                  {translate(
                    "#1 Барбер в Бишкеке",
                    "#1 Барбер Бишкекте",
                    "#1 Barber in Bishkek"
                  )}
                </p>
              </div>
            </div>
            <button onClick={() => router.push("/record")}>
              {translate("Записаться", "Катталыңыз", "Sign Up")}
            </button>
          </div>

          <div className={scss.map_text_mob}>
            <h1>
              {translate(
                "записывайтесь мы всегда вас ждем",
                "Катталуу үчүн жазылыңыз, биз дайыма сизди күтөбүз",
                "Book your appointment, we are always waiting for you"
              )}
            </h1>
            <p>
              <LuPhoneCall /> +996 708 000 000
            </p>
            <p>
              {translate(
                "Кыргызстан, Бишкек, улица Лучшая 35 Ежедневно с 08:00 до 20:00",
                "Кыргызстан, Бишкек, Лучшая көчөсү 35, күн сайын 08:00дөн 20:00гө чейин",
                "Kyrgyzstan, Bishkek, Luchshaya Street 35, Daily from 08:00 to 20:00"
              )}
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
              loading="lazy"
            ></iframe>

            <div className={scss.map_text}>
              <h1>
                {translate(
                  "записывайтесь мы всегда вас ждем",
                  "Катталуу үчүн жазылыңыз, биз дайыма сизди күтөбүз",
                  "Book your appointment, we are always waiting for you"
                )}
              </h1>
              <p>
                <LuPhoneCall /> +996 708 000 000
              </p>
              <p>
                {translate(
                  "Кыргызстан, Бишкек, улица Лучшая 35 Ежедневно с 08:00 до 20:00",
                  "Кыргызстан, Бишкек, Лучшая көчөсү 35, күн сайын 08:00дөн 20:00гө чейин",
                  "Kyrgyzstan, Bishkek, Luchshaya Street 35, Daily from 08:00 to 20:00"
                )}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
