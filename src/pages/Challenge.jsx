import { useParams } from "react-router-dom";
// import { reactChallenges } from "../data/content";
// import ChallengeNavbar from "../components/challenge-navbar/ChallengeNavbar";
import WordConnect from "../challenges/word-connect/App";

const reactChallengesMap = {
  "word-connect": <WordConnect />,
};

function Challenge() {
  const params = useParams();
  const id = params?.id || "";

  return (
    <>
      {/* <ChallengeNavbar
        title={reactChallenges[id]?.title}
        link={reactChallenges[id]?.link}
      /> */}
      <div className="container">
        <WordConnect />
      </div>
    </>
  );
}

export default Challenge;
