import { Form } from 'antd'
// import React, { useEffect, useState } from 'react'
import MaskedInput from 'react-text-mask'

export default function PhoneMask({phoneNumber,setPhoneNumber}) {

    const handleChange = (e) => {
      setPhoneNumber(e.target.value);
    };
    const validatePhoneNumber = (_, value) => {
      const phoneRegex = /^\d{2} \d{3}-\d{2}-\d{2}$/; 
      if (!value || phoneRegex.test(value)) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("Telefon raqamingizni to'gri kiriting!"));
    };
    return (
        <Form.Item
        label={<span style={{ color: "#ffffff" }}>Telefon raqamingiz        </span>}
        name="phoneNumber"
        rules={[
          { required: true, message: "Telefon raqamingizni kiriting iltimos" },
          { validator: validatePhoneNumber },
        ]}
      >
        <div style={{ display: "flex" }}>
          <span
            style={{
              background: "rgb(141 130 186)",
              border: "1px solid #d9d9d9",
              padding: "6px 11px",
              fontSize: "16px",
              lineHeight: "25px",
              fontWeight:"500",
              borderRadius:"6px 0 0 6px"
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
            className="ant-input"
            placeholder="XX XXX-XX-XX"
            guide={false}
            value={phoneNumber}
            onChange={handleChange}
            style={{
                width:"100%",
                border:"1px solid",
                outline:"none",
                borderRadius:"0 6px 6px 0",
                padding:"10px"
            }}
          />
        </div>
      </Form.Item>
    )
}
