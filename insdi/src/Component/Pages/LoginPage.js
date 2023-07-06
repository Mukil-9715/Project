import React from "react";
import "./LoginPage.css";
import { Col, Row } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
// import Home from "./Home";

const LoginPage = () => {
  const usenavigate=useNavigate();
  const onFinish = (values) => {
    // console.log("hi",values.email);

    const loginHandle = () => {
      // e.preventDefault();
      if (validation()) {
        fetch("http://localhost:3000/posts/")
          .then((res) => {
            return res.json();
          })
          .then((resp) => {
            // debugger
            resp.map((response) => {
              // console.log(resp[0].password === values.password);
              if (response.email !== values.email) {
                alert("please enter valid emails");
              } else if (response.email === values.email) {
                if (response.password === values.password) {
                  usenavigate('/Home')
                  console.log("success");
                } else {
                  alert("please enter valid password");
                }
              }
            });
          })
          .catch((err) => {
            alert("err");
          });
      }
      //   if (values.remember===true){
      //   console.log("Received values of form: ", values);
      //  }
    };
    const validation = () => {
      let result = true;
      if (values.email === "" || values.email === null) {
        result = false;
        alert("Please Enter Username");
      }
      if (values.password === "" || values.password === null) {
        result = false;
        alert("Please Enter Password");
      }
      return result;
    };
    loginHandle();
  };
  return (
    <div className="">
      {/* <Divider orientation="center">Percentage columns</Divider> */}
      <Row className="container">
        <Col className="left flexl" flex="650px">
          <div className="parent brl backgroundImage ">
            {/* <img src="https://images.pexels.com/photos/379960/pexels-photo-379960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="200" />  */}
          </div>
        </Col>
        <Col className="right flexr" flex="auto">
          <div className="parent flexcolst brr">
            <div className="th padbt">Log in to INSDI </div>
            <div className="tp padbt">
              Get access to your Orders, Wishlist and Recommendations
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
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <a className="login-form-forgot" href="">
                    Forgot password
                  </a>
                </Form.Item>

                <Form.Item>
                  {/* <Link to="/Home"> */}
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    // onClick={onFinish}
                  >
                    Log in
                  </Button>
                  {/* </Link> */}
                  Don't havee an account?{" "}
                  <Link to="/Registerform">Register now!</Link>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
