
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Box, Button, Container, IconButton, Typography } from "@mui/material";
// import { fetchProductsById } from "../../redux/slice/productsSlice";
// import { FaRegHeart } from "react-icons/fa";
// import { FaMinus, FaPlus } from "react-icons/fa6";
// import { addTolike, removeFromLike } from "../../redux/slice/likeSlice";
// import { toast } from "react-toastify";
// import { RiDeleteBinLine } from "react-icons/ri";
// import { addItem } from "../../redux/slice/cardSlice";

// const Detail = () => {
//     const { id } = useParams();
//     const dispatch = useDispatch();
//     const item = useSelector((state) => state.products.item);
//     const [quantity, setQuantity] = useState(1);
//     const [selectedImageIndex, setSelectedImageIndex] = useState(0);

//     useEffect(() => {
//         dispatch(fetchProductsById(id));
//     }, [dispatch, id]);

//     if (!item || Object.keys(item).length === 0) {
//         return <h3>Loading...</h3>;
//     }

//     const { title, images, price, description } = item;

//     const handleIncrement = () => {
//         setQuantity((prev) => prev + 1);
//     };

//     const handleDecrement = () => {
//         setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
//     };

//     const handleImageClick = (index) => {
//         setSelectedImageIndex(index);
//     };

//     const handleAddToLike = () => {
//         dispatch(addTolike(item));
//         toast.success("Item added to favorite");
//     };

//     const handleRemoveFromLike = () => {
//         dispatch(removeFromLike(item));
//         toast.error("Item removed from favorite");
//     };
//     const handleAddCart = () => {
//         dispatch(addItem(item));
//         toast.success("Item added to cart");
//     };

//     return (
//         <div>
//             <Container sx={{ display: "flex", justifyContent: "space-between" }} maxWidth="lg">
//                 <Box sx={{ display: "flex", gap: "20px" }}>
//                     <Box sx={{ display: 'flex', flexDirection: "column", gap: "30px" }}>
//                         {images.map((imgUrl, index) => (
//                             <img
//                                 key={imgUrl}
//                                 src={imgUrl}
//                                 alt={`Product image ${index + 1}`}
//                                 width={145}
//                                 onClick={() => handleImageClick(index)}
//                                 style={{ cursor: "pointer", border: selectedImageIndex === index ? "2px solid white" : "none" }}
//                             />
//                         ))}
//                     </Box>
//                     <Box>
//                         <img src={images[selectedImageIndex]} alt="Selected product" width={500} />
//                     </Box>
//                 </Box>
//                 <Box sx={{ maxWidth: "370px" }}>
//                     <Typography sx={{ fontSize: "24px", color: "#000000", fontWeight: "600" }} variant="h6" component="p">
//                         {title}
//                     </Typography>
//                     <Typography variant="body1" component="p">${price}</Typography>
//                     <Typography variant="body1" component="p">{description}</Typography>
//                     <hr />
//                     <Typography variant="body1" component="p">
//                         Colors: {['blue', 'red'].map((color) => (
//                             <span key={color} style={{
//                                 display: "inline-block",
//                                 width: "20px",
//                                 height: "20px",
//                                 backgroundColor: color,
//                                 borderRadius: "50%",
//                                 marginLeft: "10px"
//                             }}></span>
//                         ))}
//                     </Typography>
//                     <Box sx={{ display: "flex", gap: "40px" }}>
//                         <Box sx={{ display: "flex", alignItems: "center", maxWidth: "160px", border: "1px solid #000000" }}>
//                             <IconButton onClick={handleDecrement}><FaMinus /></IconButton>
//                             <input type="text" value={quantity} readOnly style={{
//                                 minWidth: "50px", textAlign: "center", borderRight: "1px solid red",
//                                 borderLeft: "1px solid #000000", height: "40px"
//                             }} />
//                             <IconButton onClick={handleIncrement} sx={{ color: "red" }}><FaPlus /></IconButton>
//                         </Box>
//                         <Button 
//                         onClick={handleAddCart}
//                         variant="contained" sx={{ minWidth: "185px", bgcolor: "red", color: "#fff" }}>
//                             Buy Now
//                         </Button>
//                         <IconButton size="small" sx={{
//                             border: "1px solid #000000",
//                             borderRadius: "5px",
//                             ml: "10px",
//                             p: "8px",
//                             color: "red"
//                         }}>                        
//                             {item.isLike ? (
//                                 <Box
//                                     onClick={handleRemoveFromLike}
//                                     sx={{
//                                         display: "flex",
//                                         alignItems: "center",
//                                         justifyContent: "center",
//                                         color: "black",
//                                         backgroundColor: "white",
//                                         borderRadius: "50%",
//                                         width: "40px",
//                                         height: "40px",
//                                         marginTop: "8px",
//                                     }}
//                                 >
//                                     <RiDeleteBinLine />
//                                 </Box>
//                             ) : (
//                                 <Box
//                                     onClick={handleAddToLike}
//                                     sx={{
//                                         display: "flex",
//                                         alignItems: "center",
//                                         justifyContent: "center",
//                                         color: "black",
//                                         backgroundColor: "white",
//                                         borderRadius: "50%",
//                                         width: "40px",
//                                         height: "40px",
//                                         marginTop: "8px",
//                                     }}
//                                 >
//                                     <FaRegHeart />
//                                 </Box>
//                             )}
//                         </IconButton>
//                     </Box>
//                 </Box>
//             </Container>
//         </div>
//     );
// }

// export default Detail;

//-------

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import { fetchProductsById } from "../../redux/slice/productsSlice";
import { FaRegHeart } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { addTolike, removeFromLike } from "../../redux/slice/likeSlice";
import { toast } from "react-toastify";
import { RiDeleteBinLine } from "react-icons/ri";
import { addItem, updateQuantity } from "../../redux/slice/cardSlice";

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const item = useSelector((state) => state.products.item);
    const [quantity, setQuantity] = useState(1);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    useEffect(() => {
        dispatch(fetchProductsById(id));
    }, [dispatch, id]);

    if (!item || Object.keys(item).length === 0) {
        return <h3>Loading...</h3>;
    }

    const { title, images, price, description } = item;

    const handleIncrement = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDecrement = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    const handleAddToLike = () => {
        dispatch(addTolike(item));
        toast.success("Item added to favorite");
    };

    const handleRemoveFromLike = () => {
        dispatch(removeFromLike(item));
        toast.error("Item removed from favorite");
    };

    const handleAddCart = () => {
        dispatch(addItem({ ...item, quantity }));
        toast.success("Item added to cart");
    };

    const handleQuantityChange = (id, quantity) => {
        if (quantity > 0) {
          dispatch(updateQuantity({ id, quantity }));
        }
      };

    return (
        <Container sx={{ display: "flex", justifyContent: "space-between" }} maxWidth="lg">
            <Box sx={{ display: "flex", gap: "20px" }}>
                <Box sx={{ display: 'flex', flexDirection: "column", gap: "30px" }}>
                    {images.map((imgUrl, index) => (
                        <img
                            key={imgUrl}
                            src={imgUrl}
                            alt={`Product image ${index + 1}`}
                            width={145}
                            onClick={() => handleImageClick(index)}
                            style={{ cursor: "pointer", border: selectedImageIndex === index ? "2px solid white" : "none" }}
                        />
                    ))}
                </Box>
                <Box>
                    <img src={images[selectedImageIndex]} alt="Selected product" width={500} />
                </Box>
            </Box>
            <Box sx={{ maxWidth: "370px" }}>
                <Typography sx={{ fontSize: "24px", color: "#000000", fontWeight: "600" }} variant="h6" component="p">
                    {title}
                </Typography>
                <Typography variant="body1" component="p">${price}</Typography>
                <Typography variant="body1" component="p">{description}</Typography>
                <hr />
                <Typography variant="body1" component="p">
                    Colors: {['blue', 'red'].map((color) => (
                        <span key={color} style={{
                            display: "inline-block",
                            width: "20px",
                            height: "20px",
                            backgroundColor: color,
                            borderRadius: "50%",
                            marginLeft: "10px"
                        }}></span>
                    ))}
                </Typography>
                <Box sx={{ display: "flex", gap: "40px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", maxWidth: "160px", border: "1px solid #000000" }}>
                        <IconButton onClick={handleDecrement}><FaMinus /></IconButton>
                        <input type="text" value={quantity} 
                        onChange={(e) => handleQuantityChange(id, parseInt(e.target.value))}
                        readOnly style={{
                            minWidth: "50px", textAlign: "center", borderRight: "1px solid red",
                            borderLeft: "1px solid #000000", height: "40px"
                        }} />
                        <IconButton onClick={handleIncrement} sx={{ color: "red" }}><FaPlus /></IconButton>
                    </Box>
                    <Button onClick={handleAddCart} variant="contained" sx={{ minWidth: "185px", bgcolor: "red", color: "#fff" }}>
                        Buy Now
                    </Button>
                    <IconButton size="small" sx={{
                        border: "1px solid #000000",
                        borderRadius: "5px",
                        ml: "10px",
                        p: "8px",
                        color: "red"
                    }}>
                        {item.isLike ? (
                            <Box
                                onClick={handleRemoveFromLike}
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
                                onClick={handleAddToLike}
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
                    </IconButton>
                </Box>
            </Box>
        </Container>
    );
}

export default Detail;