describe('Стартова сторінка', () => {
  it('відображає заголовок і дозволяє збільшити лічильник', () => {
    cy.visit('http://localhost:5173');

    cy.contains('h1', 'Get started').should('be.visible');

    cy.contains('button', 'Count is 0').click();

    cy.contains('button', 'Count is 1').should('be.visible');
  });
});
