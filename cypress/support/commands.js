const { faker } = require("@faker-js/faker");
const {
  randomDay,
  randomMonth,
  randomYear,
  genderSelector,
} = require("../support/random_data");

const user = {
  name: faker.person.fullName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  company: faker.company.name(),
  address1: faker.location.streetAddress(),
  address2: faker.location.secondaryAddress(),
  state: faker.location.state(),
  city: faker.location.city(),
  zipcode: faker.location.zipCode(),
  phoneNumber: faker.phone.number(),
  textArea: faker.lorem.sentence(),
};
Cypress.Commands.add("visitAndVerifyHomePage", () => {
  cy.visit("/");
  cy.url().should("eq", "https://automationexercise.com/");
  cy.get("#slider-carousel").should("exist").and("be.visible");
});
Cypress.Commands.add("goToLoginSignupPage", () => {
  cy.get("[href='/login']").click();
});
Cypress.Commands.add("enterName", (name) => {
  cy.get("[data-qa='signup-name']").type(name);
});
Cypress.Commands.add("enterEmail", (email) => {
  cy.get("[data-qa='signup-email']").type(email);
});
Cypress.Commands.add("clickSignup", () => {
  cy.get("[data-qa='signup-button']").click();
});
Cypress.Commands.add("registerUser", () => {
  cy.goToLoginSignupPage();
  cy.get(".signup-form h2").should("have.text", "New User Signup!");
  cy.enterName(user.name);
  cy.enterEmail(user.email);
  cy.clickSignup();
  cy.get(genderSelector).check();
  cy.get("#password").type(user.password);
  cy.get("#days").select(randomDay);
  cy.get("#months").select(randomMonth);
  cy.get("#years").select(randomYear);
  cy.get("#newsletter").check();
  cy.get("#first_name").type(user.firstName);
  cy.get("#last_name").type(user.lastName);
  cy.get("#company").type(user.company);
  cy.get("#address1").type(user.address1);
  cy.get("#address2").type(user.address2);
  cy.get("#country")
    .find("option")
    .then((options) => {
      const randomIndex = Math.floor(Math.random() * options.length);
      cy.get("#country").select(options[randomIndex].innerText);
    });
  cy.get("#state").type(user.state);
  cy.get("#city").type(user.city);
  cy.get("#zipcode").type(user.zipcode);
  cy.get("#mobile_number").type(user.phoneNumber);

  cy.get("[data-qa='create-account']").click();
  cy.url().should("include", "account_created");
  cy.get("[data-qa='account-created']").should("exist").and("be.visible");
  cy.get("[data-qa='continue-button']").click();

  Cypress.env({});

  const envContent = Object.entries(user)
    .map(([key, value]) => `${key.toUpperCase()}=${value}`)
    .join("\n");

  cy.writeFile("cypress/user.env", envContent).then(() => {
    cy.readFile("cypress/user.env").then((envData) => {
      envData.split("\n").forEach((line) => {
        const [key, value] = line.split("=");
        if (key && value) {
          Cypress.env(key.trim(), value.trim());
        }
      });
    });
  });

  // Explicitly Store Values in Cypress Environment:
  Cypress.env("EMAIL", user.email);
  Cypress.env("PASSWORD", user.password);
  Cypress.env("NAME", user.name);
  Cypress.env("TEXTAREA", user.textArea);
  Cypress.env("ADDRESS1", user.address1);
  Cypress.env("ADDRESS2", user.address2);
  cy.get(".shop-menu").should("contain", `${user.name}`);
});
Cypress.Commands.add("deleteUser", () => {
  cy.get("[href='/delete_account']").click();
  cy.url().should("contain", "delete_account");
  cy.get('[data-qa="account-deleted"] > b').should(
    "have.text",
    "Account Deleted!"
  );
  cy.get("[data-qa='continue-button']").click();
});
Cypress.Commands.add("sendContactUsForm", () => {
  cy.get("[href='/contact_us']").click(); // 4 step
  cy.get("[class*='title']").eq(1).should("contain", "Get In Touch"); // 5 step
  cy.get("input[name='name']").type(user.name); // 6 step
  cy.get("input[name='email']").type(user.email); // 6 step
  cy.get("input[name='subject']").type("Test Subject"); // 6 step
  // cy.get("[name='upload_file']").selectFile(
  //   "../../../Downloads/depositphotos_80976150-stock-photo-software-tester-represents-scrutinizer-tests.jpg"
  // ); // 7 step
  cy.get("[data-qa='submit-button']").click(); // 8 step
  cy.get("[class*='status']").should(
    "have.text",
    "Success! Your details have been submitted successfully."
  ); // 10 step
  cy.get(" a[class='btn btn-success'] span").click(); // 11 step
  cy.get("#slider-carousel").should("exist").and("be.visible");
});
Cypress.Commands.add("verifyTestCasesPage", () => {
  cy.get("#header li:nth-child(5) a").click(); // 4 step
  cy.url().should("include", "test_cases"); // 5 step
  cy.get("h2").first().should("have.text", "Test Cases");
});
Cypress.Commands.add("visitAndVerifyProductsPage", () => {
  cy.get("[href='/products']").click(); // 4 step
  cy.url().should("include", "products"); // 5 step
  cy.get(".title").should("have.text", "All Products"); // 6 step
  cy.get(".product-image-wrapper").should("be.visible"); // 6 step
});
Cypress.Commands.add("verifyProductDetails", () => {
  cy.get("[href='/product_details/1']").click(); // 7 step
  cy.url().should("include", "product_details/1"); // 8 step
  cy.get(".product-information h2").should("be.visible"); // 9 step // 9 step
  cy.get("p:contains('Category')").should("be.visible"); // 9 step
  cy.get(".product-information span span").should("be.visible"); // 9 step
  cy.get("p:contains('Availability')").should("be.visible"); // 9 step
  cy.get("p:contains('Condition')").should("be.visible"); // 9 step
  cy.get("p:contains('Brand')").should("be.visible"); // 9 step
});
Cypress.Commands.add("verifySearchProduct", (product) => {
  cy.get("[id='search_product']").type(product); // 6 step
  cy.get("[id='submit_search']").click(); // 6 step
  cy.get(".title").should("have.text", "Searched Products"); // 7 step
  cy.get(".product-image-wrapper .single-products .productinfo p").should(
    "contain",
    product
  ); // 8 step
});
Cypress.Commands.add("addProductReview", () => {
  cy.get("[href='/product_details/1']").click(); // 5 step
  cy.get("[href='#reviews']")
    .should("be.visible")
    .and("have.text", "Write Your Review"); // 6 step
  cy.get("#name").type(user.name); // 7 step
  cy.get("#email").type(user.email); // 7 step
  cy.get("#review").type(user.textArea); // 7 step
  cy.get("#button-review").click(); // 8 step
  cy.get("[class*='alert-success']")
    .first()
    .should("contain", "Thank you for your review."); // 9 step
});
Cypress.Commands.add("ScrollandVerifyArrow", () => {
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
Cypress.Commands.add("addToCart", () => {
  cy.get("[href='/products']").click();

  cy.get("[class*='productinfo']")
    .eq(0)
    .should("be.visible")
    .find("p")
    .invoke("text")
    .as("firstProductName");

  cy.get("[class*='productinfo']")
    .eq(0)
    .find("h2")
    .invoke("text")
    .as("firstProductPrice");

  cy.get("@firstProductName").then((firstName) => {
    cy.wrap(firstName).as("firstNameStored");
  });

  cy.get("@firstProductPrice").then((firstPrice) => {
    cy.wrap(firstPrice).as("firstPriceStored");
  });

  cy.get("[class*='productinfo']")
    .eq(0)
    .find("[class*='add-to-cart']")
    .scrollIntoView()
    .should("be.visible")
    .click();

  cy.get(".modal.fade").should("not.exist");

  cy.get("[data-dismiss='modal']").click();

  cy.get("[class*='productinfo']")
    .eq(1)
    .as("secondProduct")
    .within(() => {
      cy.get("p").invoke("text").as("secondProductName");
      cy.get("h2").invoke("text").as("secondProductPrice");
      cy.get("[class*='add-to-cart']")
        .scrollIntoView()
        .should("be.visible")
        .click({ force: true });
    });

  cy.get("@secondProductName").then((secondName) => {
    cy.wrap(secondName).as("secondNameStored");
  });

  cy.get("@secondProductPrice").then((secondPrice) => {
    cy.wrap(secondPrice).as("secondPriceStored");
  });

  cy.get(".modal.fade").should("not.exist");

  cy.get(".modal-body [href='/view_cart']").click();

  cy.url().should("include", "/view_cart");
  cy.get("#cart_items > :nth-child(1)").should("be.visible");

  cy.get("@firstNameStored").then((firstName) => {
    cy.get("#product-1 > .cart_description")
      .should("exist")
      .should("contain.text", firstName);
  });

  cy.get("@firstPriceStored").then((firstPrice) => {
    cy.get("#product-1 > .cart_price")
      .should("exist")
      .should("contain.text", firstPrice);
  });

  cy.get("@secondNameStored").then((secondName) => {
    cy.get("#product-2 > .cart_description")
      .should("exist")
      .should("contain.text", secondName);
  });

  cy.get("@secondPriceStored").then((secondPrice) => {
    cy.get("#product-2 > .cart_price")
      .should("exist")
      .should("contain.text", secondPrice);
  });
});
