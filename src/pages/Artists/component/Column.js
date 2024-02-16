/* eslint-disable jsx-a11y/anchor-is-valid */
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
        return <a onClick={() => onSelect(item)}>{`${item?.firstName} ${item?.lastName}` }</a>;
      },
    },
    {
      title: "Number of Recordings",
      dataIndex: "number_of_recording",
      key: "number_of_recording",
      render: (_, item, index) => {
        return <p>{item?.royaltyRate}</p>;
      },
    },
    {
      title: "Number of Releases",
      dataIndex: "number_of_releases",
      key: "number_of_releases",
      render: (_, item, index) => {
        return <p>{item?.contractNum}</p>;
      },
    },
  ];
};
