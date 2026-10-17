/** Base path the site is served from ('' locally, '/worship_weekly' on GitHub Pages). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Link to a section on the home page that works from any page, e.g. homeAnchor('radio') -> '/worship_weekly/#radio'. */
export const homeAnchor = (id: string) => `${BASE_PATH}/#${id}`;
