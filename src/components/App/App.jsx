import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

import userData from "../../userData.json";
import friends from "../../friends.json";
import transactions from "../../transactions.json";

import css from "./App.module.css";

export function App() {
  return (
    <div className={css.container}>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
