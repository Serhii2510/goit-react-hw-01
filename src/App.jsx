import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/Friendlist';
import userData from '../src/data/userData.json';
import friends from '../src/data/friends.json';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
