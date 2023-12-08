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
      title: "Releases",
      dataIndex: "releases",
      key: "releases",
      render: (_, item, index) => {
        return <a>{"Sing Lengend"}</a>;
      },
    },
    {
      title: "Artits",
      dataIndex: "artits",
      key: "artits",
      render: (_, item, index) => {
        return <p>{"Noah"}</p>;
      },
    },
    {
      title: "Date of Releases",
      dataIndex: "date_of_releases",
      key: "date_of_releases",
      render: (_, item, index) => {
        return <p>{"25 May 2016"}</p>;
      },
    },
    {
      title: "Number of Tracks",
      dataIndex: "number_of_track",
      key: "number_of_track",
      render: (_, item, index) => {
        return <p>{9}</p>;
      },
    },
  ];
};
