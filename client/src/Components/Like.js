
import React, { useState } from 'react';


function Like() {
    const [like, setlike] = useState(0)
    const [dislike, setdislike] = useState(0)

    const [likeactive, setlikeactive] = useState(false)
    const [dislikeactive, setdislikeactive] = useState(false)

    function likef() {
        setlike(like + 1)

        // if (likeactive) {
        //     setlikeactive(false)
        //     setlike(like - 1)
        // } else {
        //     setlikeactive(true)
        //     setlike(like + 1)
        //     if (dislikeactive) {
        //         setdislikeactive(false)
        //         setlike(like + 1)
        //         setdislike(dislike - 1)
        //     }
        // }
    }

    function dislikef() {
        setdislike(dislike + 1)

        // if (dislikeactive) {
        //     setdislikeactive(false)
        //     setdislike(dislike - 1)
        // } else {
        //     setdislikeactive(true)
        //     setdislike(dislike + 1)
        //     if (likeactive) {
        //         setlikeactive(false)
        //         setdislike(dislike + 1)
        //         setlike(like - 1)
        //     }
        // }
    }

    return (
        <div className="likes">
            <div></div>
            <button onClick={likef} className={[likeactive ? 'active-like' : null, 'button'].join(' ')} >Like {like}</button>
            <button onClick={dislikef} className={[dislikeactive ? 'active-dislike' : null, 'button'].join(' ')} >Dislike {dislike}</button>
            <div></div>
        </div>
    );
}

export default Like;
