// 二维数组去重
const DeduplicateArr2 = (arr) => {
  let hash = {}
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      res.push(arr[i])
      hash[arr[i]] = true
    }
  }
  return res
}

// 根据数组某个属性去重
const uniqueBy = (arr, prop) => {
  const res = new Map()
  return arr.filter(
    (item) => !res.has(item[prop]) && res.set(item[prop], 1)
  )
}

// 全排列
/**
 *
 * @param {[]} list 需要全排列的数组
 * @param {number} k 当前递归的数组的第一个元素下标
 */
const getFullPerm = (list, k=0) => {
  let res = [];
  let m = list.length-1;
  const fullPerm = (list, k, m) => {
    if (k == m) {
      res.push([...list]);
    } else {
      for (let i = k; i <= m; i++) {
        //swap k and i
        let t = list[k];
        list[k] = list[i];
        list[i] = t;
        //recursion
        fullPerm(list, k + 1, m);
        list[i] = list[k];
        list[k] = t;
      }
    }
  };
  fullPerm(list, k, m);
  return res;
};

module.exports = {
  DeduplicateArr2,
  uniqueBy,
  getFullPerm,
}
