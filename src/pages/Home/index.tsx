import { lazy } from "react";
import { Row } from "antd";
import { Icon } from "../../common/Icon";
import { Fade } from "react-awesome-reveal";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import MissionContent from "../../content/MissionContent.json";


const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <Fade direction="left">
      <Row id="intro" className="logoGrande" >
      <Icon src="logo.png" width="90%" height="270px" />
      </Row>
      </Fade>
     
      <MiddleBlock
        // title={MiddleBlockContent.title}
        // content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
    
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="adv.jpg"
        id="mission"
      />
  
    </Container>
  );
};

export default Home;
