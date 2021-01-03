import React from "react";
import { Breadcrumb } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">OKRs</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>New</Breadcrumb.Item>
      </Breadcrumb>
      <h1>New</h1>
    </Container>
  );
};

const Container = styled.div`
  padding: 60px;

  h1 {
    margin-bottom: 10px;
  }
`;
