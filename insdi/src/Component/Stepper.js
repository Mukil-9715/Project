import React from 'react'
import { Steps } from "antd";
import {
  SolutionOutlined,
  UserOutlined,
  CreditCardOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

const Stepper = () => {
  return (
    <div className="buyPage">
        <div className="step">
          <Steps
            items={[
              {
                title: "Login",
                status: "finish",
                icon: <UserOutlined />,
              },
              {
                title: "Delivery Address",
                status: "finish",
                icon: <SolutionOutlined />,
              },
              {
                title: "Order Summary",
                status: "process",
                icon: <ProfileOutlined />,
              },
              {
                title: "Payment",
                status: "wait",
                icon: <CreditCardOutlined />,
              },
            ]}
          />
        </div>
        <div></div>
      </div>
  )
}

export default Stepper