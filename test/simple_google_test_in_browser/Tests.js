describe("Simple Google In Browser Tests", function() {
    it("Type Sencha into Google search", function () {
        debugger;
        // Given Googles search input
        ST.element('input[title="Search"]')
            // And there is focus on the input
            .focus() 
            // When I type in Sencha
            .type('Sencha') 
            .expect('value')
            .toBe('Sencha')
            // Then Sencha exists in input
            .and(function (input) {
                debugger;
                // In browser option
                expect(input.dom.value).toBe('Sencha');
            });
    });
});
