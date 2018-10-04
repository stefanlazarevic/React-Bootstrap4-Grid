import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./demo.css";

import { Container, Row, Column } from "./index";

const Header = styled.div`
  background-color: #f5f5f5;
  color: #444;
  text-align: center;
  border-bottom: 1px solid #eee;
  padding: 2rem 0;
  h1 {
    margin-top: 0;
  }
`;

const Section = styled.section`
  padding: 2rem 0;

  [data-container] {
    height: 200px;
    background: #f5f5f5;
    border: 1px solid #eee;
    [data-box] {
      margin-bottom: 0;
    }
  }

  &:nth-child(odd) {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    background-color: #f5f5f5;

    [data-container] {
      background: #fff;
    }
  }
`;

const SectionTitle = styled.h2`
  text-transform: uppercase;
  color: #444;
  opacity: 0.9;
`;

const Box = styled.div`
  color: #fff;
  margin-bottom: 1rem;
  background-color: #007fff;
  border-radius: 8px;
  padding: 0.2rem 1rem;
  font-size: 1rem;
  height: 100%;
  &:empty {
    padding: 1rem;
  }
`;

const Index = props => {
  return (
    <Fragment>
      <Header>
        <Container>
          <Row>
            <Column>
              <h1>React Bootstrap4 Grid</h1>
            </Column>
          </Row>
        </Container>
      </Header>
      <Section>
        <Container>
          <Row>
            <Column>
              <SectionTitle>12 Column Grid</SectionTitle>
            </Column>
          </Row>
          <Row>
            <Column>
              <Box />
            </Column>
          </Row>
          <Row>
            <Column xs={1}>
              <Box />
            </Column>
            <Column xs={11}>
              <Box />
            </Column>
          </Row>
          <Row>
            <Column xs={2}>
              <Box />
            </Column>
            <Column xs={10}>
              <Box />
            </Column>
          </Row>
          <Row>
            <Column xs={3}>
              <Box />
            </Column>
            <Column xs={9}>
              <Box />
            </Column>
          </Row>
          <Row>
            <Column xs={4}>
              <Box />
            </Column>
            <Column xs={8}>
              <Box />
            </Column>
          </Row>
          <Row>
            <Column xs={5}>
              <Box />
            </Column>
            <Column xs={7}>
              <Box />
            </Column>
          </Row>
          <Row>
            <Column xs={6}>
              <Box />
            </Column>
            <Column xs={6}>
              <Box />
            </Column>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Column>
              <SectionTitle>Responsive Columns</SectionTitle>
            </Column>
          </Row>
          <Row>
            <Column xs={12} sm={4}>
              <Box>xs-12 sm-4</Box>
            </Column>
            <Column xs={12} sm={8}>
              <Box>xs-12 sm-8</Box>
            </Column>
          </Row>
          <Row>
            <Column xs={6} sm={8} md={10}>
              <Box>xs-6 sm-8 md-10</Box>
            </Column>
            <Column xs={6} sm={4} md={2}>
              <Box>xs-6 sm-4 md-2</Box>
            </Column>
          </Row>
          <Row>
            <Column xs={12} lg={6}>
              <Box>xs-12 lg-6</Box>
            </Column>
            <Column xs={12} lg={6}>
              <Box>xs-12 lg-6</Box>
            </Column>
          </Row>
          <Row>
            <Column xs={5} xlg={12}>
              <Box>xs-5 xlg-12 </Box>
            </Column>
            <Column xs={7} xlg={12}>
              <Box>xs-7 xlg-12</Box>
            </Column>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Column>
              <SectionTitle>Auto Width</SectionTitle>
            </Column>
          </Row>
          <Row>
            <Column xs="auto">
              <Box />
            </Column>
            <Column xs="auto">
              <Box />
            </Column>
          </Row>
          <Row>
            <Column xs="auto">
              <Box />
            </Column>
            <Column xs="auto">
              <Box />
            </Column>
            <Column xs="auto">
              <Box />
            </Column>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Column>
              <SectionTitle>Gutter</SectionTitle>
            </Column>
          </Row>
          <Row>
            <Column noGutter xs={3}>
              <Box>3</Box>
            </Column>
            <Column noGutter xs={3}>
              <Box>3</Box>
            </Column>
            <Column noGutter xs={3}>
              <Box>3</Box>
            </Column>
            <Column noGutter xs={3}>
              <Box>3</Box>
            </Column>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Column>
              <SectionTitle>Reversed Direction</SectionTitle>
            </Column>
          </Row>
          <Row reversed>
            <Column xs="auto">
              <Box>1</Box>
            </Column>
            <Column xs="auto">
              <Box>2</Box>
            </Column>
            <Column xs="auto">
              <Box>3</Box>
            </Column>
            <Column xs="auto">
              <Box>4</Box>
            </Column>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Column>
              <SectionTitle>Column</SectionTitle>
            </Column>
          </Row>
          <Row>
            <Column xs="auto">
              <Box>1</Box>
              <Box>2</Box>
              <Box>3</Box>
              <Box>4</Box>
            </Column>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Column>
              <SectionTitle>Reversed Column</SectionTitle>
            </Column>
          </Row>
          <Row>
            <Column reversed xs="auto">
              <Box>1</Box>
              <Box>2</Box>
              <Box>3</Box>
              <Box>4</Box>
            </Column>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Column>
              <SectionTitle>Fixed Column Width</SectionTitle>
            </Column>
          </Row>
          <Row>
            <Column fixed style={{ width: 200 }}>
              <Box>200px</Box>
            </Column>
            <Column xs="auto">
              <Box>auto</Box>
            </Column>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Column>
              <SectionTitle>Horizontal Alignment - Start</SectionTitle>
            </Column>
          </Row>
          <Row justify="start">
            <Column xs={2}>
              <Box>2</Box>
            </Column>
            <Column xs={1}>
              <Box>1</Box>
            </Column>
            <Column xs={4}>
              <Box>4</Box>
            </Column>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Column>
              <SectionTitle>Horizontal Alignment - center</SectionTitle>
            </Column>
          </Row>
          <Row justify="center">
            <Column xs={2}>
              <Box>2</Box>
            </Column>
            <Column xs={1}>
              <Box>1</Box>
            </Column>
            <Column xs={4}>
              <Box>4</Box>
            </Column>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Column>
              <SectionTitle>Horizontal Alignment - end</SectionTitle>
            </Column>
          </Row>
          <Row justify="end">
            <Column xs={2}>
              <Box>2</Box>
            </Column>
            <Column xs={1}>
              <Box>1</Box>
            </Column>
            <Column xs={4}>
              <Box>4</Box>
            </Column>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Column>
              <SectionTitle>Horizontal Alignment - Between</SectionTitle>
            </Column>
          </Row>
          <Row justify="between">
            <Column xs={2}>
              <Box>2</Box>
            </Column>
            <Column xs={1}>
              <Box>1</Box>
            </Column>
            <Column xs={4}>
              <Box>4</Box>
            </Column>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Column>
              <SectionTitle>Horizontal Alignment - around</SectionTitle>
            </Column>
          </Row>
          <Row justify="around">
            <Column xs={2}>
              <Box>2</Box>
            </Column>
            <Column xs={1}>
              <Box>1</Box>
            </Column>
            <Column xs={4}>
              <Box>4</Box>
            </Column>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Column>
              <SectionTitle>Horizontal Alignment - even</SectionTitle>
            </Column>
          </Row>
          <Row justify="even">
            <Column xs={2}>
              <Box>2</Box>
            </Column>
            <Column xs={1}>
              <Box>1</Box>
            </Column>
            <Column xs={4}>
              <Box>4</Box>
            </Column>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Column>
              <SectionTitle>Vertical Alignment - top</SectionTitle>
            </Column>
          </Row>
          <Row data-container align="top">
            <Column xs={4}>
              <Box data-box>4</Box>
            </Column>
            <Column xs={4}>
              <Box data-box>4</Box>
            </Column>
            <Column xs={4}>
              <Box data-box>4</Box>
            </Column>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Column>
              <SectionTitle>Vertical Alignment - middle</SectionTitle>
            </Column>
          </Row>
          <Row data-container align="middle">
            <Column xs={4}>
              <Box data-box>4</Box>
            </Column>
            <Column xs={4}>
              <Box data-box>4</Box>
            </Column>
            <Column xs={4}>
              <Box data-box>4</Box>
            </Column>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Column>
              <SectionTitle>Vertical Alignment - bottom</SectionTitle>
            </Column>
          </Row>
          <Row data-container align="bottom">
            <Column xs={4}>
              <Box data-box>4</Box>
            </Column>
            <Column xs={4}>
              <Box data-box>4</Box>
            </Column>
            <Column xs={4}>
              <Box data-box>4</Box>
            </Column>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Column>
              <SectionTitle>Vertical Alignment - stretch</SectionTitle>
            </Column>
          </Row>
          <Row data-container align="stretch">
            <Column xs={4}>
              <Box data-box>4</Box>
            </Column>
            <Column xs={4}>
              <Box data-box>4</Box>
            </Column>
            <Column xs={4}>
              <Box data-box>4</Box>
            </Column>
          </Row>
        </Container>
      </Section>
    </Fragment>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);