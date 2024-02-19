/* eslint-disable react-hooks/exhaustive-deps */
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Modal, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import { Separator } from "../../../../components";
import { moments } from "../../../../helpers";
import { Api } from "../../../../services";
import { EDIT, formItemLayout } from "../../../../utils";
import "./ModalAddRelease.css";

const ModalAddRelease = ({ type, data, isOpen, onOk, onCancel }) => {
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);
  const [loadingTrack, setLoadingTrack] = useState(true);
  const [dataTrack, setDataTrack] = useState();

  console.log("cek data", data);
  useEffect(() => {
    if (isOpen) {
      setLoadingTrack(true);
      getTracks();

      if (type === EDIT) {
        form.setFieldValue("release_title", data?.title);

        if (data?.releaseRecording && data?.releaseRecording.length) {
          const newTrack = [];

          data.releaseRecording.forEach((element) => {
            newTrack.push(element?.recordingId);
          });
          form.setFieldValue("release_title_track", newTrack);
        }
      }
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      form.resetFields();
    };
  }, []);

  const getTracks = async () => {
    try {
      const res = await Api.get({
        url: "recordings",
      });
      const convert = convertdataTrack(res?.data);

      setDataTrack(convert);
      setLoadingTrack(false);
    } catch (error) {
      alert(error?.message);
      setLoadingTrack(false);
    }
  };

  const convertdataTrack = (data) => {
    if (!data || !data.length) return null;

    const newData = [];

    for (const i in data) {
      if (Object.hasOwnProperty.call(data, i)) {
        const element = data[i];

        const newItem = {
          label: `${element?.artist?.firstName} - ${element?.title}`,
          value: element?.id,
        };

        newData.push(newItem);
      }
    }

    return newData;
  };

  const setBody = () => {
    const field = form.getFieldValue();

    const newTrack = [];

    if (field?.release_title_track && field?.release_title_track.length)
      field.release_title_track.forEach((element) => {
        newTrack.push({
          id: element,
        });
      });

    const body = {
      release: {
        title: field?.release_title,
        releaseDate: moments(field?.release_date?.$d).format("YYYY-MM-DD"),
      },
      tracks: newTrack,
    };

    return body;
  };

  const onValidation = () => {
    form
      .validateFields()
      .then((res) => {
        if (type === EDIT) onEdit();
        else onAdd();
      })
      .catch((e) => console.log("error", e));
  };

  const onAdd = async () => {
    try {
      const body = setBody();
      await Api.post({
        url: "releases",
        body,
      });

      onOk();
      form.resetFields();
      setLoading(false);
    } catch (error) {
      alert(error?.message);
      setLoading(false);
    }
  };

  const onEdit = async () => {
    try {
      const body = setBody();
      await Api.put({
        url: `releases/${data?.id}`,
        body,
      });

      onOk();
      form.resetFields();
      setLoading(false);
    } catch (error) {
      alert(error?.message);
      setLoading(false);
    }
  };

  return (
    <Modal
      title={type === EDIT ? "Edit Release" : "Add Release"}
      open={isOpen}
      confirmLoading={loadingTrack || loading}
      onOk={() => onValidation()}
      onCancel={onCancel}
      width={600}
    >
      <div className="container_modal">
        <Separator />

        <Form form={form} name="release_add" {...formItemLayout}>
          <Form.Item
            name="release_title"
            label="Release Title"
            rules={[{ required: true, message: "Release Title is required!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="release_date"
            label="Release Date"
            rules={[
              {
                required: true,
                message: "Release Date is required!",
              },
            ]}
            initialValue={moments(data?.releaseDate)}
          >
            <DatePicker />
          </Form.Item>

          <Form.List name="release_title_track">
            {(fields, { add, remove }, { errors }) => (
              <>
                <Space>
                  <p>{`Number of Tracks: ${fields.length}`}</p>
                  <Button
                    type="primary"
                    icon={<PlusCircleOutlined />}
                    onClick={() => add()}
                  >
                    {"Add Track"}
                  </Button>
                </Space>

                {fields.map((field, index) => {
                  return (
                    <Form.Item
                      label={"Recording Title"}
                      required={false}
                      key={field.key}
                    >
                      <Space>
                        <Form.Item
                          {...field}
                          validateTrigger={["onChange", "onBlur"]}
                          rules={[
                            {
                              required: true,
                              message: "Recording Title is required!",
                            },
                          ]}
                          noStyle
                        >
                          <Select
                            placeholder="Select a title"
                            options={dataTrack}
                          />
                        </Form.Item>

                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            className="dynamic-delete-button"
                            onClick={() => remove(field.name)}
                          />
                        ) : null}
                      </Space>
                    </Form.Item>
                  );
                })}
              </>
            )}
          </Form.List>
        </Form>
      </div>
    </Modal>
  );
};

export default ModalAddRelease;
