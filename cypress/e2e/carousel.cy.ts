describe('Carousel Component', () => {
  beforeEach(() => {
    cy.visit('/path/to/carousel');
  });

  // it('displays images in the carousel', () => {
  //   cy.get('.carousel__item')
  //     .its('length')
  //     .should('equal', Image.length);

  //   cy.get('.carousel__item')
  //     .first()
  //     .should('have.class', 'carousel__item--active')
  //     .find('img')
  //     .should('have.attr', 'src', images[0].src)
  //     .should('have.attr', 'alt', images[0].alt)
  //     .should('have.attr', 'aria-hidden', 'false');
  // });

  it('displays the images', () => {
    cy.fixture('carousel.json').then((images) => {
      cy.get('.carousel__item').should('have.length', images.length);
      images.forEach((image: any, i: number) => {
        cy.get('.carousel__item')
          .eq(i)
          .find('img')
          .should('have.attr', 'src', image.src)
          .and('have.attr', 'alt', image.alt);
      });
    });
  });

  // // it('switches to the next image when the right arrow is clicked', () => {
  // //   cy.get('.carousel__arrow--right').click();

  // //   cy.get('.carousel__item--active')
  // //     .should('not.have.class', 'carousel__item:first')
  // //     .find('img')
  // //     .should('have.attr', 'src', images[1].src)
  // //     .should('have.attr', 'alt', images[1].alt);
  // // });

  // // it('switches to the previous image when the left arrow is clicked', () => {
  // //   cy.get('.carousel__arrow--right').click();
  // //   cy.get('.carousel__arrow--left').click();

  // //   cy.get('.carousel__item--active')
  // //     .should('have.class', 'carousel__item:first')
  // //     .find('img')
  // //     .should('have.attr', 'src', images[0].src)
  // //     .should('have.attr', 'alt', images[0].alt);
  // // });

  // it('highlights the corresponding dot when an image is displayed', () => {
  //   cy.get('.carousel__dot--active')
  //     .should('have.class', `carousel__dot:nth-of-type(${activeIndex + 1})`);

  //   cy.get('.carousel__arrow--right').click();

  //   cy.get('.carousel__dot--active')
  //     .should('have.class', `carousel__dot:nth-of-type(${activeIndex + 2})`);
  // });
});
