# Git Branching Strategy

This project follows a structured Git branching model to ensure safe development and deployment.

## Branches

main  
The main branch represents the production-ready code. Only stable and tested code is merged into this branch.

develop  
The develop branch is used as an integration branch where features are merged and tested before moving to production.

feature/*
Feature branches are created for new development tasks. Example: feature/task-api.

## Workflow

1. Create a feature branch from develop.
2. Implement the feature.
3. Push the branch to GitHub.
4. Create a Pull Request to merge into develop.
5. After testing, develop is merged into main for production release.

## Branch Protection Strategy

- Direct commits to the main branch are restricted.
- Pull requests must be reviewed before merging.
- CI/CD pipeline must pass before merging.
