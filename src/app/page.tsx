"use client";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Fullpage from "@/components/Fullpage";
import Header from "@/components/Header";
import SectionLayout from "@/components/SectionLayout";
import TextSection from "@/components/TextSection";
import { cards } from "@/utils/Cards";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Header />
      <MainStyled>
        <SectionLayout>
          <div className="cards">
            {cards.map((card, i) => {
              return (
                <Card
                  key={i}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              );
            })}
          </div>
        </SectionLayout>

        <Fullpage />

        <SectionLayout>
          <TextSection />
        </SectionLayout>

        <SectionLayout>
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/OuaUjkZhfqQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </SectionLayout>

        
        <SectionLayout>
          <TextSection />
        </SectionLayout>

        <Footer />

      </MainStyled>
    </>
  );
}

const MainStyled = styled.main`
  min-height: 100vh;
  width: 100%;

  .cards {
    display: grid;
    grid-template-columns: repeat(5, 30rem);
    gap: 4rem;
  }

  .video {
    padding: 2rem;
    background-color: #161616;
    border-radius: 1rem;
    iframe {
      border: none;
      width: 100%;
      height: 52rem;
    }
  }
`;
