# 🚗 Vehicle Telemetry Service

A serverless microservice for ingesting and retrieving vehicle telemetry data, built using **AWS Lambda**, **API Gateway**, and **Terraform**, with in-memory data storage.

This project demonstrates reusable AWS cloud components, infrastructure-as-code (IaC) principles, and scalable design patterns for microservices. It was built to showcase cloud engineering and DevOps capabilities in a modern serverless architecture.

---

## 🔧 Features

- RESTful API with `POST` and `GET` endpoints
- In-memory storage for simplicity (DynamoDB ready)
- Infrastructure fully managed with Terraform
- Fast, scalable deployment using AWS Lambda + HTTP API Gateway
- Cloud-ready structure prepared for CI/CD with GitHub Actions

---

## 📦 Tech Stack

- **Language:** Node.js (Lambda runtime)
- **Infrastructure:** AWS Lambda, API Gateway (HTTP API), IAM
- **IaC Tooling:** Terraform
- **Testing:** curl, Postman
- **CI/CD:** GitHub Actions (coming soon)

---

## 🚀 API Endpoints

| Method | Endpoint                        | Description                      |
|--------|----------------------------------|----------------------------------|
| POST   | `/telemetry`                    | Submit vehicle telemetry data    |
| GET    | `/telemetry/{vehicleId}`        | Retrieve telemetry for a vehicle |

---

## 🛠 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/vehicle-telemetry-service.git
cd vehicle-telemetry-service
