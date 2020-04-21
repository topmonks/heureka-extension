const REGEX = /{(.+)}/; // example.{cz,sk}

// Very lightweight implementation of brace expansion
// example.{cz,sk} => ["example.cz", "example.sk"]
// By no means full implementation like e.g. npmjs.com/package/brace-expansion
module.exports = input => {
  const results = [];

  if (REGEX.test(input)) {
    const match = input.match(REGEX)[1];
    const items = match.split(",");
    items.forEach(item => {
      results.push(input.replace(REGEX, item));
    });
  } else {
    results.push(input);
  }

  return results;
};
