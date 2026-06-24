# 🧪 Tasteorama QA Automation Framework

Automated testing framework for **Tasteorama**, a modern recipe management platform that allows users to create, organize, search, and save their favorite recipes.

This project was built to validate the application's core functionality through both **UI and API testing**, ensuring reliability of critical user journeys such as authentication, recipe management, search functionality, and favorites handling.

The framework is implemented using **Playwright** and **TypeScript** and follows maintainable test automation practices including the **Page Object Model (POM)** design pattern.

---

## 📖 About Tasteorama

Tasteorama is a web application designed for food enthusiasts who want to manage their personal collection of recipes in a convenient digital format.

### Key Features

* 🔐 User authentication and authorization
* 🍲 Recipe creation and management
* ❤️ Favorite recipes functionality
* 🔍 Recipe search and browsing
* 🗂️ Filtering by categories and ingredients
* 👤 User-specific recipe collections
* 📚 Swagger API documentation

### Application Tech Stack

* Frontend: React
* Backend: Node.js + Express
* Database: MongoDB
* Authentication: JWT + Cookies
* API Documentation: Swagger UI

---

## 🎯 Project Goals

The purpose of this project is to demonstrate practical QA Automation skills by testing a real-world web application.

The framework covers:

* UI automation testing
* API automation testing
* End-to-end user flows
* Smoke testing
* Test documentation
* Defect reporting
* Maintainable test architecture

---

## 🚀 Test Coverage

### UI Testing

The UI test suite validates key user interactions including:

* User login
* Recipe search
* Recipe creation
* Adding recipes to favorites
* Viewing recipe details
* Navigation between application pages

### API Testing

The API suite verifies backend functionality independently from the UI.

#### Authentication

* User registration
* User login
* Current user retrieval
* Invalid credential handling
* Duplicate email validation
* Password validation rules

#### Recipes

* Recipe creation
* Retrieving recipes
* Categories endpoint validation
* Ingredients endpoint validation

#### Favorites

* Add recipe to favorites
* Remove recipe from favorites
* Unauthorized access handling
* Validation of non-existing recipes

---

## 🏗️ Framework Structure

```text
tests/
│
├── api/
│   ├── auth/
│   ├── recipes/
│   ├── types/
│   └── ApiClient.ts
│
├── ui/
│   ├── auth/
│   ├── recipes/
│   └── pages/
│
├── docs/
│   └── test-cases/
│
└── bug_reports/
```

### Architecture Highlights

* Page Object Model (POM)
* Reusable page actions and locators
* API Client abstraction layer
* Dynamic test data generation
* Clear separation between UI and API tests
* Independent and maintainable test scenarios

---

## 🛠️ Technologies

* Playwright
* TypeScript
* HTML Reports

---

## ✨ Framework Features

### Backend Availability Handling

The application backend is hosted on Render and may require time to wake up after periods of inactivity. The framework includes logic to ensure the API becomes available before test execution begins.

### Dynamic Test Data

Unique test data is generated for registration and recipe creation scenarios, helping reduce conflicts between test runs and improving reliability.

### Scalable Test Architecture

The project is structured to support future expansion while keeping tests readable, reusable, and easy to maintain.

### QA Documentation

In addition to automated tests, the repository includes:

* Test Cases
* Bug Reports
* API Test Coverage
* UI Test Coverage
* Smoke Tests

This reflects a complete QA workflow, from test design and execution to defect reporting.

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/tslawyer/Tasteorama_QA.git
```

Navigate to the project directory:

```bash
cd Tasteorama_QA
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## ▶️ Running Tests

Run all tests:

```bash
npx playwright test
```

Run smoke tests:

```bash
npx playwright test --grep @smoke
```

Run API tests only:

```bash
npx playwright test tests/api
```

Run UI tests only:

```bash
npx playwright test tests/ui
```

---

## 📊 Test Reports

After execution, Playwright generates an HTML report that can be viewed with:

```bash
npx playwright show-report
```

The report provides detailed information about executed tests, execution time, screenshots, traces, and failures.

---

## 🐞 Defect Reporting

The repository contains documented defects discovered during testing activities.

Bug reports include:

* Defect description
* Steps to reproduce
* Expected result
* Actual result
* Severity assessment

This demonstrates practical experience not only in automation, but also in manual testing and quality assurance processes.

---

## 📌 Summary

This project showcases a complete QA Automation workflow using Playwright and TypeScript, combining UI and API testing with documentation and defect reporting.

It was created to strengthen practical test automation skills while applying real-world QA practices to a full-stack web application.
