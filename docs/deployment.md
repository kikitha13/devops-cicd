# Deployment Strategy

The application is deployed on AWS EC2 using an Ubuntu server instance.

## Steps

1. Launch an EC2 instance on AWS.
2. Configure security groups to allow ports 22 (SSH) and 3000 (application).
3. Connect to the instance using SSH.
4. Install Node.js and Git.
5. Clone the GitHub repository.
6. Install project dependencies using npm.
7. Start the application using Node.js.

## Production URL

http://52.66.245.62:3000

## Process Management

PM2 is used as a process manager to keep the Node.js application running even if the server restarts.

## Rollback Strategy

If a deployment fails:
- Identify the failing commit.
- Revert to the previous stable commit.
- Redeploy the application.
