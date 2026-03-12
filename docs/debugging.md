# Debugging Scenario

Scenario: Production deployment fails after a merge.

## Step 1: Check CI/CD Pipeline Logs
Verify if the GitHub Actions workflow failed during build or deployment.

## Step 2: Check Dependency Installation
Ensure all dependencies are installed correctly using npm.

## Step 3: Check Server Logs
Review application logs using PM2 or system logs on the EC2 instance.

## Step 4: Identify Root Cause
Determine if the failure is due to code errors, configuration issues, or missing environment variables.

## Step 5: Fix the Issue
Update the code or configuration to resolve the problem.

## Step 6: Rollback if Needed
If the issue cannot be fixed quickly, revert to the previous stable version of the application.
