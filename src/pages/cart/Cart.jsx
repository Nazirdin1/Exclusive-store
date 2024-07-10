

// import { Box, Button, Container, IconButton } from '@mui/material'
// import { useSelector, useDispatch } from 'react-redux'
// import { TiDelete } from "react-icons/ti";
// import { Link } from 'react-router-dom';
// import { removeItem } from '../../redux/slice/cardSlice';

// const Cart = () => {
//   const { items } = useSelector(state => state.card)
//   const total = items?.reduce((prev, next) => prev + next.price * next.quantity, 0) || 0;

//   const dispath = useDispatch();

//   const hadleClick = (id) => {
//     dispath(removeItem({id}))
//   }

//   return (
//     <div>
//       <Container maxWidth="lg" sx={{ pt: "180px" }}>
//         <Box>
//           <Box sx={{ display: "flex", mb: "40px", justifyContent: "space-between", padding: "20px 35px", boxShadow: "0px 1px 5px 0px #000000" }}>
//             <Box sx={{ width: "400px" }}>Product</Box>
//             <Box sx={{ width: "200px" }}>Price</Box>
//             <Box sx={{ width: "200px" }}>Quantity</Box>
//             <Box sx={{ width: "200px" }}>Subtotal</Box>
//           </Box>
//           {items?.map(el => (
//             <Box key={el?.id} sx={{ display: "flex", mb: "24px", alignItems: "center", justifyContent: "space-between", padding: "24px 40px", boxShadow: "0px 1px 13px 0px #000000" }}>
//               <Box sx={{ width: "400px", display: "flex", gap: "20px", position: "relative", alignItems: "center" }}>
//                 <IconButton
//                   sx={{
//                     position: "absolute", top: "-20px", left: "-20px", color: "red", '&:hover': {
//                       backgroundColor: "transparent"
//                     }
//                   }}
//                   onClick={() => dispath(hadleClick(el?.id))}
//                 >
//                   <TiDelete />
//                 </IconButton>
//                 <img src={el?.images[0].replaceAll('["', "")} alt="image" width={"54px"} />
//                 <p>{el?.title}</p>
//               </Box>
//               <Box sx={{ width: "200px" }}>$ {el?.price}</Box>
//               <Box sx={{ width: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
//                 <input style={{ width: "60px" }} type="number" value={el.quantity} />
//               </Box>
//               <Box sx={{ width: "200px" }}>$ 400</Box>
//             </Box>
//           ))}
//           <Box sx={{ display: "flex", justifyContent: "space-between", mb: "80px" }}>
//             <Link to={"/"} variant='outlined' style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "218px", height: "56px", border: "1px solid #000000", }}>
//               Return To Shop</Link>
//             <Button variant='outlined'>Update Cart</Button>
//           </Box>
//         </Box>

//         <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Box>
//             <input type="text" placeholder='coupon code' style={{ border: "1px solid #000000", borderRadius: "4px", padding: "16px 24px", marginRight: "10px" }} />
//             <button style={{
//               width: '211px', height: "56px", padding: "16px, 48px, 16px, 48px", borderRadius: "4px", background: "#DB4444", color: "#fff"
//             }}>Apply Coupon</button>
//           </Box>
//           <Box sx={{ width: "470px", border: "1.5px solid #000000", borderRadius: "4px", padding: "32px 24px" }}>
//             <h3 style={{ fontWeight: 500, fontSize: "20px", marginBottom: "24px" }}>Cart Total</h3>
//             <Box sx={{ display: "flex", justifyContent: "space-between", mb: "16px" }}>
//               <p>Shipping:</p>
//               <p>Free</p>
//             </Box>
//             <hr style={{ marginBottom: "16px" }} />
//             <Box sx={{ display: "flex", justifyContent: "space-between", mb: "16px" }}>
//               <p>Total:</p>
//               <p>{total}</p>
//             </Box>
//             <button style={{
//               display: "flex", justifyContent: "center", alignItems: "center", width: '211px', height: "56px", padding: "16px, 48px, 16px, 48px", borderRadius: "4px", background: "#DB4444", color: "#fff", margin: "auto"
//             }}>Procees to checkout</button>
//           </Box>
//         </Box>
//       </Container>
//     </div>
//   )
// }

// export default Cart


import { Box, Button, Container, IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { TiDelete } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { removeItem, updateCart, updateQuantity } from '../../redux/slice/cardSlice';
import { useEffect } from 'react';

const Cart = () => {
  const { items } = useSelector(state => state.card);
  const total = items?.reduce((prev, next) => prev + next.price * next.quantity, 0) || 0;

  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(removeItem({ id }));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  useEffect(() => {
    dispatch(updateCart())
  }, [])

  return (
    <div>
      <Container maxWidth="lg" sx={{ pt: "180px" }}>
        <Box>
          <Box sx={{ display: "flex", mb: "40px", justifyContent: "space-between", padding: "20px 35px", boxShadow: "0px 1px 5px 0px #000000" }}>
            <Box sx={{ width: "400px" }}>Product</Box>
            <Box sx={{ width: "200px" }}>Price</Box>
            <Box sx={{ width: "200px" }}>Quantity</Box>
            <Box sx={{ width: "200px" }}>Subtotal</Box>
          </Box>
          {items?.map(el => (
            <Box key={el?.id} sx={{ display: "flex", mb: "24px", alignItems: "center", justifyContent: "space-between", padding: "24px 40px", boxShadow: "0px 1px 13px 0px #000000" }}>
              <Box sx={{ width: "400px", display: "flex", gap: "20px", position: "relative", alignItems: "center" }}>
                <IconButton
                  sx={{
                    position: "absolute", top: "-20px", left: "-20px", color: "red", '&:hover': {
                      backgroundColor: "transparent"
                    }
                  }}
                  onClick={() => handleClick(el?.id)}
                >
                  <TiDelete />
                </IconButton>
                <img src={el?.images[0]?.replaceAll('["', '').replaceAll('"]', '')} alt={el?.title} width={"54px"} />
                <p>{el?.title}</p>
              </Box>
              <Box sx={{ width: "200px" }}>$ {el?.price}</Box>
              <Box sx={{ width: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <input 
                  style={{ width: "60px" }} 
                  type="number" 
                  value={el.quantity} 
                  onChange={(e) => handleQuantityChange(el.id, parseInt(e.target.value))}
                />
              </Box>
              <Box sx={{ width: "200px" }}>$ {(el.price * el.quantity).toFixed(2)}</Box>
            </Box>
          ))}
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: "80px" }}>
            <Link to={"/"} style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "218px", height: "56px", border: "1px solid #000000" }}>
              Return To Shop
            </Link>
            <Button variant='outlined'>Update Cart</Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <input type="text" placeholder='Coupon code' style={{ border: "1px solid #000000", borderRadius: "4px", padding: "16px 24px", marginRight: "10px" }} />
            <button style={{
              width: '211px', height: "56px", padding: "16px 48px", borderRadius: "4px", background: "#DB4444", color: "#fff"
            }}>Apply Coupon</button>
          </Box>
          <Box sx={{ width: "470px", border: "1.5px solid #000000", borderRadius: "4px", padding: "32px 24px" }}>
            <h3 style={{ fontWeight: 500, fontSize: "20px", marginBottom: "24px" }}>Cart Total</h3>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: "16px" }}>
              <p>Shipping:</p>
              <p>Free</p>
            </Box>
            <hr style={{ marginBottom: "16px" }} />
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: "16px" }}>
              <p>Total:</p>
              <p>${total.toFixed(2)}</p>
            </Box>
            <Link to={"/payment"} style={{
              display: "flex", justifyContent: "center", alignItems: "center", width: '211px', height: "56px", padding: "16px 48px", borderRadius: "4px", background: "#DB4444", color: "#fff", margin: "auto", fontSize: "16px"
            }}>Proceed to Checkout</Link>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Cart;