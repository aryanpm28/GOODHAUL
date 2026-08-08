// GOODHAUL: Privacy policy (demo content)

import InfoPage from "../components/InfoPage/InfoPage";

function Privacy() {
  return (
    <InfoPage eyebrow="Legal" title="Privacy policy">
      <p>
        This is a frontend-only demo application. Any information you type
        into forms here — checkout details, login, contact messages — stays
        in your browser and is never sent to a server or stored remotely.
      </p>
      <p>
        We do use your browser's local storage to remember your cart,
        wishlist and recently viewed items between visits. Clearing your
        browser data will reset all of it.
      </p>
      <p>
        No cookies, analytics or third-party trackers are used on this site.
      </p>
    </InfoPage>
  );
}

export default Privacy;
