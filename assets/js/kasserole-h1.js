describe('Kasserole header', function () {
  it('should have an h1 element', function () {
    const h1 = document.querySelector('h1');
    expect(h1).not.toBe(
      null,
      'No <h1> element found. Make sure you have an <h1> tag in your HTML.'
    );
  });

  it('should contain the text "Kasserole"', function () {
    const h1 = document.querySelector('h1');
    if (h1) {
      expect(h1.textContent.trim()).toBe(
        'Kasserole',
        `Expected <h1> to contain "Kasserole", but found "${h1.textContent.trim()}". Make sure your heading is spelled correctly and does not have extra spaces.`
      );
    }
  });
});
