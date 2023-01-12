/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    fword = s.split('').sort().join('')
    sword = t.split('').sort().join('')
    
     if( fword===sword){
         return true
     } else{
         return false
     }
 };