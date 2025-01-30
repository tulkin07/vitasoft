import React, { useState } from 'react'
import { Form, Input, Spin } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import PhoneMask from './PhoneMask';
import { message } from 'antd';
// import 'antd/dist/antd.css';

const botToken = "7809914279:AAHoGUimWWXyU9rQqhA8S5L3BvLcChoIkrM";
const chatId = "-1002286098294";
export default function Contact() {
    const [form] = Form.useForm();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading, setLoading] = useState(false)

    const handleSubmit = (values) => {
        setLoading(true)
        const now = new Date();
        const formattedDate = now.toLocaleString();
        const text = `
           📝 SAYTDAN
        👤 F.I.SH: ${values.name}
        📞 Telefon:+998${values.phoneNumber.replace(/\D/g, "")}
        📅 Vaqt: ${formattedDate}
        📂 Loyiha turi: ${values.type || ""}
        🖊️ Loyiha tavsifi: ${values.description || ""}
          `;
        const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;



        fetch(telegramApiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                parse_mode: "HTML",
            }),
        }).then(() => {
            message.success("Amaliyot muvaffaqiyatli bajarildi!\n Tez orada o'zimiz siz bilan bog'lanamiz.",4);
            form.resetFields(); // Formani tozalash
            setPhoneNumber("")
        }).catch((e) => {
            message.error('Amaliyot muvaffaqiyatli bajarilmadi!');
        })
            .finally(() => {
                setLoading(false)
            })

    };
    return (
        <div className='contact mt-100 ' id='contact'>
            <div className='container '>
                <h1 className='title text-center' data-aos="fade-up">Bog'lanish</h1>
                <div className='text-center mt-10'>
                    {/* <img src={line} alt="" data-aos="fade-up"  /> */}
                </div>
                <Form form={form} layout="vertical" onFinish={handleSubmit} className='mt-50'>
                    <div className='contact__row mt-50'  >
                        <div className='contact__col' data-aos="fade-up">
                            <Form.Item
                                label={<span style={{ color: "#ffffff" }}>F.I.SH</span>}
                                name="name"
                                rules={[{ required: true, message: "Ismingizni kirting iltimos!" }]}
                            >
                                <Input autoComplete='off' className="custom-input" placeholder="Ismingizni kirting" />
                            </Form.Item>
                        </div>
                        <div className='contact__col' data-aos="fade-up">
                            <PhoneMask phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />

                        </div>
                        <div className='contact__col' data-aos="fade-up">
                            <Form.Item
                                label={<span style={{ color: "#ffffff" }}>Loyiha turi                                </span>}
                                name="type"
                            >
                                <Input autoComplete='off' className="custom-input" placeholder="Loyiha turini kiting " />
                            </Form.Item>
                        </div>

                        <div className='contact__col' data-aos="fade-up" >
                            <Form.Item
                                label={<span style={{ color: "#ffffff" }}>Loyiha tavsifi </span>}
                                name="description"
                            >
                                <TextArea autoComplete='off' className="custom-input" rows={4} placeholder="Loyiha tavsifi kiriting" />
                            </Form.Item>
                        </div>
                        <div className='contact__col text-center' style={{ alignSelf: "end", width: "100%" }} >
                            <Form.Item>
                                <button data-aos="fade-up" className='contact__submit__btn btn-info mt-10'
                                    type="submit"
                                    disabled={loading}
                                >
                                    {
                                        loading ? <><Spin size='small' /> Yuborish </> : 'Yuborish'
                                    }

                                </button>
                            </Form.Item>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}
