import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import PropTypes from "prop-types";
import image3 from "../../public/images/image3.png";
import image4 from "../../public/images/image4.png";
import image10 from "../../public/images/image10.png";
import image1 from "../../public/images/image1.png";
import image13 from "../../public/images/image13.png";
import image2 from "../../public/images/image2.png";
import image5 from "../../public/images/image5.png";
import image15 from "../../public/images/image15.png";
import image12 from "../../public/images/image12.png";
import image6 from "../../public/images/image6.png";
import image7 from "../../public/images/image7.png";
import image8 from "../../public/images/image8.png";
import image14 from "../../public/images/image14.jpeg";
import image16 from "../../public/images/image16.jpeg";
import classNames from "classnames";
import css from "./service.module.css"

const ServiceCardItem = ({ imageSrc, title }) => {
  const { theme } = useTheme();

  return (
    <div class = {classNames(css.card)}>
      <div >
        <Image
          alt={title}
          src={imageSrc}
        />
      </div>
      <h1>{title}</h1>
    </div>
  );
};

ServiceCardItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const ServiceCard = () => {
  return (
    <div class = {classNames(css.serviceCard)}>
      <ServiceCardItem
        imageSrc={image3}
        title="Ronin 2 with track and trolley"
      />
      <ServiceCardItem
        imageSrc={image4}
        title="Ronin 2 with 28 - 100 Zoom lens setup"
      />
      <ServiceCardItem
        imageSrc={image14}
        title="Ronin 2 with 28 - 100 Zoom lens setup"
      />
      <ServiceCardItem
        imageSrc={image10}
        title="Ronin 2 with 28 - 100 Zoom lens setup"
      />
      <ServiceCardItem
        imageSrc={image1}
        title="Ronin 2 with 28 - 100 Zoom lens setup"
      />
      <ServiceCardItem
        imageSrc={image13}
        title="Ronin 2 with 28 - 100 Zoom lens setup"
      />
      <ServiceCardItem
        imageSrc={image2}
        title="Ronin 2 with 28 - 100 Zoom lens setup"
      />
      <ServiceCardItem
        imageSrc={image5}
        title="Ronin 2 with 28 - 100 Zoom lens setup"
      />
      <ServiceCardItem
        imageSrc={image15}
        title="Ronin 2 with 28 - 100 Zoom lens setup"
      />
      <ServiceCardItem
        imageSrc={image16}
        title="Ronin 2 with 28 - 100 Zoom lens setup"
      />
      <ServiceCardItem
        imageSrc={image12}
        title="Ronin 2 with 28 - 100 Zoom lens setup"
      />
      <ServiceCardItem
        imageSrc={image6}
        title="Ronin 2 with 28 - 100 Zoom lens setup"
      />
      <ServiceCardItem
        imageSrc={image7}
        title="Ronin 2 with 28 - 100 Zoom lens setup"
      />
      <ServiceCardItem
        imageSrc={image8}
        title="Ronin 2 with 28 - 100 Zoom lens setup"
      />
    </div>
  );
};

export default ServiceCard;