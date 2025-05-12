// Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Scroll down page to bottom
// 5. Verify 'SUBSCRIPTION' is visible
// 6. Click on arrow at bottom right side to move upward
// 7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screenWeb hosting

describe("Scroll Down and Verify Scroll Up Button Works", () => {
  it("Scrolls down and clicks the scroll up button", () => {
    cy.visitAndVerifyHomePage();
    cy.ScrollandVerifyArrow();
    cy.get(".item h2")
      .first()
      .should("be.visible")
      .and(
        "have.text",
        "Full-Fledged practice website for Automation Engineers"
      );
  });
});
