/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hashT = {}

    strs.forEach(str=>{
        let letter = str.split('').sort().join('')

        hashT[letter] ? hashT[letter].push(str) : hashT[letter] = [str]
    })

    const keys = Object.keys(hashT)

    const vals = keys.map(function (v) {
        return hashT[v];
    })
    return vals
};