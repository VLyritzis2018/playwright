# Contributing Guide

Welcome to the Playwright Automation Framework.

This document defines the project structure, development standards, Git workflow, coding conventions, and contribution guidelines. Following these standards ensures the framework remains scalable, maintainable, and easy to understand.

---

# Table of Contents

1. Project Overview
2. Project Structure
3. Folder Responsibilities
4. Branching Strategy
5. Git Workflow
6. Commit Message Convention
7. Pull Request Guidelines
8. Coding Standards
9. Test Automation Standards
10. Environment Management
11. Future Enhancements

---

# 1. Project Overview

This project is a web and API automation framework built using:

* Playwright
* TypeScript
* Git
* GitHub
* GitHub Actions

The framework is designed to support enterprise-level automation projects while maintaining readability, modularity, and scalability.

---

# 2. Project Structure

```
playwright/
│
├── .github/
│   └── workflows/
│
├── api/
├── components/
├── fixtures/
├── helpers/
├── pages/
├── reports/
├── test-data/
├── tests/
├── types/
├── utils/
│
├── .gitignore
├── CONTRIBUTING.md
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

---

# 3. Folder Responsibilities

## .github/

Contains GitHub Actions workflows used for Continuous Integration.

Examples:

* Execute automated tests
* Publish reports
* Run quality checks

---

## api/

Contains API-related code.

Examples:

* API clients
* Request builders
* API utilities
* API test suites

---

## components/

Contains reusable UI components.

Examples:

* Navigation menu
* Header
* Footer
* Modal dialogs
* Side panels

A component should represent a reusable section of a page rather than a complete page.

---

## fixtures/

Contains custom Playwright fixtures.

Responsibilities include:

* Browser setup
* Authentication
* Shared test context
* Dependency injection
* Test lifecycle customization

---

## helpers/

Contains business workflows.

Helpers orchestrate actions across one or more page objects.

Example:

```
LoginHelper
    ↓
LoginPage
    ↓
DashboardPage
```

Helpers contain business logic.

Pages do not.

---

## pages/

Contains Page Object Model classes.

Each page should contain:

* Locators
* UI interactions
* Assertions specific to that page

Pages should never contain business workflows.

---

## reports/

Contains exported reports or custom reporting assets.

Generated Playwright reports should not be committed.

---

## test-data/

Contains reusable test data.

Examples:

* JSON
* CSV
* Static objects
* Test users
* Configuration values

Hardcoded values inside tests should be avoided whenever possible.

---

## tests/

Contains Playwright test specifications.

Tests should remain concise and focus on business behavior.

Example:

```
Login Test

Login
Verify Dashboard
Logout
```

Tests should describe *what* is being tested, not *how* it is performed.

---

## types/

Contains:

* Interfaces
* Enums
* Type aliases
* Shared TypeScript types

---

## utils/

Contains generic utilities.

Examples:

* Date utilities
* Random data generators
* File utilities
* String utilities

Utilities should never contain application-specific business logic.

---

# 4. Branching Strategy

The project follows a feature-branch workflow.

```
main
│
├── feature/...
├── bugfix/...
├── hotfix/...
├── release/...
└── docs/...
```

## main

Represents production-ready code.

Development should never occur directly on the main branch.

---

## feature/

Used for new functionality.

Examples:

```
feature/login-page
feature/api-framework
feature/reporting
```

---

## bugfix/

Used for non-critical bug fixes.

Example:

```
bugfix/login-timeout
```

---

## hotfix/

Used for urgent production fixes.

Example:

```
hotfix/security-patch
```

---

## release/

Optional branch used for release preparation.

Example:

```
release/v1.2.0
```

---

## docs/

Used for documentation improvements.

Example:

```
docs/update-readme
```

---

# 5. Git Workflow

Development should follow the sequence below.

```
main
      │
      ▼
Create Feature Branch
      │
      ▼
Develop
      │
      ▼
Commit
      │
      ▼
Push
      │
      ▼
Create Pull Request
      │
      ▼
Review
      │
      ▼
Merge into main
      │
      ▼
Delete Feature Branch
```

Direct commits to `main` should be avoided.

---

# 6. Commit Message Convention

The project follows the Conventional Commits specification.

## feat

New functionality.

Example:

```
feat: add login page
```

---

## fix

Bug fixes.

Example:

```
fix: correct invalid locator
```

---

## docs

Documentation updates.

Example:

```
docs: add contributing guide
```

---

## test

Add or modify automated tests.

Example:

```
test: add login regression tests
```

---

## refactor

Code restructuring without changing behavior.

Example:

```
refactor: simplify login helper
```

---

## style

Formatting only.

Examples include:

* whitespace
* formatting
* lint fixes

---

## perf

Performance improvements.

Example:

```
perf: optimize parallel execution
```

---

## build

Changes affecting:

* dependencies
* package management
* build process

Example:

```
build: upgrade Playwright version
```

---

## ci

Continuous Integration changes.

Example:

```
ci: update GitHub Actions workflow
```

---

## chore

Maintenance tasks.

Examples:

* project initialization
* configuration updates
* housekeeping

Example:

```
chore: initialize Playwright framework
```

---

# 7. Pull Request Guidelines

Each Pull Request should:

* Have a meaningful title.
* Reference the related work item when applicable.
* Pass all automated tests.
* Contain focused changes.
* Avoid unrelated modifications.
* Include documentation updates if necessary.

Before requesting review, verify:

* Code builds successfully.
* Tests pass.
* No unnecessary files are included.
* No commented-out code remains.

---

# 8. Coding Standards

* Use TypeScript.
* Follow the Page Object Model.
* Keep business logic inside helpers.
* Keep UI interactions inside page objects.
* Prefer reusable components.
* Use meaningful method names.
* Use explicit assertions.
* Avoid duplicated code.
* Avoid hardcoded waits.
* Prefer Playwright auto-waiting.
* Keep methods focused on a single responsibility.

---

# 9. Test Automation Standards

Tests should:

* Be independent.
* Be repeatable.
* Be deterministic.
* Be easy to read.
* Be easy to maintain.

Each test should validate a single business scenario.

Example:

```
User Login

Arrange
Act
Assert
```

Avoid large end-to-end tests that validate multiple unrelated workflows.

---

# 10. Environment Management

Environment-specific values should never be hardcoded.

Use environment variables or dedicated configuration files for:

* URLs
* Credentials
* Tokens
* Environment-specific settings

Sensitive information must never be committed to the repository.

---

# 11. Future Enhancements

The framework is expected to evolve with features such as:

* Multi-environment execution
* API automation
* Visual testing
* Accessibility testing
* Cross-browser execution
* Parallel execution optimization
* Test tagging
* Allure reporting
* Docker support
* Test retries
* Code coverage
* Linting
* Formatting
* Dependency scanning
* Automated release pipelines

---

# General Principles

* Write readable code.
* Keep tests simple.
* Prefer composition over duplication.
* Follow established project conventions.
* Document significant architectural decisions.
* Keep the framework maintainable for future contributors.
