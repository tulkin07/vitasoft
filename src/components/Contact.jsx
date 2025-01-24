import React from 'react'
import line from '../assets/svg/line.svg'
import { Form, Input, Select } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import MaskedInput from 'react-text-mask';
import PhoneMask from './PhoneMask';
const { Option } = Select;
export default function Contact() {
    const handleSubmit = (values) => {
        console.log("Form values:", values);
    };
    return (
        <div className='contact mt-100'>
            <div className='container'>
                <h1 className='title text-center'>Bog'lanish</h1>
                <div className='text-center mt-10'>
                    <img src={line} alt="" />
                </div>
                <Form layout="vertical" onFinish={handleSubmit} className='mt-50'>
                    <div className='contact__row mt-50'  >
                        <div className='contact__col'>
                            <Form.Item
                                label={<span style={{ color: "#ffffff" }}>Enter your name</span>}
                                name="name"
                                rules={[{ required: true, message: "Please enter your name!" }]}
                            >
                                <Input autoComplete='off' className="custom-input" placeholder="Enter your name" />
                            </Form.Item>
                        </div>
                        <div className='contact__col'>
                            <PhoneMask/>
                            {/* <Form.Item
                                label={<span style={{ color: "#ffffff" }}>Enter your phone number</span>}
                                name="phoneNumber"
                                rules={[
                                    { required: true, message: "Please enter your phone number!" },
                                ]}
                            >
                                <Input.Group compact>
                                    <span style={{ display: "flex" }}>
                                        <span
                                            style={{
                                                background: "#f0f0f0",
                                                border: "1px solid #d9d9d9",
                                                padding: "4px 11px",
                                                display: "inline-block",
                                                fontSize: "16px",
                                                lineHeight: "28px",
                                                borderRadius: "2px 0 0 2px",
                                                fontWeight:"700",
                                                color:"rgb(129, 118, 175)"
                                            }}
                                        >
                                            +998
                                        </span>
                                        <MaskedInput
                                            mask={[
                                                /\d/,
                                                /\d/,
                                                " ",
                                                /\d/,
                                                /\d/,
                                                /\d/,
                                                "-",
                                                /\d/,
                                                /\d/,
                                                "-",
                                                /\d/,
                                                /\d/,
                                            ]}
                                            placeholder="XX XXX-XX-XX"
                                            className="ant-input"
                                            style={{
                                                width: "100%",
                                                borderRadius: "0 6px 6px 0",
                                                outline:"none",
                                                paddingLeft:"10px",
                                                border:"1px solid red"
                                            }}
                                        />
                                    </span>
                                </Input.Group>
                            </Form.Item> */}
                        </div>
                        <div className='contact__col'>
                            <Form.Item
                                    label={<span style={{ color: "#ffffff" }}>Enter your name</span>}
                                name="companyName"
                            >
                                <Input autoComplete='off' className="custom-input" placeholder="Enter your Company name" />
                            </Form.Item>
                        </div>

                        <div className='contact__col' >
                            <Form.Item
                                label={<span style={{ color: "#ffffff" }}>Enter your name</span>}
                                name="description"
                            >
                                <TextArea autoComplete='off' className="custom-input" rows={4} placeholder="Project description" />
                            </Form.Item>
                        </div>
                        <div className='contact__col text-center' style={{ alignSelf: "end", width: "100%" }} >
                            <Form.Item>
                                <button className='contact__submit__btn btn-info'
                                    type="submit"
                                >
                                    Yuborish
                                </button>
                            </Form.Item>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}
