export default function cleanSet(set, startString) {
  const res = [];
  set.forEach((rec) => {
    if (startString && rec.startsWith(startString)) res.push(rec.slice(startString.length));
  });

  return res.join('-');
}
