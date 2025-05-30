// Test Case 21: Add review on product
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Click on 'Products' button
// 4. Verify user is navigated to ALL PRODUCTS page successfully
// 5. Click on 'View Product' button
// 6. Verify 'Write Your Review' is visible
// 7. Enter name, email and review
// 8. Click 'Submit' button
// 9. Verify success message 'Thank you for your review.'

describe("Test Case 21: Add review on product", () => {
  it("verify products and details visible", () => {
    cy.visitAndVerifyHomePage(); //1-3 steps
    cy.visitAndVerifyProductsPage();
    cy.addProductReview();
  });
});
