/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { secondsToTime } from "../../../helpers";
import { Button } from "antd";

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
      title: "Recording Title",
      dataIndex: "recording_title",
      key: "recording_title",
      render: (_, item, index) => {
        return <a onClick={() => onSelect(item)}>{item?.title}</a>;
      },
    },
    // {
    //   title: "Albums",
    //   dataIndex: "albums",
    //   key: "albums",
    //   render: (_, item, index) => {
    //     return <p>{"-"}</p>;
    //   },
    // },
    {
      title: "Main Artist",
      dataIndex: "main_artits",
      key: "main_artits",
      render: (_, item, index) => {
        return <p>{item?.artist?.firstName || "-"}</p>;
      },
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
      render: (_, item, index) => {
        return <p>{secondsToTime(item?.duration)}</p>;
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
