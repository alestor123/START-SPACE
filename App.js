module.exports = data => {
var dt = data.match(/^[ \t]*(?=\S)/gm);
if (!dt) return 0
return dt[0].length
};