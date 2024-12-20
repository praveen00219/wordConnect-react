import "@fmc/components";

const { VITE_PATH, VITE_HOST_URL, DEV } = import.meta.env;

const backURL = DEV
  ? `${VITE_HOST_URL}${VITE_PATH}/#/react`
  : `/${VITE_PATH}/#/react/`;
const homeURL = DEV ? `${VITE_HOST_URL}${VITE_PATH}/` : `/${VITE_PATH}/`;

function ChallengeNavbar({ title, link }) {
  const reactSourceCodeBaseURL =
    "https://github.com/sadanandpai/frontend-mini-challenges/tree/main/apps/react/src/challenges/";

  return (
    <nav-bar
      backURL={backURL}
      homeURL={homeURL}
      titleText={title}
      sourceCodeLink={reactSourceCodeBaseURL + link}
    />
  );
}

export default ChallengeNavbar;
