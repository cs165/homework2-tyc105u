const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

function transformTextNodes(node) {
  // TODO(you): Implement this function! See HW spec for details.
  if (node.nodeType === Node.TEXT_NODE) {
    var s = [];
    var s = node.textContent.split(" ");
    for (var i = 0; i < s.length; i++) {
      s[i] = s[i].trim();
      if (s[i] == "" || s[i] === undefined) {
        s.splice(i, 1);
        i--;
      }
    }

    for (var i = 0; i < s.length; i++) {
      var s2 = "";
      if (s[i] in MATCH_LIST)
        s2 += MATCH_LIST[s[i]] + " ";
      else
        s2 += s[i] + " ";
    }

    node.textContent = s2;
  }

  for(const child of node.childNodes)
		transformTextNodes(child);
	
}

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
console.log('Extension updated');