"use client";
import WalletIcon from "@/assets/WalletIcon";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Button from "./Button";
import styled from "styled-components";
import { Abril_Fatface } from "next/font/google";
import RocketIcon from "@/assets/RocketIcon";
import monkey from "@/assets/monkey.png";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import HoverMotion from "./HoverMotion";
const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  return (
    <HeaderStyled>
      <nav className="logo">
        <div className="logo">
          <Image src={logo} alt="logo" width={36} />
          <h2>Logo</h2>
        </div>
        <div className="input">
          <input type="text" placeholder="Search" />
        </div>
        <ul className="nav-items ">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Actions</a>
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <Button name="Wallet" icon={<WalletIcon />} />
        </ul>
      </nav>
      <div className="header-content">
        <div className="text-content">
          <h1 className={abril.className}>
            Buy, collect, and sell extraordinary NFTs
          </h1>
          <p>
            Acquire expertise in navigating the rapidly evolving and
            exhilarating NFT landscape, unveil the highly sought-after NFTs, and
            comprehend the possible advantages and disadvantages of acquiring,
            amassing, and vending these exceptional digital assets.
          </p>
          <div className="buttons">
            <Button
              name="Get Started"
              background="#f2994a"
              color="#fff"
              border="1px solid #f2994a"
              icon={<RocketIcon />}
            />
            <Button name="Learn More" />
          </div>
        </div>
        <div className="image-content">
          <HoverMotion className="image">
            <Image
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(150px)",
              }}
              src={monkey}
              width={600}
              height={600}
              alt="hero"
            />
          </HoverMotion>
        </div>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  nav {
    padding: 0 4rem;
    min-height: 10vh;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }

    .input {
      flex: 2;
      display: flex;
      justify-content: center;
      input {
        width: 55%;
        padding: 0.6rem 0.8rem;
        border-radius: 8px;
        background-color: #161616;
        border: 1px solid var(--color-border);
        &::placeholder {
          color: var(--color-border);
          font-weight: 500;
        }
      }
    }

    .nav-items {
      display: flex;
      align-items: center;
      gap: 2rem;
      li {
        transition: all 0.2s ease-in-out;

        &:hover {
          color: white;
          transform: scale(1.1);
        }
      }
    }
  }

  .header-content {
    padding: 0 10rem 5rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    min-height: calc(100vh - 10vh);

    .text-content {
      > h1 {
        font-size: clamp(2rem, 5vw, 5rem);
        color: #f2994a;
        transition: all 0.01s linear;
        padding-bottom: 1.5rem;
      }

      .buttons {
        display: flex;
        gap: 1rem;
        margin-top: 2.5rem;
      }
    }

    .image-content .image {
      padding: 1rem;
      border-radius: 8px;
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);

      img {
        border-radius: 8px;
      }
    }
  }
`;
export default Header;
