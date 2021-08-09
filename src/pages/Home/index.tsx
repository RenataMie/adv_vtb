import { lazy } from "react";
import { Row } from "antd";
import { Icon } from "../../common/Icon";
import { Fade } from "react-awesome-reveal";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";

import MissionContent from "../../content/MissionContent.json";


// const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <Fade direction="left">
      <Row id="intro" className="logoGrande" style={{ paddingTop:"100px" }}>
      <Icon src="logo.png" width="1000px" height="300px" />
      </Row>
      </Fade>
      {/* <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      /> */}
      <MiddleBlock
        // title={MiddleBlockContent.title}
        // content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      {/* <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      /> */}
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="adv.jpg"
        id="mission"
      />
      {/* <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      /> */}
    </Container>
  );
};

export default Home;
