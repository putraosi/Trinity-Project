import { Form, Input, Modal } from "antd";
import React from "react";
import { Separator } from "../../../../components";
import "./ModalAddArtits.css";

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

const ModalAddArtits = ({ isOpen, onOk, onCancel }) => {
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

        <Form form={form} name="recording_add" {...formItemLayout}>
          <Form.Item
            name="artits_name"
            label="Artits Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="royalty_rate"
            label="Royalty Rate"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="contact_no"
            label="Contact No"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default ModalAddArtits;
