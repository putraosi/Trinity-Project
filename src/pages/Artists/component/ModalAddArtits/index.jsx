/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Separator } from "../../../../components";
import { Api } from "../../../../services";
import { EDIT, formItemLayout } from "../../../../utils";
import "./ModalAddArtits.css";

const ModalAddArtits = ({ type, data, isOpen, onOk, onCancel }) => {
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && type === EDIT) {
      form.setFieldValue("artits_name", data?.firstName);
      form.setFieldValue("royalty_rate", data?.royaltyRate);
      form.setFieldValue("contact_no", data?.contractNum);
    }
  }, [isOpen]);

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
    const data = form.getFieldValue();

    try {
      await Api.post({
        url: "artists",
        body: {
          firstName: data?.artits_name,
          lastName: "", // DUMMY
          royaltyRate: data?.royalty_rate,
          contractNum: data?.contact_no,
          isPercentage: true, // DUMMY
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
        url: `artists/${data?.id}`,
        body: {
          firstName: field?.artits_name,
          lastName: "", // DUMMY
          royaltyRate: field?.royalty_rate,
          contractNum: field?.contact_no,
          isPercentage: true, // DUMMY
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
      title={type === EDIT ? "Edit Artist" : "Add Artist"}
      open={isOpen}
      onOk={() => onValidation()}
      confirmLoading={loading}
      onCancel={onCancel}
    >
      <div className="container_modal">
        <Separator />

        <Form form={form} name="recording_add" {...formItemLayout}>
          <Form.Item
            name="artits_name"
            label="Artist Name"
            rules={[{ required: true, message: "Artist Name is required!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="royalty_rate"
            label="Royalty Rate"
            rules={[{ required: true, message: "Royalty Rate is required!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="contact_no"
            label="Contract No"
            rules={[{ required: true, message: "Contract No is required!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default ModalAddArtits;
