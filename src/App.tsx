import React from "react";
import "./App.css";
import { Table } from "antd";
import styled from "styled-components";

const App = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <Container>
      <h1>OKRs</h1>
      <Table dataSource={dataSource} columns={columns} />;
    </Container>
  );
};

const Container = styled.div`
  padding: 60px;
`;

export default App;
