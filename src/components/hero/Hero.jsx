

import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import storeService from "../../api/service";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa6";
import apple_icon from "../../assets/logo.png";
import Iphone from "../../assets/iphone.png";
import { useDispatch } from "react-redux";
import { fetchProductsByCategory } from "../../redux/slice/productsSlice";

const fakeData = [
  {
    title: "iPhone 14 Series",
    sale: "Up to 10% off Voucher",
    image: "",
  },
  {
    title: "iPhone 15 Series",
    sale: "Up to 15% off Voucher",
    image: "",
  },
  {
    title: "iPhone 15 Pro Series",
    sale: "Up to 20% off Voucher",
    image: "",
  },
  {
    title: "iPhone 15 Pro Max Series",
    sale: "Up to 25% off Voucher",
    image: "",
  },
];

const Hero = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await storeService.getAllCategories();
      console.log(data, "---data---");
      setCategories(data.slice(0, 8));
      dispatch(fetchProductsByCategory({id: data[0]?.id, name: data[0]?.name}));
    }
// dispatch(fetch....());
    getCategories();
  }, [dispatch]);

  const handleListItemClick = (id, name) => {
    dispatch(fetchProductsByCategory({id, name}));
  };

  return (
    <div>
      <Container maxWidth="lg" sx={{ display: "flex" }}>
        <Box
          sx={{
            minWidth: "265px",
            borderRight: "0.5px solid #000000",
          }}
        >
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {categories?.map((el) => (
              <ListItem sx={{ cursor: "pointer" }} key={el.id}>
                <ListItemText
                  onClick={() => handleListItemClick(el.id, el.name)}
                  primary={`${el.name}`}
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            width: "73%",
            height: "344px",
            bgcolor: "black",
            marginLeft: "45px",
            marginTop: "40px",
          }}
        >
          <Slider {...settings}>
            {fakeData.map((promo, index) => (
              <div key={index}>
                <Box
                  sx={{
                    background: `url(${Iphone}) no-repeat right/contain`,
                    height: "344px",
                  }}
                >
                  <Typography
                    component={"p"}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "24px",
                      color: "#fff",
                      fontSize: "16px",
                      marginBottom: "20px",
                      marginLeft: "64px",
                      paddingTop: "58px",
                    }}
                  >
                    <img src={apple_icon} alt="" />
                    {promo.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "48px",
                      width: "294px",
                      marginBottom: "22px",
                      marginLeft: "64px",
                      lineHeight: "60px",
                    }}
                    component={"h1"}
                  >
                    {promo.sale}
                  </Typography>
                  <Typography
                    className="flex items-center"
                    sx={{
                      marginLeft: "64px",
                      borderBottom: "1px solid #FAFAFA",
                      color: "#fff",
                      width: "100px",
                    }}
                    component={"a"}
                  >
                    Shop Now <FaArrowRight className="ml-2" />
                  </Typography>
                </Box>
              </div>
            ))}
          </Slider>
        </Box>
      </Container>
    </div>
  );
};

export default Hero;
