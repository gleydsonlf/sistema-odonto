"use client";

import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineChartBar, HiOutlineUser } from "react-icons/hi";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineDocumentChartBar,
  HiOutlineBanknotes,
} from "react-icons/hi2";

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar-primary text-light m-0 p-0"
      fixed="top"
      // variant="dark"
    >
      <Container fluid className="text-light">
        <Navbar.Brand href="#" className="text-light me-5 ms-5 ">
          Sistema Odonto
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-3">
            <Link className="nav-link navbar-menu-link" href="/gestao">
              <HiOutlineChartBar className="me-2" />
              Gestão
            </Link>
            <Link className="nav-link navbar-menu-link" href="/agenda">
              <HiOutlineCalendarDays className="me-2" />
              Agenda
            </Link>

            <Link className="nav-link navbar-menu-link" href="/pacientes">
              <HiOutlineUser className="me-2" />
              Pacientes
            </Link>

            <Link
              className="nav-link navbar-menu-link"
              href="/paciente/principal"
            >
              <HiOutlineUser className="me-2" />
              Paciente...
            </Link>

            <Link className="nav-link navbar-menu-link" href="/financeiro">
              <HiOutlineBanknotes className="me-2" />
              Financeiro
            </Link>

            <Link className="nav-link navbar-menu-link" href="/relatorios">
              <HiOutlineDocumentChartBar className="me-2" />
              Relatórios
            </Link>

            <Link className="nav-link navbar-menu-link" href="/configuracoes">
              <HiOutlineCog6Tooth className="me-2" />
              Configurações
            </Link>
          </Nav>

          <hr />
          <div className="d-flex align-items-center ">
            <FaRegUserCircle className="me-2" />
            <NavDropdown
              title="Dr Gleydson Lucas"
              id="navbar-perfil"
              className="me-2"
            >
              <NavDropdown.Item href="#action/3.1">Meu Perfil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Sair</NavDropdown.Item>
            </NavDropdown>
          </div>
          <hr />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
