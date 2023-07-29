// import React from "react";
import React, { useState } from "react";
import "./Pages/LoginPage.css";
import "../Component/nav.css";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";

const Deliveryform = () => {
  return (
    <div className="loginconfirm">
      <div className="brh-loginconfirm ">
        {/* <div className="width8 flex"> */}

        <Form
          //   labelCol={{
          //     span: 4,
          //   }}
          wrapperCol={{
            span: 14,
          }}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item label="Name">
            <Input />
          </Form.Item>
          <Form.Item label="Mobile Number">
            <Input />
          </Form.Item>
          <Form.Item label="Pincode">
            <Input />
          </Form.Item>
          <Form.Item label="Locality">
            <Input />
          </Form.Item>
          <Form.Item label="City/District/Town">
            <Input />
          </Form.Item>
          <Form.Item label="State">
            <Input />
          </Form.Item>
          <Form.Item label="Landmark">
            <Input />
          </Form.Item>
          <Form.Item label="Alternative Phone">
            <Input />
          </Form.Item>
          <div className="flex halwidth">
            <Button> Save and Delivery Here</Button>
            <div>
              <a herf>Cancel </a>
            </div>
          </div>
        </Form>

        {/* </div> */}
      </div>
    </div>
  );
};

export default Deliveryform;
