import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper, ButtonWrapper } from "./styles";

interface MiddleBlockProps {
  title?: string;
  content?: string;
  button: any;
  t?: any;
}

const MiddleBlock = ({ title, content, button }: MiddleBlockProps) => {

  return (
    <MiddleBlockSection>
      <Slide direction="left">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{title}</h6>
              <Content>{content}</Content>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                     
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                      >
                        <a href={item.link} 
                           >
                        
                        {item.title}
                        </a>
                      </Button>
                     
                    );
                  })}
              </ButtonWrapper>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default MiddleBlock;
