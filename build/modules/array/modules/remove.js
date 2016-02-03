/**
 * Removes all occurrences of the passed in items from the array and returns the array.
 *
 * __Note:__ Unlike {@link Array#without|`.without()`}, this method mutates the array.
 *
 * @function Array#remove
 * @param {...*} *items - Items to remove from the array.
 * @returns {Array} The array this method was called on.
 *
 * @example
 * var array = [1, 2, 3, 3, 4, 3, 5];
 *
 * remove(array,1);
 * // -> [2, 3, 3, 4, 3, 5]
 *
 * remove(array,3);
 * // -> [2, 4, 5]
 *
 * remove(array,[2, 5]);
 * // -> [4]
 */
$.remove = function(array, args) {
    if (isFunction(args)) {
		eachRaw(array, (item, index) => {
			if (args(item)) {
				spliceArray(array, index, 1);
			}
		});
    } else {
        if (!isArray(args)) {
            args = [args];
        }
        eachRaw(array, (item, index) => {
            if (has(args, item)) {
                spliceArray(array, index, 1);
            }
        });
    }
    return array;
};
