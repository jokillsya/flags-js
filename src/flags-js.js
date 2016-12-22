(function(Flags) {

  'use strict';

  var namespace = Flags;

  namespace.Flags = function(flagArr) {

    if (Object.prototype.toString.call(flagArr) !== '[object Array]') {

      throw new Error('Invalid Flags constructor parameters.');

    }

    this.FLAG_DEFS = {};

    for (var i = 0; i < flagArr.length; i++) {

      this.FLAG_DEFS[flagArr[i]] = (1 << i);

    }

  };

  namespace.Flags.prototype.getFlagDefinitions = function() {

    return this.FLAG_DEFS;

  };

  namespace.Flags.prototype.set = function(ctx, _switch) {

    if (typeof(_switch) === 'string') {

      ctx |= this.FLAG_DEFS[_switch];
      return ctx;

    }

    if (Object.prototype.toString.call(_switch) !== '[object Array]') {

      throw new Error('Invalid function parameters.');

    }

    for (var i = 0; i < _switch.length; i++) {

      ctx |= this.FLAG_DEFS[_switch[i]];

    }

    return ctx;

  };

  namespace.Flags.prototype.unSet = function(ctx, _switch) {

    if (typeof(_switch) === 'string') {

      ctx &= ~(this.FLAG_DEFS[_switch]);
      return ctx;

    }

    if (Object.prototype.toString.call(_switch) !== '[object Array]') {

      throw new Error('Invalid function parameters.');

    }

    for (var i = 0; i < _switch.length; i++) {

      ctx &= ~(this.FLAG_DEFS[_switch[i]]);

    }

    return ctx;

  };

  namespace.Flags.prototype.isSet = function(ctx, _switch) {

    if (typeof(_switch) === 'string') {

      return (ctx & this.FLAG_DEFS[_switch]) === this.FLAG_DEFS[_switch];

    }

    if (Object.prototype.toString.call(_switch) !== '[object Array]') {

      throw new Error('Invalid function parameters.');

    }

    var mask = 0;

    for (var i = 0; i < _switch.length; i++) {

      mask |= this.FLAG_DEFS[_switch[i]];

    }

    return (ctx & mask) === mask;

  };

  Flags = namespace;

})(window.FlagsJS = window.FlagsJS || {});
