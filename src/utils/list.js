const includeObject = (str, query) =>
  str.toLowerCase().includes(query.toLowerCase());

export const List = {
  include: includeObject,
};
