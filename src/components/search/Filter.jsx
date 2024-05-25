import { Box, Flex, Text, Button, Image, Input } from "@chakra-ui/react";
import searchIcon from "../../assets/thebron-icons/Feather Icons/search.png";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./style.css"

function Filter() {
  const [search, setSearch] = useState(true);
  const handleSearch = () => {
    setSearch(false);
  };

  return (
    <div>
      <div className='booking_search'>
        <div className='search'>
          <input type="text" placeholder='Поиск направлений' />
          <span className="booking_search-span"><CiSearch /></span>
        </div>
      </div>



      {/* <Flex
        p="12px"
        borderRadius="68px"
        border="1px solid #C2C2C2"
        boxShadow="0px 8px 16px 0px #00000014"
        justifyContent="space-between"
        alignItems="center"
        maxW="800px"
        mx="auto"
        my="4rem"
        color="black"
        cursor="pointer"
      >
        {search ? (
          <Box px="2rem" cursor="pointer" onClick={handleSearch}>
            <Text fontWeight="400" color="#C2C2C2">
              Поиск направлений
            </Text>
          </Box>
        ) : (
          <Input
            type="text"
            ps="20px"
            borderRadius="68px"
            border="1px"
            maxW="700px"
            h="100%"
            _focusVisible="none"
            outline="none"
            color="black"
            fontSize="20px"
            cursor="pointer"
          />
        )}

        <Button
          borderRadius="50%"
          h="64px"
          w="64px"
          bg="#03559E"
          onClick={handleSearch}
        >
          <Image src={searchIcon} />
        </Button>
      </Flex> */}



    </div>
  );
}

export default Filter;
