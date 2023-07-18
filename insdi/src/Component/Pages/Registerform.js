import React from "react";
import "./LoginPage.css";
import { Col, Row } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify"; 


const Registerform = () => {
  const usenavigate=useNavigate()
  const onFinish = (values) => {
    const handlesubmit = (e) => {
      // e.preventDefault();
      let obj = values;
      if (values.termsandcondition === true) {
        fetch("http://localhost:3000/posts", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(obj),
        })
        .then((res) => {
          
          // toast.success("Registraction Successfully.");
          console.log(obj);
          localStorage.setItem('batch 13', res )
          debugger
          // usenavigate('/')
          
        })
        .catch((err) => {
          // toast.error("Failed : " + err.message);
        });
      }
    };
    const passwordcheck =() =>{
      if (values.password===values.confirmpassword){
        handlesubmit();
        
      }
    }
    passwordcheck()
  };
  return (
    <div className="">
      <Row className="container">
        <Col className="leftReg flexl" flex="650px">
          <div className="parent brl backgroundImageReg ">
            {/* <img src="https://images.pexels.com/photos/379960/pexels-photo-379960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="200" />  */}
          </div>
        </Col>
        <Col className="right flexr" flex="auto">
          <div className="parent flexcolst brr">
            <div className="th padbt">Welcome to INSDI </div>
            <div className="tp padbt1">Looks like you're new here!</div>
            <div className="tp padbt">
              Sign up with your email to get started
            </div>
            <div>
              <Form
                name="normal_login"
                className="login-forms"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Email"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item
                  name="confirmpassword"
                  rules={[
                    {
                      required: true,
                      message: "Your Password doesn't match",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Confirm Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="termsandcondition" valuePropName="checked" noStyle>
                    <Checkbox>
                      By continuing, you agree to INSDI's{" "}
                      <Link to="/">Terms of Use</Link> and{" "}
                      <Link to="/">Privacy Policy.</Link>
                    </Checkbox>
                  </Form.Item>
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    // onClick={onFinish}

                  >
                    Sign Up
                  </Button>
                  Or <Link to="/">Log in </Link>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Registerform;
