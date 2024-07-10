// import { Box, Button, Container, Typography } from "@mui/material"
// import Card from "../../components/card/Card"
// import { useDispatch, useSelector } from "react-redux"
// import { addItem } from "../../redux/slice/cardSlice"
// import { toast } from "react-toastify"

// const Favorite = (props) => {
//   const { title, images, price, id } = props.el;
//   const {items} = useSelector(state => state.like)
//   const dispatch = useDispatch()
//   if(items.length === 0){
//     return <Typography variant="h4" align="center" sx={{mt: 5}}>No Favorite</Typography>
//   }


//   return (
//     <div>
//       <Container maxWidth="lg">
//         <Box sx={{display: "flex", justifyContent: "space-between"}}>
//           <Typography variant="h5" >Wishlist ({items.length})</Typography>
//           <Button
//           onClick={() => {
//             dispatch(addItem(props.el));
//             toast("Item added to cart");
//           }}
//           variant="container" sx={{ color: "#000000", border: "1px solid #000000" }}>Move All To Bag</Button>
//         </Box>

//         <Box sx={{display: "flex", gap: "20px", flexWrap: "wrap"}}>
//           {items.map(el => <Card key={el.id} el={el}/>)}
//         </Box>
//       </Container>
//     </div>
//   )
// }

// export default Favorite

import { Box, Button, Container, Typography } from "@mui/material";
import Card from "../../components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slice/cardSlice";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const Favorite = () => {
  const { items } = useSelector((state) => state.like);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return (
      <Typography variant="h4" align="center" sx={{ mt: 5 }}>
        No Favorite
      </Typography>
    );
  }

  return (
    <div>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2, mb: 2 }}>
          <Typography variant="h5">Wishlist ({items.length})</Typography>
          <Button
            onClick={() => {
              items.forEach((item) => {
                dispatch(addItem(item));
              });
              toast("All items moved to cart");
            }}
            variant="contained"
            sx={{ color: "#000000", border: "1px solid #000000", background: "#fff" }}
          >
            Move All To Bag
          </Button>
        </Box>

        <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {items.map((el) => (
            <Card key={el.id} el={el} />
          ))}
        </Box>
      </Container>
    </div>
  );
};

Favorite.propTypes = {
  el: PropTypes.shape({
    title: PropTypes.string,
    images: PropTypes.array,
    price: PropTypes.number,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};

export default Favorite;
