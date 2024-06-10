// import React from "react";
// import { Form, Input, Button, Row, Col, Typography, Card } from "antd";

// const { Title } = Typography;

// const Contact = () => {
//   return (
//     <Card style={{ margin: "20px", padding: "20px" }}>
//       <Title level={2} style={{ textAlign: "center" }}>Bizimlə Əlaqə</Title>
//       <Row gutter={[16, 16]}>
//         <Col xs={24} md={12}>
//           <Form
//             name="contact"
//             layout="vertical"
//             style={{ maxWidth: "100%" }}
//             onFinish={(values) => console.log(values)}
//           >
//             <Form.Item
//               name="name"
//               label="Sizin Adiniz"
//               rules={[{ required: true, message: 'Adinizi daxil edin.' }]}
//             >
//               <Input placeholder="Sizin Adiniz" />
//             </Form.Item>
//             <Form.Item
//               name="email"
//               label="Sizin Email"
//               rules={[
//                 { required: true, message: 'Emailinizi daxil edin.' },
//                 { type: 'email', message: 'Düzgün bir email adresi daxil edin.' }
//               ]}
//             >
//               <Input placeholder="Sizin Email" />
//             </Form.Item>
//             <Form.Item
//               name="subject"
//               label="Movzu"
//               rules={[{ required: true, message: 'Movzunu daxil edin.' }]}
//             >
//               <Input placeholder="Movzu" />
//             </Form.Item>
//             <Form.Item
//               name="message"
//               label="Sizin Mesajiniz"
//               rules={[{ required: true, message: 'Mesajinizi daxil edin.' }]}
//             >
//               <Input.TextArea rows={4} placeholder="Sizin Mesajiniz" />
//             </Form.Item>
//             <Form.Item>
//               <Button type="primary" htmlType="submit" style={{ backgroundColor: "#4CAF50", borderColor: "#4CAF50" }}>
//                 Mesaj Gönder
//               </Button>
//             </Form.Item>
//           </Form>
//         </Col>
//         <Col xs={24} md={12}>
//           <iframe
//             title="Location Map"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509125!2d144.95592831562012!3d-37.817209979751504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727d0d80b38d8!2sVictoria!5e0!3m2!1sen!2sau!4v1644028341834!5m2!1sen!2sau"
//             width="100%"
//             height="400px"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </Col>
//       </Row>
//     </Card>
//   );
// };

// export default Contact;

import React from "react";
import { Form, Button, Row, Col,Card } from "antd";
import Headings from "../components/childrenComponentss/Headings";
import { useTranslation } from "react-i18next";
const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <Card style={{ margin: "20px", padding: "20px" }}>
      <Headings head={t("contact_us")} />
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Form name="contact" layout="vertical" style={{ maxWidth: "100%" }} onFinish={(values) => console.log(values)}>
            <Form.Item className=" form_item" name="name" rules={[{ required: true, message: t("message1") }]}>
              <input placeholder={t("label1")} />
            </Form.Item>
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <Form.Item
                  name="email"
                  className=" form_item"
                  rules={[
                    { required: true, message: t("message2") },
                    { type: "email", message: t("message3") },
                  ]}
                >
                  <input placeholder={t("label2")} />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item name="subject" className=" form_item" rules={[{ required: true, message: t("message4") }]}>
                  <input placeholder={t("label3")} />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item name="message" rules={[{ required: true, message: t("message5") }]}>
              <textarea rows={4} placeholder={t("label4")} />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "#4CAF50",
                  borderColor: "#4CAF50",
                  padding: "0 30px",
                }}
              >
                {t("send_message")}
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col xs={24} md={12}>
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194472.76853012154!2d49.690149090376366!3d40.39473700796155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrw7w!5e0!3m2!1str!2saz!4v1717940264796!5m2!1str!2saz"
            width="100%"
            height="400px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Card>
  );
};

export default ContactForm;
