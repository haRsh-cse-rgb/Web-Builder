const LANDING_PAGES_KEY = 'landingPages';

export const getLandingPages = () => {
  if (typeof window !== 'undefined') {
    const pages = JSON.parse(localStorage.getItem(LANDING_PAGES_KEY)) || [];
    return pages;
  }
  return [];
};

export const getLandingPage = (id) => {
  const pages = getLandingPages();
  return pages.find(page => page.id === id);
};

export const saveLandingPage = (page) => {
  const pages = getLandingPages();
  const index = pages.findIndex(p => p.id === page.id);
  if (index > -1) {
    pages[index] = page;
  } else {
    page.id = `${Date.now()}`;
    pages.push(page);
  }
  localStorage.setItem(LANDING_PAGES_KEY, JSON.stringify(pages));
};

export const deleteLandingPage = (id) => {
  let pages = getLandingPages();
  pages = pages.filter(page => page.id !== id);
  localStorage.setItem(LANDING_PAGES_KEY, JSON.stringify(pages));
};

export const publishLandingPage = (id) => {
  const pages = getLandingPages();
  const page = pages.find(page => page.id === id);
  if (page) {
    page.status = 'Live';
    saveLandingPage(page);
  }
};

export const unpublishLandingPage = (id) => {
  const pages = getLandingPages();
  const page = pages.find(page => page.id === id);
  if (page) {
    page.status = 'Draft';
    saveLandingPage(page);
  }
};