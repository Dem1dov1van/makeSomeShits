import React from 'react';
import s from './Profile.module.css';
console.log (s)

const Profile = () => {
    return (
        <content>
            <img src="https://cdn-7.nikon-cdn.com/Images/Learn-Explore/Photography-Techniques/2019/CA-Chris-Ogonek-Picture-Controls/Media/Chris-Ogonek-Picture-Controls-Vivid.low.jpg" alt="3"></img>
            <div className={s.WrapperInfo}>
                <img className={s.Ava} src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg" alt="4"></img>
                <div>
                    info about
                </div>
            </div>
            <div className={s.MyPosts}>
                <div>New post</div>
                <div>
                    <div className={`${s.MyPosts} ${s.item}`}> Post-1</div>
                    <div className={s.item}> Post-2</div>
                </div>
                
            </div>
        </content>
    )
}

export default Profile