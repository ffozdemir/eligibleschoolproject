"use client";
import React from "react";
import { Nav, Container, Navbar, Offcanvas } from "react-bootstrap";
import Logo from "./Logo";
import MainMenu from "./MainMenu";
import ButtonCallNow from "./ButtonCallNow";
import Image from "next/image";
import { appConfig } from "@/helpers/config";

const MainMenuBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow" sticky="top" collapseOnSelect>
      <Container>
        <Logo />
        <Navbar.Toggle aria-controls="main-menubar" />
        <Navbar.Offcanvas
          id="main-menubar"
          aria-labelledby="main-menubar-title"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="main-menubar-title">
              <Image
                src={"/img/logos/logo-short.png"}
                alt={appConfig.project.name}
                width={208}
                height={29}
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <MainMenu className="justify-content-center flex-grow-1" />
            <ButtonCallNow />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MainMenuBar;
