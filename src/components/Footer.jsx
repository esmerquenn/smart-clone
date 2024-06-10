

import React from "react";
import { Layout, Row, Col, Typography, Space } from "antd";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // Düzgün import
const { Footer: Foot } = Layout;
// const { Link } = Typography;

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Foot className="footer px-[20px] md:px-[50px] py-[20px]" style={{ backgroundColor: "#f0f0f0", textAlign: "center" }}>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={8} lg={6}>
          <div className="col-footer">
            <div className="social-icons" style={{ marginBottom: "20px" }}>
              <Typography.Link href="https://www.facebook.com/profile.php?id=100091808678424" target="_blank">
                <FacebookOutlined style={{ fontSize: "24px", margin: "0 10px" }} />
              </Typography.Link>
              <Typography.Link href="https://www.tiktok.com/@smartsistem.az" target="_blank">
                <TwitterOutlined style={{ fontSize: "24px", margin: "0 10px" }} />
              </Typography.Link>
              <Typography.Link href="https://www.instagram.com/smart_home_elektronics/" target="_blank">
                <InstagramOutlined style={{ fontSize: "24px", margin: "0 10px" }} />
              </Typography.Link>
              <Typography.Link href="https://wa.me/+994557999399?text=Salam, məlumat almaq isteyirem." target="_blank">
                <WhatsAppOutlined style={{ fontSize: "24px", margin: "0 10px" }} />
              </Typography.Link>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Typography.Link className="color" href="mailto:orxan367.ov@gmail.com" target="_blank">
                {t("email")}: smartsistems@info.az
              </Typography.Link>
              <br />
              <Typography.Link className="color" href="tel:+994557999399" target="_blank">
                {t("tel")}: +994 55 799 93 99
              </Typography.Link>
            </div>
          </div>
        </Col>
        <Col xs={24} md={8} lg={6}>
          <div className="col-footer">
            <Space direction="vertical" size="middle" className="footer-menu">
              <Link className="color" to="/">
                {t("home_page")}
              </Link>
              <Link className="color" to="/service">
                {t("service")}
              </Link>
              <Link className="color" to="/about">
                {t("about")}
              </Link>
              <Link className="color" to="/contact">
                {t("contact")}
              </Link>
            </Space>
          </div>
        </Col>
        <Col xs={24} md={16} lg={12}>
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194472.76853012154!2d49.690149090376366!3d40.39473700796155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrw7w!5e0!3m2!1str!2saz!4v1717940264796!5m2!1str!2saz"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Foot>
  );
};

export default Footer;
