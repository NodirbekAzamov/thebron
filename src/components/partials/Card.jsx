import { Box, Flex, Image, Text, border, flexbox } from "@chakra-ui/react";
import React from "react";
import star from "../../assets/images/star.png";
import Carousel from "nuka-carousel";

import arrowRight from "../../assets/thebron-icons/Feather Icons/chevron-right.png";
import { Link } from "react-router-dom";
// import img from "../../assets/images/image1.png";
function Card({ img, name, rate, distance, date, price }) {
  const params = {
    wrapAround: true,
    // autoplay: true,
    autoplayInterval: "4000",
    defaultControlsConfig: {
      containerClassName: "containerClassName",
      nextButtonClassName: "nextButtonClassName",
      prevButtonClassName: "prevButtonClassName",
      nextButtonText: "›",
      nextButtonStyle: {
        backgroundColor: "#fff",
        color: "#000",
        width: "35px",
        height: "35px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
        borderRadius: "50%",
        marginRight: "5px",
        paddingRight: "10px",
        paddingBottom: "12px",
        outline: "none",
      },
      prevButtonText: "‹",
      prevButtonStyle: {
        backgroundColor: "#fff",
        color: "#000",
        width: "35px",
        height: "35px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
        borderRadius: "50%",
        marginLeft: "5px",
        paddingRight: "12px",
        paddingBottom: "12px",
        outline: "none",
      },
      pagingDotsClassName: 'pagingDotsClassName',
    },
  };
  return (
    <div>
      <Link to={"single_user-page"}>
        <Flex flexDirection="column" w="270px" gap="10px" color="#000" mb="3rem">

          <Carousel  {...params}  >
            <Image src={img} w="100%" />
            <Image src={img} w="100%" />
            <Image src={img} w="100%" />
            <Image src={img} w="100%" />
            <Image src={img} w="100%" />
          </Carousel>

          <Flex justifyContent="space-between" mt="10px">
            <Text fontSize="20px" fontWeight="700" display="flex">
              {name}
            </Text>
            <Text fontWeight="700" display="flex" gap="8px">
              {rate} <Image src={star} alt="star" width="20px" height="20px" />
            </Text>
          </Flex>
          <Text color="#7B7979">Расстояние: {distance} km от цетра</Text>
          <Text color="#7B7979">{date} марта</Text>
          <Text fontSize="20px" fontWeight="700" display="flex" alignItems="center" gap="8px" color="#343330">
            {price} cум <Text color="#7A7A7A">ночь</Text>
          </Text>
        </Flex>
      </Link>
    </div>
  );
}

export default Card;
