import React from "react";
import { Col, Card, Row, Image } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import electricalServiceBadge from "../assests/images/electricalServiceBadge.svg";
import highVoltage from "../assests/images/highVoltage.svg";
import electricalServicesPink from "../assests/images/electricalServicesPink.svg";
import coins from "../assests/images/coins.svg";
import gift from "../assests/images/gift.svg";
import bestseller from "../assests/images/best-seller.svg";
import Badges from "../components/Badges";
import MovementCard from "../components/MovementCard";
import Topbar from "../components/Topbar";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import styled from "styled-components";
import { useState } from "react";

const LatestAchiveMentData = [
  {
    name: "Electrical Services",
    img: electricalServiceBadge,
    bg: "linear-gradient(137deg, rgba(28,28,28,1) 0%, rgba(103,101,101,1) 100%)",
  },
  {
    name: "High Voltage",
    img: highVoltage,
    bg: "linear-gradient(137deg, rgba(183,100,32,1) 0%, rgba(32,32,32,1) 100%)",
  },
  {
    name: "Electrical Services",
    img: electricalServicesPink,
    bg: "linear-gradient(90deg, rgba(239,27,126,1) 0%, rgba(124,4,60,1) 100%)",
  },
];

const movementCardData = [
  {
    id: 1,
    icon: coins,
    bg: "linear-gradient(141deg, rgba(219,143,90,1) 0%, rgba(142,68,17,1) 100%)",
  },
  {
    id: 2,
    icon: gift,
    bg: "linear-gradient(180deg, rgba(236,89,163,1) 0%, rgba(154,34,94,1) 100%)",
  },
  {
    id: 1,
    icon: bestseller,
    bg: "linear-gradient(95deg, rgba(82,176,98,1) 0%, rgba(46,85,54,1) 100%)",
  },
];

const goalCard = [
  {
    title: "Incentive Achivements",
    progressValue: 10,
    bg: "#6081C5",
    progressTitle: 3,
  },
  {
    title: "Top Achievers",
    progressValue: 30,
    bg: "#C985C5",
    progressTitle: 17,
  },
  {
    title: "Master Blaster for Quarter",
    progressValue: 30,
    bg: "#D5BF69",
    progressTitle: 3,
  },
  {
    title: "Super Quarter 1",
    progressValue: 30,
    bg: "#E8A373",
    progressTitle: 17,
  },
];

const Home = () => {
  const [activeOptFilter, setActiveOptFilter] = useState(0);
  const [activeOptFilter2, setActiveOptFilter2] = useState(0);
  return (
    <div>
      <Sidebar />
      <div className="main-container">
        <Row className="mt-3 mb-3">
          <Col
            md={5}
            lg={5}
            sm={5}
            l
            style={{
              border: "1px solid #707070",
              boxShadow: "box-shadow: 5px 6px 10px -3px rgba(112,112,112,1)",
              borderRadius: "10px",
              marginLeft: "10px",
            }}
          >
            <Row style={{ padding: "10px 20px 20px 20px" }}>
              <Col>
                <p
                  className="primary"
                  style={{ fontSize: "22px", marginBottom: 0 }}
                >
                  Total Points
                </p>
                <p className="home-point">2000</p>
              </Col>

              <Col style={{ textAlign: "right" }}>
                <div className="rank-bg">
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: 30,
                      paddingTop: 45,
                      marginBottom: 0,
                      fontWeight: 500,
                    }}
                  >
                    5
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: 15,
                      marginBottom: 0,
                      fontWeight: 900,
                    }}
                  >
                    Rank
                  </p>
                </div>
              </Col>

              <Col
                md={8}
                lg={8}
                sm={8}
                className="p-0 mt-1"
                style={{ textAlign: "left" }}
              >
                <div
                  onClick={() => setActiveOptFilter(0)}
                  className={
                    0 === activeOptFilter ? "badgeActive badge" : "badge"
                  }
                  style={{
                    background:
                      0 === activeOptFilter
                        ? "#fad6a5 !important"
                        : "white !important",
                    borderRadius: "20px",
                    padding: 10,
                  }}
                >
                  <span>Latest Achivements</span>
                </div>
              </Col>

              <Col
                md={3}
                lg={3}
                sm={{ span: 3, offset: 1 }}
                className="mt-1"
                style={{ textAlign: "center" }}
              >
                <div
                  onClick={() => setActiveOptFilter(1)}
                  className={
                    1 === activeOptFilter ? "badgeActive badge" : "badge"
                  }
                  style={{
                    borderRadius: "20px",
                    background:
                      1 === activeOptFilter
                        ? "#fad6a5 !important"
                        : "white !important",
                    padding: 10,
                    marginRight: 5,
                  }}
                >
                  <span>Badges</span>
                </div>
              </Col>

              {LatestAchiveMentData.map((data, index) => (
                <Badges data={data} index={index} />
              ))}

              <h4 className="text-start mt-4 p-0">Movements</h4>
              {movementCardData.map((data, index) => (
                <MovementCard data={data} index={index} />
              ))}
            </Row>
          </Col>
          <Col md={6} lg={6} sm={6} className="ms-2 me-0 pe-0">
            <Topbar />
            <h4 className="text-start mt-4 p-0 mb-1">
              <span style={{ borderBottom: "2px solid #fad6a5" }}>Oppor</span>
              tunities
            </h4>
            <Row className="mt-4" style={{ fontSize: "13px" }}>
              <Col sm={12} lg={3} md={6} className="mb-1">
                <div
                  onClick={() => setActiveOptFilter2(0)}
                  className={
                    0 === activeOptFilter2 ? "badgeActive badge" : "badge"
                  }
                  style={{
                    background:
                      0 === activeOptFilter2
                        ? "#fad6a5 !important"
                        : "white !important",
                    borderRadius: "20px",
                    padding: 10,
                    fontSize: 14,
                  }}
                >
                  <span>Ending Soon</span>
                </div>
              </Col>

              <Col sm={12} lg={3} md={6} className="mb-1">
                <div
                  onClick={() => setActiveOptFilter2(1)}
                  className={
                    1 === activeOptFilter2 ? "badgeActive badge" : "badge"
                  }
                  style={{
                    background:
                      1 === activeOptFilter2
                        ? "#fad6a5 !important"
                        : "white !important",
                    borderRadius: "20px",
                    border: "1px solid #24272C",
                    padding: 10,
                    fontSize: 14,
                  }}
                >
                  <span>In Progress</span>
                </div>
              </Col>

              <Col sm={12} lg={3} md={6} className="mb-1">
                <div
                  onClick={() => setActiveOptFilter2(2)}
                  className={
                    2 === activeOptFilter2 ? "badgeActive badge" : "badge"
                  }
                  style={{
                    background:
                      0 === activeOptFilter2
                        ? "#fad6a5 !important"
                        : "white !important",
                    borderRadius: "20px",
                    border: "1px solid #24272C",
                    padding: 10,
                    fontSize: 14,
                  }}
                >
                  <span>Upcoming</span>
                </div>
              </Col>
              <Col sm={12} lg={3} md={6} className="mb-1">
                <div
                  onClick={() => setActiveOptFilter2(3)}
                  className={
                    3 === activeOptFilter2 ? "badgeActive badge" : "badge"
                  }
                  style={{
                    background:
                      0 === activeOptFilter2
                        ? "#fad6a5 !important"
                        : "white !important",
                    borderRadius: "20px",
                    border: "1px solid #24272C",
                    padding: 10,
                    fontSize: 14,
                  }}
                >
                  <span>No Progress</span>
                </div>
              </Col>
            </Row>

            <Row style={{ marginTop: 10 }}>
              {goalCard.map((data, index) => (
                <Col key={index} lg={6} md={6} sm={6} xs={12}>
                  <StyledBorderLessCard>
                    <Card.Text
                      style={{
                        fontSize: 12,
                        height: 35,
                        padding: 6,
                        margin: 0,
                      }}
                    >
                      {data.title}
                    </Card.Text>
                    <div style={{ padding: 20 }}>
                      <CircularProgressbarWithChildren
                        value={data.progressValue}
                        styles={buildStyles({
                          textSize: "15px",
                          backgroundColor: "#C985C5",
                          pathColor: data.bg,
                        })}
                      >
                        <span style={{ color: "#484848" }}>
                          {data.progressTitle}
                        </span>
                        <span style={{ color: "#484848" }}>Days Left</span>
                      </CircularProgressbarWithChildren>
                    </div>
                  </StyledBorderLessCard>
                </Col>
              ))}
            </Row>

            <h4 className="text-start mt-4 p-0 mb-1">
              <span style={{ borderBottom: "2px solid #fad6a5" }}>Your O</span>
              pinion Matters
            </h4>

            <Row>
              <Col xs={12}>
                <Image
                  src={require("../assests/images/opinion1.svg").default}
                  style={{ width: "99%" }}
                />
              </Col>
              <Col xs={12}>
                <Image
                  src={require("../assests/images/opinion2.svg").default}
                  style={{ width: "99%" }}
                />
              </Col>
              <Col xs={12}>
                <Image
                  src={require("../assests/images/opinion3.svg").default}
                  style={{ width: "99%" }}
                />
              </Col>
            </Row>

            <h4 className="text-start mt-4 p-0 mb-1">
              <span style={{ borderBottom: "2px solid #fad6a5" }}>What</span>
              's New?'
            </h4>

            <Row className="mt-3">
              <Col md={4} lg={4} sm={12}>
                <Image
                  src={require("../assests/images/Beans1.svg").default}
                  style={{
                    backgroundSize: "cover",
                    width: "100%",
                  }}
                />
              </Col>
              <Col md={4} lg={4} sm={12}>
                <Image
                  src={require("../assests/images/Beans2.svg").default}
                  style={{ backgroundSize: "cover", width: "100%" }}
                />
              </Col>
              <Col md={4} lg={4} sm={12}>
                <Image
                  src={require("../assests/images/Beans3.svg").default}
                  style={{ backgroundSize: "cover", width: "100%" }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

const StyledBorderLessCard = styled(Card)`
  height: 200px;
  margin-bottom: 20px;
  /* margin-top: 10px; */
  box-shadow: 0px 8px 30px #0000001a;
  border: 0;
`;

export default Home;
