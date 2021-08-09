import { Row, Col } from "antd";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import { MailOutlined } from "@ant-design/icons";

import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = () => {


  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

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
              <Para>79002-948</Para>
            </Col>
            {/* <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Tell us everything")}</Large>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:l.qqbadze@gmail.com">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col> */}
            <Col lg={10} md={10} sm={12} xs={12}>
             <MailOutlined style={{paddingLeft: "2px"}} />
              <a href="viniciustellesdebritoadvocacia@gmail.com">
               viniciustellesdebritoadvocacia@gmail.com
              </a>


              <SocialLink
                href=""
                src="github.svg"
              />
              <SocialLink
                href=""
                src="twitter.svg"
              />
              <SocialLink
                href=""
                src="linkedin.svg"
              />
            </Col>
           
          </Row>
          
        </Container>
      </FooterSection>
      {/* <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "5px" }}
          >
            
            <FooterContainer>
              <SocialLink
                href="https://github.com/Adrinlol/create-react-app-adrinlol"
                src="github.svg"
              />
              <SocialLink
                href="https://twitter.com/Adrinlolx"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/lasha-kakabadze/"
                src="linkedin.svg"
              />
          
            </FooterContainer>
          </Row>
        </Container>
      </Extra> */}
    </>
  );
};

export default Footer;
