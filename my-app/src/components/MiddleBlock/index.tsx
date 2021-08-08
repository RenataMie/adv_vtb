import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { DollarOutlined } from  "@ant-design/icons";
import { MiddleBlockSection, Content, ContentWrapper, ButtonWrapper } from "./styles";

interface MiddleBlockProps {
  title?: string;
  content?: string;
  button: any;
  t: any;
}

const MiddleBlock = ({ title, content, t, button }: MiddleBlockProps) => {
  // const scrollTo = (id: string) => {
  //   const element = document.getElementById(id) as HTMLDivElement;
  //   element.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };
  return (
    <MiddleBlockSection>
      <Slide direction="up">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                     
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        // onClick={() => `window.location.href=${item.link}`}
                      >
                        <a href={item.link} 
                            style={{color: "black", 
                          }}>
                        
                        {t(item.title)}
                        </a>
                      </Button>
                     
                    );
                  })}
              </ButtonWrapper>
              {/* {button && (
                <Button name="submit" onClick={() => scrollTo("mission")}>
                  {t(button)}
                </Button>
              )} */}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
