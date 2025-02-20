"use client";
import { useEffect, useState } from "react";
import scss from "./Services.module.scss";
import axios from "axios";

interface Service {
  title: string;
  type: string;
  time: string;
  price: string;
}

const Services = () => {
  const [selectedType, setSelectedType] = useState<string>("Стрижка");
  const [services, setServices] = useState<Service[]>([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://barber-backend-e5nu.onrender.com/service/get-all"
    );
    console.log(data);
    setServices(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (type: string) => {
    setSelectedType(type);
  };

  const filteredServices = services.filter((el) => el.type === selectedType);

  return (
    <div data-aos="fade-up" id={scss.Services}>
      <div className="container">
        <div className={scss.services}>
          <div className={scss.services_text}>
            <h1>услуги и цены</h1>
            <div className={scss.buttons}>
              {Array.from(new Set(services.map((el) => el.type))).map(
                (type, index) => (
                  <button
                    key={index}
                    onClick={() => handleClick(type)}
                    className={selectedType === type ? scss.active : ""}
                  >
                    {type}
                  </button>
                )
              )}
            </div>
          </div>
          <div className={scss.block}>
            {filteredServices.map((item, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 200}
                className={scss.box}
              >
                <div className={scss.num}>
                  <h1>{item.title}</h1>
                </div>
                <div className={scss.min}>
                  <h1>{item.time} мин</h1>
                  <h1>{item.price} сом</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
