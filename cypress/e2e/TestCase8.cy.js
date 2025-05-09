// Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Scroll down page to bottom
// 5. Verify 'SUBSCRIPTION' is visible
// 6. Click on arrow at bottom right side to move upward
// 7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screenWeb hosting

// describe("est Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality", () => {
//   it("verify scroll and scrollUp arrow functioning", () => {
//     cy.visitAndVerifyHomePage(); //1-3 steps
//     cy.get("html")
//       .scrollTo("bottom")
//       .then(() => {
//         cy.window().then((win) => {
//           win.scrollTo(0, document.body.scrollHeight);
//           win.dispatchEvent(new Event("scroll"));
//         });
//         cy.wait(1000);
//         cy.get(".single-widget").should("be.visible"); // 5 step
//         cy.get("#scrollUp").click(); // 6 step
//         cy.get(".item h2")
//           .should("be.visible")
//           .and(
//             "have.text",
//             "Full-Fledged practice website for Automation Engineers"
//           ); // 7 step
//       });
//   });
// });
describe("Scroll Down and Verify Scroll Up Button Works", () => {
  it("Scrolls down and clicks the scroll up button", () => {
    cy.visitAndVerifyHomePage();
    cy.verifyScrollandArrow();
    cy.get(".item h2")
      .first()
      .should("be.visible")
      .and(
        "have.text",
        "Full-Fledged practice website for Automation Engineers"
      );
  });
});
