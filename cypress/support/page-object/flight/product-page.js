/// <reference types="cypress" />

import { FLIGHT_PRODUCT, PAIRED_RADIO_BUTTON } from '../common/selector/flight';
import utilities from '../common/utilities';
class ProductPage {
  selectDomesticOnewayProduct(value) {
    cy.get(FLIGHT_PRODUCT).should('be.visible');
    utilities.createSnapshot('FlightProductPage');
    cy.get(FLIGHT_PRODUCT).eq(value).click();
  }

  selectOutboundInternationalReturnUnpairedProduct(value) {
    cy.get(FLIGHT_PRODUCT).should('be.visible');
    utilities.createSnapshot('FlightProductPage');
    cy.get(FLIGHT_PRODUCT).eq(value).click();
  }

  selectInboundInternationalReturnUnpairedProduct(value) {
    cy.wait(5000);
    utilities.createSnapshot('FlightProductPage');
    cy.get(FLIGHT_PRODUCT).eq(value).click();
  }

  selectOutboundInternationalReturnPairedProduct(value) {
    cy.get(PAIRED_RADIO_BUTTON).click();
    utilities.createSnapshot('FlightProductPage');
    cy.get(FLIGHT_PRODUCT).eq(value).click();
  }

  selectInboundInternationalReturnPairedProduct(value) {
    cy.wait(5000);
    utilities.createSnapshot('FlightProductPage');
    cy.get(FLIGHT_PRODUCT).eq(value).click();
  }

  selectOutboundDomesticReturnUnpairedProduct(value) {
    utilities.createSnapshot('FlightProductPage');
    cy.get(FLIGHT_PRODUCT).eq(value).click();
  }

  selectInboundDomesticReturnUnpairedProduct(value) {
    cy.wait(5000);
    utilities.createSnapshot('FlightProductPage');
    cy.get(FLIGHT_PRODUCT).eq(value).click();
  }

  selectOutboundDomesticReturnPairedProduct(value) {
    cy.get(PAIRED_RADIO_BUTTON).click();
    utilities.createSnapshot('FlightProductPage');
    cy.get(FLIGHT_PRODUCT).eq(value).click();
  }

  selectInboundDomesticReturnPairedProduct(value) {
    cy.wait(5000);
    utilities.createSnapshot('FlightProductPage');
    cy.get(FLIGHT_PRODUCT).eq(value).click();
  }
}
export default ProductPage;
