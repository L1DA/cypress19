describe("Register User", () => {
  it("Register User", () => {cy.visit("http://automationexercise.com");

  cy.get('[href="/login"]').click();
  cy.contains("New User Signup!").should("be.visible");
  cy.get('[data-qa="signup-name"]').type("testName");
  cy.get('[data-qa="signup-email"]').type("examplee@gmail.com");
  cy.get('[data-qa="signup-button"]').click();
  cy.contains("Enter Account Information").should("be.visible");
  
  //9. Fill details: Title, Name, Email, Password, Date of birth
  cy.get("#id_gender2").check().should("be.checked");
  cy.get("#id_gender1").check();

  cy.get('[data-qa="name"]')
    .should("have.value", "testName")
    .clear()
    .type("Mariam");
  cy.get('[data-qa="email"]').should("have.value", "examplee@gmail.com");
  // 10. Select checkbox 'Sign up for our newsletter!'
  cy.get("#newsletter").check();
  // 11. Select checkbox 'Receive special offers from our pa

  cy.get("#optin").check();
  // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
  cy.get('[data-qa="first_name"]').type("gela")
  cy.get('[data-qa="last_name"]').type("gela")
  cy.get('[data-qa="company"]').type("gela")
  cy.get('[data-qa="address"]').type("gela")
  cy.get('[data-qa="address2"]').type("gela")
  cy.get('[data-qa="country"]').select("Canada").should('have.value','Canada')
  cy.get('[data-qa="state"]').type("gela")
  cy.get('[data-qa="city"]').type("gela")
  cy.get('[data-qa="zipcode"]').type("gela")
  cy.get('[data-qa="mobile_number"]').type("gela")
  // 13. Cick 'Create Account button'
  cy.get('[data-qa="create-account"]').click()
  // 14. Verify that 'ACCOUNT CREATED!' is visible
  // 15. Click 'Continue' button
  // 16. Verify that 'Logged in as username' is visible
  // 17. Click 'Delete Account' button
  // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  })})