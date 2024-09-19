import { useEffect, useState } from "react";
import { Row, Col, Card, Typography, Divider } from "antd";
import "./App.css";

const { Title } = Typography;
const { Meta } = Card;

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/items")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <header>
        <Title>StoreBot</Title>
        <Divider />
      </header>
      <Row gutter={16}>
        {data &&
          data.map((item, index) => (
            <Col span={6} key={index} gutter={20}>
              <Card
                bordered={false}
                cover={<img alt={item.name + " picture"} src={item.img} />}
              >
                <Meta title={item.name} description={item.price} />
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default App;
