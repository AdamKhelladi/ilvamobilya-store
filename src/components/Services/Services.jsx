import "./Services.css";
import { FiTruck } from "react-icons/fi";
import { CiMoneyCheck1 } from "react-icons/ci";
import { GoGift } from "react-icons/go";
import { LiaTelegramPlane } from "react-icons/lia";

export default function Services() {
  const servicesData = [
    {
      id: 1,
      icon: <FiTruck />,
      title: "FREE SHIPPING",
      description: "Free shipping on all orders across the country.",
    },
    {
      id: 2,
      icon: <CiMoneyCheck1 />,
      title: "CASH ON DELIVERY",
      description: "Pay easily at your doorstep with our cash on delivery option.",
    },
    {
      id: 3,
      icon: <GoGift />,
      title: "GIFT CARDS",
      description: "Buy gift cards and use coupon codes easily.",
    },
    {
      id: 4,
      icon: <LiaTelegramPlane />,
      title: "CONTACT US",
      description: "Keep in touch.",
    },
  ];

  return (
    <div className="services-container" id="services">
      {
        servicesData.map((item) => (
          <div key={item.id} className="service">
            <div className="service-icon">{item.icon}</div>
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}
