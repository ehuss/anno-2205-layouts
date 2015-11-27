'use strict';

var Anno2205Layouts = Anno2205Layouts || {};
(function(Anno2205Layouts) {

    var Resource = {
        addi: function(dest, source) {
            _.each(source, function(value, key) {
                if (dest.hasOwnProperty(key)) {
                    dest[key] += value;
                } else {
                    dest[key] = value;
                }
            });
        },

        addikey: function(dest, key, value) {
            if (dest.hasOwnProperty(key)) {
                dest[key] += value;
            } else {
                dest[key] = value;
            }
        },

        subi: function(dest, source) {
            _.each(source, function(value, key) {
                if (dest.hasOwnProperty(key)) {
                    dest[key] -= value;
                } else {
                    dest[key] = -value;
                }
            });
        },

        mul: function(obj, amount) {
            var result = {};
            _.each(obj, function(value, key) {
                result[key] = value*amount;
            });
            return result;
        },

        roundi: function(obj) {
            _.each(obj, function(value, key) {
                obj[key] = Math.ceil(value);
            });
        }
    };

    Anno2205Layouts.Resource = Resource;

}(Anno2205Layouts));
