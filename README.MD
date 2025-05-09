````md
# Cypress Automation Exercise

## About

This project is a Cypress-based test automation suite for the website [Automation Exercise](http://automationexercise.com). It includes end-to-end tests for various user scenarios, such as user registration, product search, contact form submission, and more.

## Features

- Automated end-to-end testing for critical user flows.
- Randomized test data generation using `@faker-js/faker`.
- Custom Cypress commands for reusable test steps.
- Integration with GitHub Actions for continuous testing.
- Test results reporting in JUnit format.

## Installation

To get started, clone the repository and install the dependencies:

```sh
npm install
```
````

## Running Tests

Run all Cypress tests using the following command:

```sh
npm run test
```

## Test Structure

The test cases are organized under the `cypress/e2e/` directory. Each test file corresponds to a specific user scenario. For example:

- `TestCase1.cy.js`: Register User
- `TestCase2.cy.js`: Contact Us Form
- `TestCase4.cy.js`: Verify All Products and Product Detail Page
- `TestCase7.cy.js`: Add Review on Product

### Example Test

Here is an example test from `TestCase7.cy.js`:

```javascript
describe("Test Case 21: Add review on product", () => {
  it("verify products and details visible", () => {
    cy.visitAndVerifyHomePage(); // Steps 1-3
    cy.visitAndVerifyProductsPage(); // Steps 4-5
    cy.addProductReview(); // Steps 6-9
  });
});
```

## Why `verifyScrollandArrow` is Implemented This Way

The `verifyScrollandArrow` command was implemented to imitate manual scrolling behavior. This was necessary because the `#scrollUp` element is only visible after the user scrolls down the page. Without simulating a manual scroll, the element would not appear in the DOM, and the test would fail.

Here is the implementation of `verifyScrollandArrow`:

```javascript
Cypress.Commands.add("verifyScrollandArrow", () => {
  const scrollStep = 300;
  const scrollTimes = 18;
  cy.window().then((win) => {
    for (let i = 0; i < scrollTimes; i++) {
      cy.wait(200);
      cy.wrap(win).then((w) => w.scrollBy(0, scrollStep));
    }
  });
  cy.get(".single-widget").should("be.visible");
  cy.get("#scrollUp").should("be.visible").click();
});
```

This approach ensures that the `#scrollUp` element becomes visible, allowing the test to interact with it as a user would during manual testing.

````

Martynass1985: can you use more colors maybe add some pictures

GitHub Copilot: Here’s an updated version of your

README.md

 with added colors, emojis, and placeholders for images to make it more visually appealing:

```markdown
# 🌟 **Cypress Automation Exercise** 🌟

![Cypress Logo](https://www.cypress.io/images/layouts/cypress-logo-dark.png)

---

## 🚀 **About**

This project is a **Cypress-based test automation suite** for the website [Automation Exercise](http://automationexercise.com). It automates various user scenarios, such as:

- 📝 User registration
- 🔍 Product search
- 📩 Contact form submission
- 🛒 Adding reviews to products

---

## 🛠️ **Features**

- ✅ Automated end-to-end testing for critical user flows.
- 🎲 Randomized test data generation using `@faker-js/faker`.
- 🔄 Custom Cypress commands for reusable test steps.
- 🧪 Continuous testing with GitHub Actions.
- 📊 Test results reporting in JUnit format.

---

## 📦 **Installation**

Clone the repository and install the dependencies:

```bash
npm install
````

---

## 🧪 **Running Tests**

Run all Cypress tests with:

```bash
npm run test
```

---

## 🗂️ **Test Structure**

The test cases are organized under the `cypress/e2e/` directory. Each test file corresponds to a specific user scenario. For example:

| Test Case         | Description                                |
| ----------------- | ------------------------------------------ |
| `TestCase1.cy.js` | 📝 Register User                           |
| `TestCase2.cy.js` | 📩 Contact Us Form                         |
| `TestCase4.cy.js` | 🔍 Verify All Products and Product Details |
| `TestCase7.cy.js` | 🛒 Add Review on Product                   |

---

### 📝 **Example Test**

Here’s an example test from `TestCase7.cy.js`:

```javascript
describe("Test Case 21: Add review on product", () => {
  it("verify products and details visible", () => {
    cy.visitAndVerifyHomePage(); // Steps 1-3
    cy.visitAndVerifyProductsPage(); // Steps 4-5
    cy.addProductReview(); // Steps 6-9
  });
});
```

---

## 🤔 **Why `verifyScrollandArrow` is Implemented This Way**

The `verifyScrollandArrow` command was implemented to **imitate manual scrolling behavior**. This was necessary because the `#scrollUp` element is only visible after the user scrolls down the page. Without simulating a manual scroll, the element would not appear in the DOM, and the test would fail.

### 🛠️ **Implementation**

```javascript
Cypress.Commands.add("verifyScrollandArrow", () => {
  const scrollStep = 300;
  const scrollTimes = 18;
  cy.window().then((win) => {
    for (let i = 0; i < scrollTimes; i++) {
      cy.wait(200);
      cy.wrap(win).then((w) => w.scrollBy(0, scrollStep));
    }
  });
  cy.get(".single-widget").should("be.visible");
  cy.get("#scrollUp").should("be.visible").click();
});
```

This approach ensures that the `#scrollUp` element becomes visible, allowing the test to interact with it as a user would during manual testing.

---

## 📸 **Screenshots**

Here’s an example of the test in action:

![Test Screenshot Placeholder](https://via.placeholder.com/800x400?text=Test+Screenshot)

---

## 🎉 **Get Started Today!**

Clone the repository, install the dependencies, and start automating your tests with Cypress! 🚀

````

### Notes:
- I added emojis to make the sections more engaging.
- Included a placeholder for a Cypress logo and a test screenshot. Replace the placeholder URLs with actual images/screenshots from your project.
- Used tables and sections to organize the content better.

Martynass1985:  "test": "npx cypress open",
        "test:ci": "npx cypress run --headless --browser chrome"

GitHub Copilot: Here’s how you can update the **Running Tests** section in your

README.md

 to include both the `test` and `test:ci` scripts:

```markdown
---

## 🧪 **Running Tests**

You can run the tests in two ways:

1. **Interactive Mode**: Opens the Cypress Test Runner for a visual testing experience.
   ```bash
   npm run test
````

2. **Headless Mode (CI)**: Runs the tests in headless mode using Chrome (ideal for CI/CD pipelines).
   ```bash
   npm run test:ci
   ```

````

Martynass1985: add this as well

GitHub Copilot: Here’s the updated section with the new test scripts added:

```markdown
---

## 🧪 **Running Tests**

You can run the tests in two ways:

1. **Interactive Mode**: Opens the Cypress Test Runner for a visual testing experience.
   ```bash
   npm run test
````

2. **Headless Mode (CI)**: Runs the tests in headless mode using Chrome (ideal for CI/CD pipelines).
   ```bash
   npm run test:ci
   ```

````

Martynass1985: can you put full to README.md

GitHub Copilot: Here’s the full updated

README.md

 with all the requested changes:

```markdown
# 🌟 **Cypress Automation Exercise** 🌟

![Cypress Logo](https://www.cypress.io/images/layouts/cypress-logo-dark.png)

---

## 🚀 **About**

This project is a **Cypress-based test automation suite** for the website [Automation Exercise](http://automationexercise.com). It automates various user scenarios, such as:

- 📝 User registration
- 🔍 Product search
- 📩 Contact form submission
- 🛒 Adding reviews to products

---

## 🛠️ **Features**

- ✅ Automated end-to-end testing for critical user flows.
- 🎲 Randomized test data generation using `@faker-js/faker`.
- 🔄 Custom Cypress commands for reusable test steps.
- 🧪 Continuous testing with GitHub Actions.
- 📊 Test results reporting in JUnit format.

---

## 📦 **Installation**

Clone the repository and install the dependencies:

```bash
npm install
````

---

## 🧪 **Running Tests**

You can run the tests in two ways:

1. **Interactive Mode**: Opens the Cypress Test Runner for a visual testing experience.

   ```bash
   npm run test
   ```

2. **Headless Mode (CI)**: Runs the tests in headless mode using Chrome (ideal for CI/CD pipelines).
   ```bash
   npm run test:ci
   ```

---

## 🗂️ **Test Structure**

The test cases are organized under the `cypress/e2e/` directory. Each test file corresponds to a specific user scenario. For example:

| Test Case         | Description                                |
| ----------------- | ------------------------------------------ |
| `TestCase1.cy.js` | 📝 Register User                           |
| `TestCase2.cy.js` | 📩 Contact Us Form                         |
| `TestCase4.cy.js` | 🔍 Verify All Products and Product Details |
| `TestCase7.cy.js` | 🛒 Add Review on Product                   |

---

### 📝 **Example Test**

Here’s an example test from `TestCase7.cy.js`:

```javascript
describe("Test Case 21: Add review on product", () => {
  it("verify products and details visible", () => {
    cy.visitAndVerifyHomePage(); // Steps 1-3
    cy.visitAndVerifyProductsPage(); // Steps 4-5
    cy.addProductReview(); // Steps 6-9
  });
});
```

---

## 🤔 **Why `verifyScrollandArrow` is Implemented This Way**

The `verifyScrollandArrow` command was implemented to **imitate manual scrolling behavior**. This was necessary because the `#scrollUp` element is only visible after the user scrolls down the page. Without simulating a manual scroll, the element would not appear in the DOM, and the test would fail.

### 🛠️ **Implementation**

```javascript
Cypress.Commands.add("verifyScrollandArrow", () => {
  const scrollStep = 300;
  const scrollTimes = 18;
  cy.window().then((win) => {
    for (let i = 0; i < scrollTimes; i++) {
      cy.wait(200);
      cy.wrap(win).then((w) => w.scrollBy(0, scrollStep));
    }
  });
  cy.get(".single-widget").should("be.visible");
  cy.get("#scrollUp").should("be.visible").click();
});
```

This approach ensures that the `#scrollUp` element becomes visible, allowing the test to interact with it as a user would during manual testing.

---

## 📸 **Screenshots**

Here’s an example of the test in action:

![Test Screenshot Placeholder](https://via.placeholder.com/800x400?text=Test+Screenshot)

---

## 🎉 **Get Started Today!**

Clone the repository, install the dependencies, and start automating your tests with Cypress! 🚀

````

Martynass1985: also add this to full version
https://github.com/Martynass1985/Cypress.git

GitHub Copilot: Here’s the full updated

README.md

 with the GitHub repository link added:

```markdown
# 🌟 **Cypress Automation Exercise** 🌟

![Cypress Logo](https://www.cypress.io/images/layouts/cypress-logo-dark.png)

---

## 🔗 **Repository**

You can find the project repository here: [Cypress Automation Exercise](https://github.com/Martynass1985/Cypress.git)

---

## 🚀 **About**

This project is a **Cypress-based test automation suite** for the website [Automation Exercise](http://automationexercise.com). It automates various user scenarios, such as:

- 📝 User registration
- 🔍 Product search
- 📩 Contact form submission
- 🛒 Adding reviews to products

---

## 🛠️ **Features**

- ✅ Automated end-to-end testing for critical user flows.
- 🎲 Randomized test data generation using `@faker-js/faker`.
- 🔄 Custom Cypress commands for reusable test steps.
- 🧪 Continuous testing with GitHub Actions.
- 📊 Test results reporting in JUnit format.

---

## 📦 **Installation**

Clone the repository and install the dependencies:

```bash
npm install
````

---

## 🧪 **Running Tests**

You can run the tests in two ways:

1. **Interactive Mode**: Opens the Cypress Test Runner for a visual testing experience.

   ```bash
   npm run test
   ```

2. **Headless Mode (CI)**: Runs the tests in headless mode using Chrome (ideal for CI/CD pipelines).
   ```bash
   npm run test:ci
   ```

---

## 🗂️ **Test Structure**

The test cases are organized under the `cypress/e2e/` directory. Each test file corresponds to a specific user scenario. For example:

| Test Case         | Description                                |
| ----------------- | ------------------------------------------ |
| `TestCase1.cy.js` | 📝 Register User                           |
| `TestCase2.cy.js` | 📩 Contact Us Form                         |
| `TestCase4.cy.js` | 🔍 Verify All Products and Product Details |
| `TestCase7.cy.js` | 🛒 Add Review on Product                   |

---

### 📝 **Example Test**

Here’s an example test from `TestCase7.cy.js`:

```javascript
describe("Test Case 21: Add review on product", () => {
  it("verify products and details visible", () => {
    cy.visitAndVerifyHomePage(); // Steps 1-3
    cy.visitAndVerifyProductsPage(); // Steps 4-5
    cy.addProductReview(); // Steps 6-9
  });
});
```

---

## 🤔 **Why `verifyScrollandArrow` is Implemented This Way**

The `verifyScrollandArrow` command was implemented to **imitate manual scrolling behavior**. This was necessary because the `#scrollUp` element is only visible after the user scrolls down the page. Without simulating a manual scroll, the element would not appear in the DOM, and the test would fail.

### 🛠️ **Implementation**

```javascript
Cypress.Commands.add("verifyScrollandArrow", () => {
  const scrollStep = 300;
  const scrollTimes = 18;
  cy.window().then((win) => {
    for (let i = 0; i < scrollTimes; i++) {
      cy.wait(200);
      cy.wrap(win).then((w) => w.scrollBy(0, scrollStep));
    }
  });
  cy.get(".single-widget").should("be.visible");
  cy.get("#scrollUp").should("be.visible").click();
});
```

This approach ensures that the `#scrollUp` element becomes visible, allowing the test to interact with it as a user would during manual testing.

---

## 📸 **Screenshots**

Here’s an example of the test in action:

![Test Screenshot Placeholder](https://via.placeholder.com/800x400?text=Test+Screenshot)

---

## 🎉 **Get Started Today!**

Clone the repository, install the dependencies, and start automating your tests with Cypress! 🚀

````

Martynass1985: please add this to my file

GitHub Copilot: Here’s the updated content for your

README.md

 file with the requested changes:

```markdown
# 🌟 **Cypress Automation Exercise** 🌟

![Cypress Logo](https://www.cypress.io/images/layouts/cypress-logo-dark.png)

---

## 🔗 **Repository**

You can find the project repository here: [Cypress Automation Exercise](https://github.com/Martynass1985/Cypress.git)

---

## 🚀 **About**

This project is a **Cypress-based test automation suite** for the website [Automation Exercise](http://automationexercise.com). It automates various user scenarios, such as:

- 📝 User registration
- 🔍 Product search
- 📩 Contact form submission
- 🛒 Adding reviews to products

---

## 🛠️ **Features**

- ✅ Automated end-to-end testing for critical user flows.
- 🎲 Randomized test data generation using `@faker-js/faker`.
- 🔄 Custom Cypress commands for reusable test steps.
- 🧪 Continuous testing with GitHub Actions.
- 📊 Test results reporting in JUnit format.

---

## 📦 **Installation**

Clone the repository and install the dependencies:

```bash
npm install
````

---

## 🧪 **Running Tests**

You can run the tests in two ways:

1. **Interactive Mode**: Opens the Cypress Test Runner for a visual testing experience.

   ```bash
   npm run test
   ```

2. **Headless Mode (CI)**: Runs the tests in headless mode using Chrome (ideal for CI/CD pipelines).
   ```bash
   npm run test:ci
   ```

---

## 🗂️ **Test Structure**

The test cases are organized under the `cypress/e2e/` directory. Each test file corresponds to a specific user scenario. For example:

| Test Case         | Description                                |
| ----------------- | ------------------------------------------ |
| `TestCase1.cy.js` | 📝 Register User                           |
| `TestCase2.cy.js` | 📩 Contact Us Form                         |
| `TestCase4.cy.js` | 🔍 Verify All Products and Product Details |
| `TestCase7.cy.js` | 🛒 Add Review on Product                   |

---

### 📝 **Example Test**

Here’s an example test from `TestCase7.cy.js`:

```javascript
describe("Test Case 21: Add review on product", () => {
  it("verify products and details visible", () => {
    cy.visitAndVerifyHomePage(); // Steps 1-3
    cy.visitAndVerifyProductsPage(); // Steps 4-5
    cy.addProductReview(); // Steps 6-9
  });
});
```

---

## 🤔 **Why `verifyScrollandArrow` is Implemented This Way**

The `verifyScrollandArrow` command was implemented to **imitate manual scrolling behavior**. This was necessary because the `#scrollUp` element is only visible after the user scrolls down the page. Without simulating a manual scroll, the element would not appear in the DOM, and the test would fail.

### 🛠️ **Implementation**

```javascript
Cypress.Commands.add("verifyScrollandArrow", () => {
  const scrollStep = 300;
  const scrollTimes = 18;
  cy.window().then((win) => {
    for (let i = 0; i < scrollTimes; i++) {
      cy.wait(200);
      cy.wrap(win).then((w) => w.scrollBy(0, scrollStep));
    }
  });
  cy.get(".single-widget").should("be.visible");
  cy.get("#scrollUp").should("be.visible").click();
});
```

This approach ensures that the `#scrollUp` element becomes visible, allowing the test to interact with it as a user would during manual testing.

---

## 📸 **Screenshots**

Here’s an example of the test in action:

![Test Screenshot Placeholder](https://via.placeholder.com/800x400?text=Test+Screenshot)

---

## 🎉 **Get Started Today!**

Clone the repository, install the dependencies, and start automating your tests with Cypress! 🚀

```

```
