describe("Calculator using", () => {
  beforeEach(()=> {
    cy.visit("http://localhost:8080/");
  })

  it("change all inputs", () => {
    // list input 'Цель кредита'
    // cy.get('.selectInput').click()
    // cy.get('.listItem').eq(1).click()
    //checkbox input 'есть зп карта'
    // cy.get('.switchInput').click()
    // slider inputs
      cy.get("[data-test='sliderTextField']").each(($el, i)=>{
        cy.get("[data-test='sliderTextField']").eq(i).type("New message")
          .clear()
          .type('11')


      })


  });

  // it("should has error", () => {
  //   cy.get("[data-test='sliderTextField']").each(($el, i)=>{
  //     cy.get("[data-test='sliderTextField']").eq(i).type("New message")
  //       .clear()
  //       .type('11')
  //   })
  //
  //   cy.get(".slider-input").eq(1)
  //     .should('have.class', 'validate-error')
  // });


});
