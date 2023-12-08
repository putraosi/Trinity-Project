/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export const Columns = () => {
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
      title: "Artits Name",
      dataIndex: "artits_name",
      key: "artits_name",
      render: (_, item, index) => {
        return <a>{"Noah"}</a>;
      },
    },
    {
      title: "Number of Recordings",
      dataIndex: "number_of_recording",
      key: "number_of_recording",
      render: (_, item, index) => {
        return <p>{"40"}</p>;
      },
    },
    {
      title: "Number of Releeases",
      dataIndex: "number_of_releases",
      key: "number_of_releases",
      render: (_, item, index) => {
        return <p>{"19"}</p>;
      },
    },
  ];
};
