# 🚗 Vehicle Telemetry Service

A serverless microservice for ingesting and retrieving vehicle telemetry data, built using **AWS Lambda**, **API Gateway**, and **Terraform**, with in-memory data storage.

This project demonstrates reusable AWS cloud components, infrastructure-as-code principles, and scalable design patterns for microservices. Designed as part of a portfolio to showcase cloud engineering and DevOps capabilities.

---

## 🔧 Features

- RESTful API with `POST` and `GET` endpoints
- In-memory data storage for simplicity
- Infrastructure provisioned using Terraform
- Easy deployment with AWS Lambda & API Gateway
- Ready for CI/CD integration with GitHub Actions

---

## 📦 Tech Stack

- **Language:** Node.js (Lambda Runtime)
- **Cloud:** AWS Lambda, API Gateway
- **IaC:** Terraform
- **CI/CD:** GitHub Actions (Coming Soon)

---

## 🚀 Endpoints

| Method | Endpoint | Description                      |
|--------|----------|----------------------------------|
| POST   | `/telemetry`       | Submit vehicle telemetry data |
| GET    | `/telemetry/{vehicleId}` | Retrieve telemetry for a vehicle |

---

## 🛠 Getting Started

### 1. Install Dependencies

```bash
npm install

---

##  💡 Future Improvements
- Add DynamoDB for persistent storage

- CloudWatch monitoring and alerting

- SNS integration for alerts

- CI/CD GitHub Actions for automated deployment

---

🙌 Author
Michelle Burton
www.michelle-burton.com | GitHub | Cloud Engineer & Front-End Specialist