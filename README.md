# flags-js

Simple memory efficient JavaScript Flags API

# Basic usage

The flags-js API is a simple context based API that allows the creation of sets
of flags based on contexts; the simplest use-case is as follows:

```javascript
/*Set up available flags*/
var flags = new FlagsJS.Flags(['A','B','C','D','E','F','G','H','I','J']);

/*Let's set some flags using a flag context variable!*/
var ctx = flags.set({}, ['A','C','E','G','I']);

/*We can use the same context to set MOAR flags!*/
ctx = flags.set(ctx, 'B');

/*Let's see whether or not all of this worked...*/
flags.isSet(ctx, ['E', 'G', 'B']);
/*returns: true*/

/*We can unset a flag in the context...*/
ctx = flags.unSet(ctx, 'B');

/*We can unset multiple flags in a context...*/
ctx = flags.unSet(ctx, ['A','C','E','G','I']);

/*We can check whether or not ALL of the following flags are set: */
flags.isSet(ctx, ['A','C','E','G','I']);
/*returns false after our unSet call...*/
```

More documentation to follow...
