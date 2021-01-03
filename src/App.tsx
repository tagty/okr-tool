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
      month: "2021/03",
    },
    {
      key: "2",
      month: "2020/12",
    },
  ];

  const columns = [
    {
      title: "Month",
      dataIndex: "month",
      key: "month",
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
  padding: 60px;

  .ant-breadcrumb {
    margin-bottom: 10px;
  }

  h1 {
    margin-bottom: 10px;
  }

  button {
    margin-bottom: 10px;
  }
`;

export default App;
