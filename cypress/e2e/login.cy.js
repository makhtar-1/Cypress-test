describe("recognition dev", () => {

  it("can be logged into", () => {
    cy.visit("https://qa.testbenefit.co.uk/admin/");
    cy.login("BFX\CypressTestAdmin", "B3n3f3x123!");

  });
});
