describe("Tests", function() {
    it("Type Sencha into Google search", function () {
        // Given Googles search input
        ST.element('input[title="Search"]').
            // And there is focus
            focus(). 
            // When I type in Sencha
            type('Sencha') 
            // Then Sencha exists in input
            .and(function (input) {
                console.log(`value=${input.dom.value}`);
                debugger;
                expect(input.dom.value).toBe('Sencha');
            });
    });
});