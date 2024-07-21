import css from './Profile.module.css'

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={css.profile}>
            <div className={css.imageBlock}>
                <img className={css.image}
                    src={image}
                    alt="User avatar"
                />
                <p className={css.name}>{name}</p>
                <p className={css.userInfo}>&#64;{tag}</p>
                <p className={css.userInfo}>{location}</p>
            </div>
            
            <ul className={css.stats}>
                <li className={css.statsItem}>
                    <span className={css.statsItemTitle}>Followers</span>
                    <span className={css.statsItemNumber}>{stats.followers}</span>
                </li>
                <li className={css.statsItem}>
                    <span className={css.statsItemTitle}>Views</span>
                    <span className={css.statsItemNumber}>{stats.views}</span>
                </li> 
                <li className={css.statsItem}>
                    <span className={css.statsItemTitle}>Likes</span>
                    <span className={css.statsItemNumber}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;