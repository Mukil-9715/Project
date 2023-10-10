import React from 'react'
import { Steps } from "antd";
import {
  SolutionOutlined,
  UserOutlined,
  CreditCardOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

const status ={
  true:"finish",
  false:"wait",
}

const Stepper = () => {
  return (
    <div className="buyPage">
        <div className="step">
          <Steps
            items={[
              {
                title: "Login",
                status: status.true,
                icon: <UserOutlined />,
              },
              {
                title: "Delivery Address",
                status: status.true,
                icon: <SolutionOutlined />,
              },
              {
                title: "Order Summary",
                status: status.true,
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