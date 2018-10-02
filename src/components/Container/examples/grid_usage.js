import React from "react";

import { Container, Row, Column } from "../../../index";

const Demo = props => (
  <Container>
    <Row>
      <Column xs={4} sm={6} lg={12} xlg={5}>
        <h1>Hello World</h1>
      </Column>
      <Column xs={8} sm={6} lg={12} xlg={7}>
        <h1>Hello World</h1>
      </Column>
    </Row>
    <Row reverse>
      <Column noGutter reverse xs={12} sm={6} lg={10} xlg={4}>
        <h1>Hello World</h1>
      </Column>
    </Row>
  </Container>
);

export default Demo;
