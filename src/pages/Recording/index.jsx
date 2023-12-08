import { Button, Table } from "antd";
import Search from "antd/es/input/Search";
import React, { useState } from "react";
import { Container } from "../../components";
import "./Recording.css";
import { Columns, ModalAddRecording } from "./component";

const dataDummy = [1, 2, 3, 4, 5];

const Recording = () => {
  const [isOpenAdd, setIsOpenAdd] = useState(false);

  const onSearch = (value) => {
    console.log("cek val", value);
  };

  return (
    <Container title={"Recording"}>
      <Search placeholder="input search text" onSearch={onSearch} />

      <Button
        className="button_add"
        type="primary"
        onClick={() => setIsOpenAdd(true)}
      >
        Add File
      </Button>

      <Table columns={Columns()} dataSource={dataDummy} />

      <ModalAddRecording
        isOpen={isOpenAdd}
        onCancel={() => setIsOpenAdd(false)}
        onOk={() => alert("Coming Soon")}
      />
    </Container>
  );
};

export default Recording;
