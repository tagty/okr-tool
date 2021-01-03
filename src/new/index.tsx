import React from "react";
import { Breadcrumb, Button, Form, Input } from "antd";
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
      <Form>
        <Form.Item label="Month" name="month">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

const Container = styled.div``;
