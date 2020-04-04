function generateId() {
  return Math.floor(Math.random() * 4 ** 25).toString(16).toUpperCase().padStart(4, '0');
}

export default generateId;
