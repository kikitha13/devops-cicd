# DevOps CI/CD Assignment

This project demonstrates a complete DevOps workflow including Git branching strategy, CI/CD pipeline setup, cloud deployment, monitoring strategy, and production debugging practices.

---

## Project Overview

The application is a simple Node.js API that provides basic health check and task management endpoints.
The goal of this project is to demonstrate practical DevOps concepts such as CI/CD pipelines, Git workflows, cloud deployment, and monitoring strategies.

---

## Repository Structure

devops-cicd

│

├── app
│   ├── index.js
│   └── package.json

│

├── docs
│   ├── branching-strategy.md
│   ├── deployment.md
│   ├── monitoring.md
│   └── debugging.md

│

└── README.md

---

## Git Branching Strategy

This project follows a structured Git workflow.

**Branches used:**

* **main** → Production-ready code
* **develop** → Integration branch for testing
* **feature/*** → Feature development branches

**Workflow**

1. Create a feature branch from `develop`
2. Implement new functionality
3. Push the branch to GitHub
4. Create a Pull Request
5. Merge into `develop`
6. After testing, merge `develop` into `main` for production release

More details are available in:

docs/branching-strategy.md

---

## CI/CD Pipeline

The CI/CD pipeline is implemented using **GitHub Actions**.

Pipeline steps:

1. Trigger on Pull Request
2. Install dependencies
3. Run build process
4. Validate application
5. Deploy on merge to main

Pipeline configuration file:

.github/workflows/cicd.yml

---

## Deployment

The application is deployed on **AWS EC2**.

Deployment steps:

1. Launch EC2 instance
2. Install Node.js and Git
3. Clone the GitHub repository
4. Install project dependencies
5. Run the application using Node.js
6. Use PM2 for process management

Production URL:

http://52.66.245.62:3000

Health Check Endpoint:

http://52.66.245.62:3000/health

More deployment details:

docs/deployment.md

---

## Monitoring Strategy

Monitoring includes:

* Application logs using PM2
* Health check endpoint `/health`
* Server monitoring on EC2

Monitoring documentation:

docs/monitoring.md

---

## Debugging Approach

If production deployment fails after a merge:

1. Check CI/CD pipeline logs
2. Verify dependency installation
3. Inspect server and application logs
4. Identify the root cause
5. Fix the issue or roll back to the previous stable version

More details:

docs/debugging.md

---

## Technologies Used

* Node.js
* Express.js
* Git & GitHub
* GitHub Actions
* AWS EC2
* PM2

---

## Live Application

Production API:

http://52.66.245.62:3000

Health Endpoint:

http://52.66.245.62:3000/health

---

## Author
ravilla Kikitha

Kikitha
DevOps / Cloud Enthusiast
