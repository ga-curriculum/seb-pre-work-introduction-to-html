describe('The body of the document', function () {
  it('should have an h1 element', function () {
    const h1 = document.querySelector('h1');
    if (h1 === null) {
      fail(
        'No <h1> element found. Make sure you have an <h1> tag in your HTML.'
      );
    }
    expect(h1).not.toEqual(null);
  });
});

describe('The header text', function () {
  it('should contain the text "Café Aurora" (accented or unaccented)', function () {
    const h1 = document.querySelector('h1');

    if (!h1) {
      fail('No <h1> element found. Ensure there is an <h1> in your HTML.');
    } else {
      const normalizedText = h1.textContent
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

      if (normalizedText !== 'Cafe Aurora') {
        fail(
          `Expected <h1> to contain "Café Aurora" or "Cafe Aurora", but found "${h1.textContent.trim()}".\n\n❗ Make sure your heading is spelled correctly and does not have extra spaces or missing letters.`
        );
      }

      expect(normalizedText).toEqual('Cafe Aurora');
    }
  });
});
