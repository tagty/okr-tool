import React from "react";
import "./App.css";
import { Breadcrumb, Button, Table } from "antd";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const App = () => {
  const history = useHistory();

  const dataSource = [
    {
      key: "1",
      quarter: "2021-Q1",
    },
    {
      key: "2",
      quarter: "2020-Q4",
    },
  ];

  const columns = [
    {
      title: "Quarter",
      dataIndex: "quarter",
      key: "quarter",
    },
  ];

  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item>OKRs</Breadcrumb.Item>
      </Breadcrumb>
      <h1>OKRs</h1>
      <Button type="primary" onClick={() => history.push("/new")}>
        New
      </Button>
      <Table dataSource={dataSource} columns={columns} />
    </Container>
  );
};

const Container = styled.div`
  button {
    margin-bottom: 10px;
  }
`;

export default App;
