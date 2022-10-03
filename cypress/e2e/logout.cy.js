describe("recognition dev", () => {

  it("can be logged out of", () => {
    cy.visit("https://qa.testbenefit.co.uk/admin/");
    cy.login("BFX\CypressTestAdmin", "B3n3f3x123!");
    cy.logout()
    cy.contains("Goodbye!")
    cy.contains("You have been securely signed out of your account")
  });
});
