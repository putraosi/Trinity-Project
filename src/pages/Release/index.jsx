import { Button, Table } from "antd";
import Search from "antd/es/input/Search";
import React, { useState } from "react";
import { Container } from "../../components";
import "./Release.css";
import { Columns, ModalAddRelease } from "./component";

const dataDummy = [1, 2, 3, 4, 5];

const Release = () => {
  const [isOpenAdd, setIsOpenAdd] = useState(false);

  const onSearch = (value) => {
    console.log("cek val", value);
  };

  return (
    <Container title={"Release"}>
      <Search placeholder="input search text" onSearch={onSearch} />

      <Button
        className="button_add"
        type="primary"
        onClick={() => setIsOpenAdd(true)}
      >
        Add File
      </Button>

      <Table columns={Columns()} dataSource={dataDummy} />

      <ModalAddRelease
        isOpen={isOpenAdd}
        onCancel={() => setIsOpenAdd(false)}
        onOk={()=> alert('Coming Soon')}
      />
    </Container>
  );
};

export default Release;
