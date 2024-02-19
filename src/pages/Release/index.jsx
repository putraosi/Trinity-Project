import { Button, Spin, Table } from "antd";
import Search from "antd/es/input/Search";
import React, { useEffect, useState } from "react";
import { Container } from "../../components";
import { Api } from "../../services";
import { EDIT } from "../../utils";
import "./Release.css";
import { Columns, ModalAddRelease } from "./component";

const Release = () => {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [dataSelected, setDataSelected] = useState();

  useEffect(() => {
    getLists();
  }, []);

  const getLists = async (name = "") => {
    try {
      const res = await Api.get({
        url: "releases",
        params: {
          name,
        },
      });

      setData(res?.data);
      setLoading(false);
    } catch (error) {
      alert(error?.message);
      setLoading(false);
    }
  };

  const deleteRelease = async (id) => {
    setLoading(true);

    try {
      await Api.delete({
        url: `releases/${id}`,
        showLog: true,
      });
      getLists();
    } catch (error) {
      alert(error?.message);
      setLoading(false);
    }
  };

  const onSelect = (select) => {
    if (select?.type === "delete") {
      deleteRelease(select.id);
    } else {
      setDataSelected(select);
      setIsOpenEdit(true);
    }
  };

  const onSearch = (value) => {
    setLoading(true);
    getLists(value);
  };

  return (
    <Spin spinning={loading}>
      <Container title={"Release"}>
        <Search
          value={search}
          placeholder="input search text"
          onChange={(e) => setSearch(e?.target?.value)}
          onSearch={onSearch}
        />

        <Button
          className="button_add"
          type="primary"
          onClick={() => setIsOpenAdd(true)}
        >
          Add Release
        </Button>

        <Table
          columns={Columns({ onSelect: (select) => onSelect(select) })}
          dataSource={data}
        />

        <ModalAddRelease
          isOpen={isOpenAdd}
          onCancel={() => setIsOpenAdd(false)}
          onOk={() => {
            setIsOpenAdd(false);
            getLists();
          }}
        />

        {isOpenEdit && dataSelected && (
          <ModalAddRelease
            isOpen={isOpenEdit}
            type={EDIT}
            data={dataSelected}
            onCancel={() => setIsOpenEdit(false)}
            onOk={() => {
              setIsOpenEdit(false);
              getLists();
            }}
          />
        )}
      </Container>
    </Spin>
  );
};

export default Release;
