import '../../assets/css/Dashboard.css';
import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, LineChart, Line,
} from 'recharts';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from '../nav/Navbar';

const Dashboard = () => {
  const [userData] = useState({
    numberOfUsers: 96,
    numberOfResumes: 150,
    numberOfTemplates: 100,
    numberOfOnlineUsers: 50,
  });

  const barChartData = [
    { name: 'Active Users', value: userData.numberOfUsers },
    { name: 'Resumes Created', value: userData.numberOfResumes },
    { name: 'Available Templates', value: userData.numberOfTemplates },
    { name: 'Members', value: userData.numberOfOnlineUsers },
  ];

  const pieChartData = [
    { name: 'Active Users', value: userData.numberOfUsers },
    { name: 'Resumes Created', value: userData.numberOfResumes },
    { name: 'Available Templates', value: userData.numberOfTemplates },
    { name: 'Members', value: userData.numberOfOnlineUsers },
  ];

  // const lineChartData = [
  //   { name: 'Day 1', value: 20 },
  //   { name: 'Day 2', value: 45 },
  //   { name: 'Day 3', value: 28 },
  //   { name: 'Day 4', value: 62 },
  //   { name: 'Day 5', value: 35 },
  // ];

  const COLORS = ['#FF5733', '#33FF5B', '#339AFF', '#FFA500'];

  return (
    <Container fluid className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <h1>Dashboard</h1>

        <Row className="horizontal-cards">
          {barChartData.map((data, index) => (
            <Col key={index} lg={3} md={6} className="mb-4">
              <Card className="dashboard-card">
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Text>{data.value}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="chart-container">
          <div className="chart chart-pie">
            <PieChart width={300} height={350}>
              <Pie
                data={pieChartData}
                cx={145}
                cy={130}
                innerRadius={30}
                outerRadius={130}
                paddingAngle={10}
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend className="chart-legend" />
            </PieChart>
          </div>

          <div className="chart chart-bar">
            <BarChart width={570} height={350} data={barChartData}>
              <XAxis dataKey="name" tick={{ fill: '#333', fontSize: 14 }} />
              <YAxis tick={{ fill: '#333', fontSize: 14 }} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend className="chart-legend" />
              <Bar dataKey="value" fill="#339AFF" barSize={60} />
            </BarChart>
          </div>

          {/* <div className="chart chart-line">
            <LineChart width={600} height={300} data={lineChartData}>
              <XAxis dataKey="name" tick={{ fill: '#333', fontSize: 14 }} />
              <YAxis tick={{ fill: '#333', fontSize: 14 }} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend className="chart-legend" />
              <Line type="monotone" dataKey="value" stroke="#33FF5B" strokeWidth={2} />
            </LineChart>
          </div> */}
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
