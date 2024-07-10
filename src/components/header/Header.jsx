import { headerMenu } from "../../constants";

import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Menu,
  Box,
  IconButton,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "../search/Search";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";

import { useSelector } from "react-redux";
import { useState } from "react";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = useState(null);

  const { items } = useSelector((store) => store.card);
  const { items: LikeItems } = useSelector((store) => store.like);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const cardCount = (
    <span
      style={{
        position: "absolute",
        width: "20px",
        height: "20px",
        borderRadius: "100px",
        backgroundColor: "red",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: "-5px",
        right: "-5px",
        fontSize: "12px",
      }}
    >
      {items.length}
    </span>
  );

  const favoriteCount = (
    <span
      style={{
        position: "absolute",
        width: "20px",
        height: "20px",
        borderRadius: "100px",
        backgroundColor: "red",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: "-5px",
        right: "-5px",
        fontSize: "12px",
      }}
    >
      {LikeItems.length}
    </span>
  );

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#fff",
        pt: "40px",
        pb: "16px",
        borderBottom: "1px solid rgba(0, 0, 0, 1)",
      }}
      elevation={0}
    >
      <Container maxWidth="lg" sx={{ p: "0px" }}>
        <Toolbar sx={{ bgcolor: "#fff", p: "0px" }}>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: "190px",
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "#000",
              textDecoration: "none",
            }}
          >
            Exclusive
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {headerMenu.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{t(page.name)}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              gap: "48px",
              display: { xs: "none", md: "flex" },
            }}
          >
            {headerMenu.map((page) => (
              <Link
                to={page.path}
                style={{
                  color: "#000",
                  textDecoration: "none",
                }}
                key={page.name}
              >
                {t(page.name)}
              </Link>
            ))}
          </Box>
          <Box sx={{ display: "flex", ml: "28px" }}>
            <Search />
            <IconButton component={Link} to="/favorite" sx={{ ml: "24px", mr: "16px", position: "relative" }}>
              <FaRegHeart /> {LikeItems.length > 0 && favoriteCount}
            </IconButton>
            <IconButton component={Link} to="/cart" sx={{ position: "relative" }}>
              <GrCart /> {items.length > 0 && cardCount}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;