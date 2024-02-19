/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Input, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import { Separator } from "../../../../components";
import { Api } from "../../../../services";
import { EDIT, formItemLayout } from "../../../../utils";
import "./ModalAddRecording.css";

const ModalAddRecording = ({ type, data, isOpen, onOk, onCancel }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [loadingArtits, setLoadingArtits] = useState(true);
  const [dataArtits, setDataArtits] = useState();

  useEffect(() => {
    if (isOpen) {
      setLoadingArtits(true);
      getArtits();

      if (type === EDIT) {
        form.setFieldValue("artits", data?.artistId);
        form.setFieldValue("recording_title", data?.title);
        form.setFieldValue("duration", data?.duration);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      form.resetFields();
    };
  }, []);

  const getArtits = async (name = "") => {
    try {
      const res = await Api.get({
        url: "artists",
        params: {
          name,
        },
      });
      const convert = convertDataArtits(res?.data);

      setDataArtits(convert);
      setLoadingArtits(false);
    } catch (error) {
      alert(error?.message);
      setLoadingArtits(false);
    }
  };

  const convertDataArtits = (data) => {
    if (!data || !data.length) return null;

    const newData = [];

    for (const i in data) {
      if (Object.hasOwnProperty.call(data, i)) {
        const element = data[i];

        const newItem = {
          label: element?.firstName,
          value: element?.id,
        };

        newData.push(newItem);
      }
    }

    return newData;
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
    const field = form.getFieldValue();

    try {
      await Api.post({
        url: "recordings",
        body: {
          artistId: field?.artits,
          title: field?.recording_title,
          duration: parseInt(field?.duration),
        },
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
    const field = form.getFieldValue();

    try {
      await Api.put({
        url: `recordings/${data?.id}`,
        body: {
          artistId: field?.artits,
          title: field?.recording_title,
          duration: parseInt(field?.duration),
        },
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
      title={type === EDIT ? "Edit Recording" : "Add Recording"}
      open={isOpen}
      confirmLoading={loading || loadingArtits}
      onOk={() => onValidation()}
      onCancel={onCancel}
    >
      <div className="container_modal">
        <Separator />

        <Form form={form} name="recording_add" {...formItemLayout}>
          <Form.Item
            name="recording_title"
            label="Recording Title"
            rules={[
              { required: true, message: "Recording Title is required!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="duration"
            label="Duration(s)"
            rules={[
              {
                required: true,
                message: "Duration is required and number only!",
                pattern: new RegExp(/^[0-9]+$/)
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="artits"
            label="Artist"
            rules={[
              {
                required: true,
                message: "Artist is required!" 
              },
            ]}
          >
            <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              options={dataArtits}
            />
          </Form.Item>

          {/* <Form.List name="artits">
            {(fields, { add, remove }, { errors }) => (
              <>
                {fields.map((field, index) => {
                  return (
                    <Form.Item
                      label={"Artist"}
                      required={false}
                      key={field.key}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={["onChange", "onBlur"]}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                          },
                        ]}
                        noStyle
                      >
                        <Input style={{ width: "60%" }} />
                      </Form.Item>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}
                    </Form.Item>
                  );
                })}

                <Button
                  type="primary"
                  icon={<PlusCircleOutlined />}
                  onClick={() => add()}
                >
                  {"Add Artist"}
                </Button>
              </>
            )}
          </Form.List> */}
        </Form>
      </div>
    </Modal>
  );
};

export default ModalAddRecording;
