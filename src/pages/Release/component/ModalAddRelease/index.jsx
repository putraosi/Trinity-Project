import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Modal, Space } from "antd";
import React from "react";
import { Separator } from "../../../../components";
import "./ModalAddRelease.css";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 20,
    },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 20,
      offset: 4,
    },
  },
};

const ModalAddRelease = ({ isOpen, onOk, onCancel }) => {
  const [form] = Form.useForm();

  const onSubmit = () => {
    console.log("cek form", form.getFieldValue());
    onOk();
  };

  return (
    <Modal
      title="Add Release"
      open={isOpen}
      onOk={onSubmit}
      onCancel={onCancel}
    >
      <div className="container_modal">
        <Separator />

        <Form form={form} name="release_add">
          <Form.Item
            name="release_title"
            label="Release Title"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="release_date"
            label="Release Date"
            rules={[
              {
                required: true,
                message: "Please select time!",
              },
            ]}
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
                      label={"Release Title"}
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
                            message: "Please input release title.",
                          },
                        ]}
                        noStyle
                      >
                        <Input
                          placeholder="release title"
                          style={{ width: "60%" }}
                        />
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
              </>
            )}
          </Form.List>
        </Form>
      </div>
    </Modal>
  );
};

export default ModalAddRelease;
