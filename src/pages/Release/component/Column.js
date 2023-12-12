/* eslint-disable jsx-a11y/anchor-is-valid */
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
    {
      title: "Artits",
      dataIndex: "artits",
      key: "artits",
      render: (_, item, index) => {
        return <p>{"-"}</p>;
      },
    },
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
  ];
};
