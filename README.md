# Denormalize Adapter for TreeWalker

[TreeWalker](https://github.com/burdiuz/js-tree-walker) Adapter for normalized trees:
```javascript
import { create } from '@actualwave/tree-walker';
import { createAdapter } from '@actualwave/walker-denormalize-adapter';

const store = {
  entities: {
    nodes: {
      parent: {
        value: 'parent value',
        children: ['child'],
      }
      child: {
        value: 'child value',
      }
    },
  },
};

const root = create('parent', createAdapter(() => store.entities.nodes));
console.log(root.child.valueOf()); // { value: 'child value' }
```

### Demo
You can check demo on [jsfiddle.net](https://jsfiddle.net/actualwave/5euz47hq/).
