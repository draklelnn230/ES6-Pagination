const paginate = (followers) => {
  const itemPerPage = 9;
  const numberOfPages = Math.ceil(followers.length / itemPerPage);
  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const startPage = index * itemPerPage;
    const endPage = followers.slice(startPage, startPage + itemPerPage);
    return endPage;
  });
  return newFollowers;
};

export default paginate;
