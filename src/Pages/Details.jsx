import React from "react";
import { Card, Col, Row, Table, Typography, Image, Button } from "antd";
import { useMediaQuery } from "react-responsive";
import banner1 from "./../assets/banner.jpg";
import { WhatsAppOutlined } from "@ant-design/icons";
import CarouselDetails from "../components/childrenComponentss/Carousels/CarouselDetails";

const { Title, Text } = Typography;

const product = {
  id: 1,
  name: "11",
  price: 11,
  cameraCount: 11,
  doorCount: 11,
  coolingTrough: "1",
  power: "1",
  volume: 1,
  energy: "1",
  coolFactor: "1",
  climate: "1",
  degree: 1,
  description: "1",
  brandName: "Brand",
  subCategoryName: "Testin",
  subCategoryId: 3,
  categoryId: 4,
  categoryName: "Testing",
  brandId: 1,
  number: 3,
  stock: 39,
  createDate: "0001-01-01T00:00:00",
  updateDate: "2024-05-30T17:28:43.839136",
  productImages: [
    {
      id: 3,
      imageUrl: "https://smartsistem.az/images/product/a11fbc44-d8fc-4d1b-8c9d-e14ee2037e9d1.png",
      isPrimary: false,
    },
    {
      id: 6,
      imageUrl: "https://smartsistem.az/images/product/e0640926-7048-46bf-ba36-65cf82f4962f2.png",
      isPrimary: true,
    },
    {
      id: 7,
      imageUrl: "https://smartsistem.az/images/product/cf1afc9a-70f6-4a8f-b8ba-400c9b9d028f3.png",
      isPrimary: false,
    },
  ],
};

const getMainImage = (images) => {
  const primaryImage = images.find((image) => image.isPrimary);
  return primaryImage ? primaryImage.imageUrl : images[0].imageUrl;
};

const getSecondaryImages = (images) => {
  return images.filter((image) => !image.isPrimary).map((image) => image.imageUrl);
};

const ProductDetail = () => {
  const isMiddleDesktop = useMediaQuery({ minWidth: 992 });
  const isBigDesktop = useMediaQuery({ minWidth: 1100 });

  const mainImage = getMainImage(product.productImages);
  const secondaryImages = getSecondaryImages(product.productImages);

  const features = [
    { key: "Brend", value: product.brandName },
    { key: "Kameraların sayı", value: product.cameraCount },
    { key: "Qapıların sayı", value: product.doorCount },
    { key: "Soyutma növü", value: product.coolingTrough },
    { key: "Dondurucu güc", value: product.power },
    { key: "Dondurucu kameranın həcmi, l", value: product.volume },
    { key: "Enerji sərfiyyat sinfi", value: product.energy },
    { key: "Soyuducu amil", value: product.coolFactor },
    { key: "İqlim sinfi", value: product.climate },
    { key: "Səs dərəcəsi, dB", value: product.degree },
  ];

  const columns = [
    {
      title: "Xüsusiyyət",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Dəyər",
      dataIndex: "value",
      key: "value",
    },
  ];

  return (
    <Card className="details" style={{ margin: "20px" }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={isMiddleDesktop ? 20 : 24}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Image width="100%" src={mainImage} alt="Ana Resim" style={{ marginBottom: "10px" }} />
              <Row gutter={[10, 10]}>
                {secondaryImages.map((image, index) => (
                  <Col key={index} xs={8}>
                    <Image width="100%" src={image} alt={`Yan Resim ${index + 1}`} style={{ cursor: "pointer" }} />
                  </Col>
                ))}
              </Row>
            </Col>
            <Col xs={24} md={12}>
              <Title level={3}>{product.name}</Title>
              <Text
                style={{
                  backgroundColor: "#ff5722",
                  padding: "5px 10px",
                  display: "inline-block",
                  color: "#fff",
                  fontSize: "20px",
                  borderRadius: "5px",
                }}
              >
                {product.price} ₼
              </Text>
              <Button
                type="primary"
                icon={<WhatsAppOutlined />}
                href="https://wa.me/+994557999399?text=Salam, məlumat almaq istəyirəm."
                target="_blank"
                style={{
                  marginLeft: "10px",
                  backgroundColor: "#25D366",
                  borderColor: "#25D366",
                  fontSize: "20px",
                }}
                className=" py-5"
              >
                WhatsApp
              </Button>
              <Table
                dataSource={features}
                columns={columns}
                pagination={false}
                rowKey="key"
                size="small"
                style={{ marginTop: "20px" }}
              />
            </Col>
          </Row>
        </Col>
        {isMiddleDesktop && (
          <Col
            xs={24}
            md={isBigDesktop ? 4 : 2}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <CarouselDetails {...{ isBigDesktop, banner1 }} />
          </Col>
        )}
      </Row>
    </Card>
  );
};

export default ProductDetail;
