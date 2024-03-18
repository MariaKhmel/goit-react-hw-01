import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendCard}>
      <img className={css.friendAvatar} src={avatar} alt={name} width="48" />
      <p>{name}</p>
      {isOnline ? (
        <p className={css.online}>Online</p>
      ) : (
        <p className={css.offline}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;

FriendListItem.prototypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
