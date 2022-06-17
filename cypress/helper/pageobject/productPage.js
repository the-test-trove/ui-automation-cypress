class ProductPage
{


    getPageTitle()
    {
        return cy.get('.title');
    }

    getAllProducts()
    {
        return cy.get('.inventory_item_name');
    }

    addItemToCart()
    {
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    }
}
module.exports = new ProductPage()