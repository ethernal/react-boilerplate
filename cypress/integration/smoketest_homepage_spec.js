/// <reference types="Cypress" />

describe("Smoke ping Homepage", function() {
  it("Visits the Home Page", function() {
    cy.visit("http://localhost:8080");
    cy.contains("h1");
  });
});
