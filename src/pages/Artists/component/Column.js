/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from "antd";
import React from "react";

export const Columns = ({ onSelect }) => {
  return [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      render: (_, item, index) => {
        return <p>{index + 1}</p>;
      },
    },
    {
      title: "Artist Name",
      dataIndex: "artits_name",
      key: "artits_name",
      render: (_, item, index) => {
        return (
          <a
            onClick={() => onSelect(item)}
          >{`${item?.firstName} ${item?.lastName}`}</a>
        );
      },
    },
    {
      title: "Royalty Rate",
      dataIndex: "royalty_rate",
      key: "royalty_rate",
      render: (_, item, index) => {
        return <p>{item?.royaltyRate || "-"}</p>;
      },
    },
    {
      title: "Contract Number",
      dataIndex: "contract_num",
      key: "contract_num",
      render: (_, item, index) => {
        return <p>{item?.contractNum || "-"}</p>;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, item, index) => {
        const body = {
          type: "delete",
          id: item?.id,
        };
        return (
          <Button
            type="primary"
            danger
            onClick={() => onSelect(body)}
          >
            Delete
          </Button>
        );
      },
    },
  ];
};
