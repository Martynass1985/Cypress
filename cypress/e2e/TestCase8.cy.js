// Test Case 8: Verify All Products and product detail page
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Products' button
// 5. Verify user is navigated to ALL PRODUCTS page successfully
// 6. The products list is visible
// 7. Click on 'View Product' of first product
// 8. User is landed to product detail page
// 9. Verify that detail detail is visible: product name,
// category, price, availability, condition, brand

describe("Test Case 8: Verify All Products and product detail page", () => {
  it("verify products and details visible", () => {
    cy.visitAndVerifyHomePage(); //1-3 steps
    cy.visitAndVerifyProductsPage(); //4-6 steps
    cy.verifyProductDetails(); //7-9 steps
  });
});
