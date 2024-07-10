
// import {
//   Card as MuiCard,
//   CardMedia,
//   CardContent,
//   Typography,
//   Box,
// } from "@mui/material";
// import { FaRegHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { addItem } from "../../redux/slice/cardSlice"
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// const def_img = "https://mui.com/static/images/cards/paella.jpg";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// const Card = (props) => {
//   const { title, images, price, id } = props.el
//   const dispath = useDispatch();
//   const navigate = useNavigate();

//   const discount = 30; // скидки
//   const discountPrice = price - (price * discount) / 100;
//   const randomRating = Math.floor(Math.random() * 100) + 1;

//   const handleClick = (id) => {
//     navigate(`/detail/${id}`)
//   }

//   const [] = useState(false);

//   return (
//     <MuiCard
//       className="Cart" sx={{ margin: "20px", position: "relative", maxWidth: 270, }}>
//       <Box
//         sx={{
//           position: "absolute",
//           top: 10,
//           right: 10,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           zIndex: 100,
//           width: "calc(95%)",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             color: "white",
//             backgroundColor: "red",
//             borderRadius: "5px",
//             padding: "2px 6px",
//             height: "25px",
//           }}
//         >
//           -30%
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             color: "black",
//             backgroundColor: "white",
//             borderRadius: "50%",
//             width: "40px",
//             height: "40px",
//             marginTop: "8px",
//           }}
//         >
//           <FaRegHeart
//             onClick={() => {
//               dispath(addItem(props.el))
//               toast("item added to cart")
//             }}
//           />
//         </Box>
//       </Box>
//       <CardMedia
//         component="img"
//         height="140"
//         image={images[0]?.length > 0 ? images[0]?.replaceAll('["', '') : def_img}
//         alt={title}
//         sx={{ zIndex: 1 }}
//       />
//       <button
//         className="btnCart"
//         onClick={() => {
//           dispath(addItem(props.el))
//           toast("item added to cart")
//         }}
//         style={{
//           background: "black",
//           color: "white",
//           width: "100%",
//           height: "50px",
//           display: "none",
//           alignItems: "center",
//           justifyContent: "center",
//           position: "absolute",
//           // top: 200,
//           marginTop: "-50px"
//         }}
//       >
//         Add To Cart
//       </button>
//       <CardContent
//         onClick={() => {
//           handleClick(id)
//         }}
//       >
//         <Typography variant="subtitle1" component="div">
//           <Box
//             sx={{
//               fontSize: "16px",
//               color: "black",
//               fontWeight: "500",
//               margin: 0,
//               lineHeight: "1.2em",
//               minHeight: "2.4em",
//               display: "-webkit-box",
//               WebkitLineClamp: 2,
//               WebkitBoxOrient: "vertical",
//               overflow: "hidden",
//               textOverflow: "ellipsis",
//             }}
//           >
//             {title}
//           </Box>

//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               marginTop: "8px",
//             }}
//           >
//             <Box sx={{ color: "red", marginRight: "8px" }}>
//               <b>${discountPrice.toFixed(2)}</b>
//             </Box>
//             <Box sx={{ textDecoration: "line-through", color: "grey" }}>
//               <b>${price}</b>
//             </Box>
//           </Box>
//           <Box sx={{ display: "flex", alignItems: "center", color: "rgba(255, 173, 51, 1)" }}>
//             <FaStar />
//             <FaStar />
//             <FaStar />
//             <FaStar />
//             <FaStarHalfAlt />
//             <b style={{ marginLeft: "20px", color: "grey" }}>({3 * randomRating})</b>
//           </Box>
//         </Typography>
//       </CardContent>
//     </MuiCard>
//   );
// };

// export default Card;


import {
  Card as MuiCard,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { FaRegHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slice/cardSlice";
import { addTolike, removeFromLike } from "../../redux/slice/likeSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const def_img = "https://mui.com/static/images/cards/paella.jpg";
import { useNavigate } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";

const Card = (props) => {
  const { title, images, price, id } = props.el;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const discount = 30; // discount percentage
  const discountPrice = price - (price * discount) / 100;
  const randomRating = Math.floor(Math.random() * 100) + 1;

  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <MuiCard
      className="Cart"
      sx={{ margin: "20px", position: "relative", maxWidth: 270 }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 100,
          width: "calc(95%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            backgroundColor: "red",
            borderRadius: "5px",
            padding: "2px 6px",
            height: "25px",
          }}
        >
          -30%
        </Box>
        {props.el?.isLike ? (
          <Box
            onClick={() => {
              dispatch(removeFromLike(props.el))
              toast.error("item removed from fovorite")
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
              backgroundColor: "white",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              marginTop: "8px",
            }}
          >
            <RiDeleteBinLine />
          </Box>
        ) : (
        <Box
          onClick={() => {
            dispatch(addTolike(props.el))
            toast.success("item added to fovorite")
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
            backgroundColor: "white",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            marginTop: "8px",
          }}
        >
          <FaRegHeart />
        </Box>
        )}

      </Box>
      <CardMedia
        component="img"
        height="140"
        image={images[0]?.length > 0 ? images[0]?.replaceAll('["', '') : def_img}
        alt={`${title} image`}
        sx={{ zIndex: 1 }}
      />
      <button
        className="btnCart"
        onClick={() => {
          dispatch(addItem(props.el));
          toast("Item added to cart");
        }}
        style={{
          background: "black",
          color: "white",
          width: "100%",
          height: "50px",
          display: "none",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          marginTop: "-50px",
        }}
      >
        Add To Cart
      </button>
      <CardContent onClick={() => handleClick(id)}>
        <Typography variant="subtitle1" component="div">
          <Box
            sx={{
              fontSize: "16px",
              color: "black",
              fontWeight: "500",
              margin: 0,
              lineHeight: "1.2em",
              minHeight: "2.4em",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "8px",
            }}
          >
            <Box sx={{ color: "red", marginRight: "8px" }}>
              <b>${discountPrice.toFixed(2)}</b>
            </Box>
            <Box sx={{ textDecoration: "line-through", color: "grey" }}>
              <b>${price}</b>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", color: "rgba(255, 173, 51, 1)" }}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <b style={{ marginLeft: "20px", color: "grey" }}>({3 * randomRating})</b>
          </Box>
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;

