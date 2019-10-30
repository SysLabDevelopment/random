/**
 * Рандомное целое ∈ [min, max]
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

/**
 *  Рандомное вещественное
 *
 * @param {number} max
 * @returns {number}
 */
export const randomReal = randomInteger.bind(null, 1);

/**
 *  Метод массива .random()
 *
 * @returns рандомный элемент массива
 */
Array.prototype.random = function () {
  return this[randomInteger(0, this.length - 1)];
};

/**
 *  Метод нодлиста .random()
 *
 * @returns рандомная нода листа
 */
// NodeList.prototype.random = Array.prototype.random;

/**
 *   "var1/var2/var3".random()
 *
 * @returns рандомная подстрока
 */
// String.prototype.random = function() {
//   return Array.prototype.random.call(this.split("/"));
// };
