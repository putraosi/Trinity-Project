/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from "antd";
import React from "react";
import { moments } from "../../../helpers";

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
      title: "Releases",
      dataIndex: "releases",
      key: "releases",
      render: (_, item, index) => {
        return <a onClick={() => onSelect(item)}>{item?.title}</a>;
      },
    },
    // {
    //   title: "Artist",
    //   dataIndex: "artits",
    //   key: "artits",
    //   render: (_, item, index) => {
    //     return <p>{"-"}</p>;
    //   },
    // },
    {
      title: "Date of Releases",
      dataIndex: "date_of_releases",
      key: "date_of_releases",
      render: (_, item, index) => {
        return <p>{moments(item?.releaseDate).format("DD MM YYYY")}</p>;
      },
    },
    {
      title: "Number of Tracks",
      dataIndex: "number_of_track",
      key: "number_of_track",
      render: (_, item, index) => {
        return <p>{item?.releaseRecording.length}</p>;
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
          <Button type="primary" danger onClick={() => onSelect(body)}>
            Delete
          </Button>
        );
      },
    },
  ];
};
