describe('The body of the document', function () {
  it('should have an h1 element', function () {
    const h1 = document.querySelector('h1');
    expect(h1).not.toEqual(
      null,
      'No <h1> element found. Make sure you have an <h1> tag in your HTML.'
    );
  });
});

describe('The header text', function () {
  it('should contain the text "Café Aurora" (accented or unaccented)', function () {
    const h1 = document.querySelector('h1');
    if (h1) {
      const normalizedText = h1.textContent
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
      expect(normalizedText).toEqual(
        'Cafe Aurora',
        `Expected <h1> to contain "Café Aurora" or "Cafe Aurora", but found "${h1.textContent.trim()}". Make sure your heading is spelled correctly and does not have extra spaces.`
      );
    }
  });
});
