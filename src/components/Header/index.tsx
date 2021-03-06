import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import Container from "../../common/Container";
import { Icon } from "../../common/Icon";
import { LinkedinFilled, InstagramFilled, FacebookFilled, PhoneFilled } from "@ant-design/icons";

// import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";


const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
  
    return (
      <>
        <CustomNavLinkSmall >
          <Span href="/">Início</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall >
          <Span href="/atuacao"> Atuação </Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall >
          <Span href="/artigos">Artigos</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall >
          <Span href="/contato">Contato</Span>
        </CustomNavLinkSmall>
    
      </>
    );
  };

  return (
    <HeaderSection className="header">

        <Row className="location">
        <PhoneFilled style={{ fontSize: '15px', color: "grey", paddingRight:"5px" }} />
          <p>Campo Grande - MS | (67) 98412-0991  /  (67) 3204-0991</p>

          <div className="network">
              <a href="/"><LinkedinFilled style={{ fontSize: '23px', paddingLeft:'25px' }}/></a>
              <a href="/"><InstagramFilled style={{ fontSize: '23px', paddingLeft:'25px' }}/></a>
              <a href="/"><FacebookFilled style={{ fontSize: '23px', paddingLeft:'25px' }}/></a>
          </div>
        </Row>
      <Container>
      
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage" style={{ paddingTop:"7px" }}>
            <Icon src="logo.png" width="200px" height="70px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default Header;
