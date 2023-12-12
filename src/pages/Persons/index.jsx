import { Button, Table } from "antd";
import Search from "antd/es/input/Search";
import React, { useState } from "react";
import { Container } from "../../components";
import { EDIT } from "../../utils";
import "./Persons.css";
import { Columns, ModalAddPerson } from "./component";

const dataDummy = [1, 2, 3, 4, 5];

const Persons = () => {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const onSelect = (select) => {
    setIsOpenEdit(true);
  };

  const onSearch = (value) => {
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

      <Table
        columns={Columns({ onSelect: (select) => onSelect(select) })}
        dataSource={dataDummy}
      />

      <ModalAddPerson
        isOpen={isOpenAdd}
        onCancel={() => setIsOpenAdd(false)}
        onOk={() => alert("Coming Soon")}
      />

      <ModalAddPerson
        type={EDIT}
        isOpen={isOpenEdit}
        onCancel={() => setIsOpenEdit(false)}
        onOk={() => alert("Coming Soon")}
      />
    </Container>
  );
};

export default Persons;
