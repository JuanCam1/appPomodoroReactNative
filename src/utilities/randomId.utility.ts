export const randomId = (id: string) => {
  id = id || "-1";
  return id === "-1" ? uuidv4() : id;
};

export const uuidv4 = () => {
  const fecha = Date.now().toString();
  const random = Math.random().toString(36).substring(2);
  return fecha + random;
};

