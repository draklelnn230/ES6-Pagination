const container = document.querySelector(".container");
const display = (followers) => {
  const users = followers
    .map((user) => {
      const { avatar_url, login, html_url } = user;
      return `<article class="card">
     <img src="${avatar_url} alt="${login}" />
     <h4>${login}</h4>
     <a href="${html_url} class="btn">view profile</a>
     </article>`;
    })
    .join("");
  container.innerHTML = users;
};

export default display;
