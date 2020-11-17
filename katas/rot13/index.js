function rot13(message) {
  return message.split('').map((i) => {
    if (i.charCodeAt() >= 65 && i.charCodeAt() <= 90) {
      if (i.charCodeAt() + 13 > 90) {
        return String.fromCharCode(i.charCodeAt() - 13);
      } else {
        return String.fromCharCode(i.charCodeAt() + 13);
      }
    }

    if (i.charCodeAt() >= 97 && i.charCodeAt() <= 122) {
      if (i.charCodeAt() + 13 > 122) {
        return String.fromCharCode(i.charCodeAt() - 13);
      } else {
        return String.fromCharCode(i.charCodeAt() + 13);
      }
    }

    return i;
  }).join('');
}