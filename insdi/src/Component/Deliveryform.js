// import React from "react";
import React, { useState } from "react";
import "./Pages/LoginPage.css";
import "../Component/nav.css";
import { Button, Checkbox, Form, Input } from "antd";

const Deliveryform = () => {
  const handleForm = (values) => {
    console.log(values);
  };
  return (
    <div className="loginconfirm">
      <div className="brh-loginconfirm ">
        {/* <div className="width8 flex"> */}

        <Form
          name="detailforms"
          onFinish={handleForm}
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
          <Form.Item name="Name">
            {/* <label>Name</label> */}
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item name="Mobile Number">
            <Input placeholder="Mobile Number" />
          </Form.Item>
          <Form.Item name="Pincode">
            <Input placeholder="Pincode" />
          </Form.Item>
          <Form.Item name="Locality">
            <Input placeholder="Locality" />
          </Form.Item>
          <Form.Item name="City/District/Town">
            <Input placeholder="City/District/Town" />
          </Form.Item>
          <Form.Item name="State">
            <Input placeholder="State" />
          </Form.Item>
          <Form.Item name="Landmark">
            <Input placeholder="Landmark" />
          </Form.Item>
          <Form.Item name="Alternative Phone">
            <Input placeholder="Alternative Phone" />
          </Form.Item>
          <div className="flex halwidth">
            <Form.Item>
              <Button htmlType="submit" >
                {" "}
                Save and Delivery Here
              </Button>
              <div>
                <a herf>Cancel </a>
              </div>
            </Form.Item>
          </div>
        </Form>

        {/* </div> */}
      </div>
    </div>
  );
};

export default Deliveryform;
