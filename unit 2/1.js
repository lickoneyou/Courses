function join(...a) {
  return a.join(' ').replace(/ +/gi, ' ')
}

join('Hello', 'Lectrum');
join('Hello', '', 'Lectrum');
join('Hello', ' ', 'Lectrum');