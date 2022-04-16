const greek = 'αβγδεζηθικλμνξοπρσςτυφχψω';
// const greek = 'abcdefghijklmnopqrstuvwxyz';

const pick = (a) => a[Math.floor(Math.random() * a.length)];

const randomGibberish = (length = 10) => {
  const elements = [];
  for (let i = 0; i < length; i += 1) {
    elements.push(pick(greek));
  }

  return elements.join('');
};

module.exports = randomGibberish;
