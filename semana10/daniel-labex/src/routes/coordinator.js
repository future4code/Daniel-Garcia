export const goToAboutPagePT = (history) => {
  history.push("/sobre-este-site/portugues");
};

export const goToAboutPageEN = (history) => {
  history.push("/sobre-este-site/ingles");
};

export const goToContactsPage = (history) => {
  history.push("/contatos");
};

export const goToHomePage = (history) => {
  history.push("/");
};

export const goToLastPage = (history) => {
  history.goBack();
};

// export const goToPage = (history, page) => {
//   history.push(page)
// }
