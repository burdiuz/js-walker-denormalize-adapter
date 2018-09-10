'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const defaults = {
  validateRoot: item => item,

  // list methods
  isList: item => item instanceof Array,
  isNode: item => typeof item === 'string',
  getName: item => item,

  getNodeParent: () => {
    throw new Error('adapter.getNodeParent() is not implemented.');
  },
  getNodeRoot: () => {
    throw new Error('adapter.getNodeRoot˝() is not implemented.');
  },

  string: item => item
};

const createAdapter = getStore => {
  const adapter = Object.assign({}, defaults, {
    // list methods
    toList: item => adapter.isList(item) ? item : [item],
    getLength: item => adapter.toList(item).length,
    getNodeAt: (item, index = 0) => adapter.toList(item)[index],

    // node methods
    toNode: item => adapter.isList(item) ? item[0] : item,

    hasChild: (item, name) => !!adapter.getChildrenByName(item, name).length,

    getChildren: item => {
      const node = adapter.value(item);

      if (!node || !node.children) return [];

      return node.children;
    },

    getChildrenByName: (item, name) => adapter.getChildren(item).filter(child => adapter.getName(child) === name.toLowerCase()),

    getChildAt: (item, index = 0) => adapter.getChildren(item)[index],

    value: item => getStore()[item]
  });

  return adapter;
};

exports.createAdapter = createAdapter;
//# sourceMappingURL=index.js.map
