// 12. Напишите программу, которая проверяет, можно ли строку str разделить на две части таким
// образом, чтобы количество уникальных символов в обеих частях было одинаковым. Если
// возможно, выведите "Можно", иначе "Нельзя".
// Входные: str = "aabbcc" → Результат: "Можно"
// Входные: str = "abcabc" → Результат: "Нельзя"
function CountOfUnique(str) {
    if (str.length % 2 !== 0)
        return "Нельзя";
    let str1 = str.slice(0, str.length / 2);
    let str2 = str.slice(str.length / 2, str.length);
    const res1 = [];
    const res2 = [];
    for (let i = 0; i < str1.length; i++) {
        if (!res1.includes(str1[i]))
            res1.push(str1[i]);
    }
    for (let i = 0; i < str2.length; i++) {
        if (!res2.includes(str2[i]))
            res2.push(str2[i]);
    }
    if (res1.length === res2.length)
        return "Можно";
    return "Нельзя";
}
console.log(CountOfUnique("aabbac"));
