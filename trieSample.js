class Node {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!current.children[char]) {
        current.children[char] = new Node();
      }
      current = current.children[char];
    }
    current.isWord = true;
  }

  search(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return current.isWord;
  }

  startsWith(prefix) {
    let current = this.root;
    for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i]
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return true;
  }

  printPrefix(node = this.root, prefix = "") {
    if (node.isWord) {
      console.log(prefix);
    }
    for (const [char, childNode] of Object.entries(node.children)) {
      this.printPrefix(childNode, prefix + char);
    }
  }

  searchPrefix(prefix) {
    let current = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!current.children[char]) {
        return [];
      }
      current = current.children[char];
    }
    return this.printPrefix(current, prefix);
  }
}

const trie = new Trie();
trie.insert("sajad");
trie.insert("saju");
trie.insert("mango");
trie.searchPrefix('ma')
