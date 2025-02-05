// toolbar
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItemBar from '@mui/material/MenuItem';
import MenuBar from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
// importar o hook useState para criar o estado de colapso do menu
import React, { useState } from "react";
import { isMobile } from 'react-device-detect';
// importar os componentes da barra lateral do react-pro-sidebar
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import logo1 from './logo1.png';
// importar ícones do react-icons
import { IoMdHelpCircle } from "react-icons/io";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { FaHome, FaRegCalendarAlt, FaAnchor } from "react-icons/fa";
import { MdOutlineContentPaste, MdOutlineAttachMoney, MdHistory, MdOutlineDonutLarge, MdHowToReg, MdInfo } from "react-icons/md";
// importar o CSS da barra lateral do módulo react-pro-sidebar e nosso CSS personalizado
import "./Sidebar.css";
// pages router
import { Link, Outlet } from "react-router-dom";


const Header = () => {

  // criar o estado inicial de menuCollapse usando o hook useState
  const [menuCollapse, setMenuCollapse] = useState(true);

  const [anchorEl, setAnchorEl] = useState(null);

  // criar uma função personalizada que mudará o estado de menucollapse de false para true e vice-versa
  const menuIconClick = () => {
    // verificar condição para mudar o estado de true para false e vice-versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
      <div>
        <Box sx={{ flexGrow: 1 }} >
          <AppBar position="static" sx={{ backgroundColor: '#2D5A3D' }} >
            <Toolbar>
              {isMobile ?
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={menuIconClick}
                >
                  <MenuIcon />
                </IconButton>
                : ""
              }
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
              {/* <img src={logo1} alt="" width="25px" height="25px" style={{ backgroundColor: "white", borderRadius: "100%" }} /> */}
                CENFT
              </Typography>
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
                <MenuBar
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItemBar onClick={handleClose}>Suporte</MenuItemBar>
                  <MenuItemBar onClick={handleClose}>Sair</MenuItemBar>
                </MenuBar>
              </div>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <div id="header">
        {/* propriedade collapsed para alterar o tamanho do menu usando o estado menucollapse */}

        <Sidebar collapsed={menuCollapse} backgroundColor="#fff" collapsedWidth={!isMobile ? "85px" : "0px"}>

          <div className="logotext" >
            {/* alteração de pequeno para grande usando o estado menucollapse */}
            <img src={logo1} alt="" width="50%" style={{ backgroundColor: "white", borderRadius: "100%" }} />
            <div className={!menuCollapse ? "dadosmenu" : "dadosmenuoculto"}>
              <br /><b>Empresa: CENFT</b>
              <br />E-mail: cenft@cenft.com
              <br />Responsavel: cenft
            </div>
          </div>
          <div className="closemenu" onClick={menuIconClick}>
            {/* alteração do ícone de colapso do menu ao clicar */}
            {menuCollapse ? (
              <FiArrowRightCircle />
            ) : (
              <FiArrowLeftCircle color="white" />
            )}
          </div>
          <Menu iconShape="square">
            <i>Consulta:</i>
            <Link to="/">
              <MenuItem active={true} icon={<FaHome />}>HOME</MenuItem>
            </Link>
            <Link to="agendamento">
              <MenuItem icon={<FaRegCalendarAlt />}>AGENDAMENTO</MenuItem>
            </Link>
            <Link to="prontuario">
              <MenuItem icon={<MdOutlineContentPaste />}>PRONTUARIO</MenuItem>
            </Link>
          </Menu>
          <hr />

          <Menu iconShape="square">
            <i>Gerenciamento:</i>
            <Link to="financeiro">
              <MenuItem icon={<MdOutlineAttachMoney />}>FINANCEIRO</MenuItem>
            </Link>
            <Link to="historico">
              <MenuItem icon={<MdHistory />}>HISTÓRICO</MenuItem>
            </Link>
            <Link to="relatorios">
              <MenuItem icon={<MdOutlineDonutLarge />}>GRAFICOS/RELATÓRIOS</MenuItem>
            </Link>
            <Link to="vinculacoes">
              <MenuItem icon={<FaAnchor />}>VINCULAÇÕES</MenuItem>
            </Link>
          </Menu>
          <hr />
          <Menu iconShape="square">
            <i>Configurações:</i>
            <Link to="configuracoes">
              <MenuItem icon={<MdHowToReg />}>CONFIGURAÇÕES</MenuItem>
            </Link>
          </Menu>
          <hr />
          <Menu iconShape="square">
            <i>CENFT:</i>
            <Link to="termos">
              <MenuItem icon={<MdInfo />}>NOSSOS TERMOS</MenuItem>
            </Link>
            <Link to="sobre">
              <MenuItem icon={<IoMdHelpCircle />}>SOBRE NÓS</MenuItem>
            </Link>
          </Menu>
        </Sidebar>
      </div>
      <div className={(isMobile) ? "conteudomobile" : (menuCollapse) ? "conteudo" : "conteudoaberto"}>
        <Outlet />
      </div>
    </>
  );
};

export default Header;
