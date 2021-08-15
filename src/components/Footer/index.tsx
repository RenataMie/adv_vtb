import { Row, Col } from "antd";
import Container from "../../common/Container";
import { MailOutlined } from "@ant-design/icons";
import { LinkedinFilled, InstagramFilled, FacebookFilled } from "@ant-design/icons";

import {
  FooterSection,
  NavLink,
  Para,
  FooterContainer,
} from "./styles";



const Footer = () => {

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
          <Col lg={10} md={10} sm={14} xs={14}>
              <Para>Avenida Afonso Pena, 3504</Para>
              <Para>Edifício Empire Center</Para>
              <Para>Sala 96 - 9º andar</Para>
              <Para>Campo Grande - MS</Para>
              <Para style={{marginBottom:'10px'}}>79002-948</Para>
            </Col>
        
            <Col lg={10} md={10} sm={12} xs={12}>
             <MailOutlined style={{paddingLeft: "2px"}} />
              <NavLink to="viniciustellesdebritoadvocacia@gmail.com">
               viniciustellesdebritoadvocacia@gmail.com
              </NavLink>

            <FooterContainer>
           
              <a href="/"><LinkedinFilled style={{ fontSize: '23px' }}/></a>
              <a href="/"><InstagramFilled style={{ fontSize: '23px', paddingLeft:'15px' }}/></a>
              <a href="/"><FacebookFilled style={{ fontSize: '23px', paddingLeft:'15px' }}/></a>
          
              </FooterContainer>
            </Col>
           
          </Row>
          
        </Container>
      </FooterSection>
  
    </>
  );
};

export default Footer;
