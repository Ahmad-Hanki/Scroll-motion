import Image from "next/image";
import styled from "styled-components";
import spiral from "@/assets/spiral.svg";
import arm2 from "@/assets/arm2.jpg";
import arm from "@/assets/arm.jpg";
import HoverMotion from "./HoverMotion";
const Zoom = () => {
  return (
    <ZoomStyled>
      <HoverMotion
        className="image"
        style={{
          height: "50rem",
          width: "100%",
        
        }}
      >
        <Image
          src={spiral}
          alt="bulb tree"
          fill
          sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            scale: 1.2,
            background: "var(--color-bg)",
          }}
        />

        <Image
          src={arm2}
          alt="bulb tree"
          className="monkey"
          width={500}
          height={500}
          style={{
            objectFit: "cover",
            transformStyle: "preserve-3d",
                transform: "translateZ(150px)",
            objectPosition: "50% 0%",
          }}
        />

        <Image
          src={arm}
          alt="bulb tree"
          className="smoke"
          width={500}
          height={500}
          style={{
            objectFit: "cover",
            transformStyle: "preserve-3d",
                transform: "translateZ(150px)",
            objectPosition: "center",
          }}
        />
      </HoverMotion>
    </ZoomStyled>
  );
};

const ZoomStyled = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid var(--color-border);

  .image {
    border-radius: 8px;
    img {
      border-radius: 8px;
    }
  }

  .monkey {
    position: absolute;
    top: 10%;
    right: 3rem;
  }

  .smoke {
    position: absolute;
    top: 10%;
    left: 3rem;
  }
`;
export default Zoom;
