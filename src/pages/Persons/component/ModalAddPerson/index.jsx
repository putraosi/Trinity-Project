import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import React from "react";
import { Separator } from "../../../../components";
import "./ModalAddPerson.css";
import { EDIT } from "../../../../utils";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const ModalAddPerson = ({ type, isOpen, onOk, onCancel }) => {
  const [form] = Form.useForm();

  const onSubmit = () => {
    onOk();
  };

  return (
    <Modal
      title={type === EDIT ? "Edit Person" : "Add Person"}
      open={isOpen}
      onOk={onSubmit}
      onCancel={onCancel}
    >
      <div className="container_modal">
        <Separator />

        <Form form={form} name="recording_add" {...formItemLayout}>
          <Form.Item
            name="recording_title"
            label="Recording Title"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="duration"
            label="Duration"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.List name="artits">
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
          </Form.List>
        </Form>
      </div>
    </Modal>
  );
};

export default ModalAddPerson;
