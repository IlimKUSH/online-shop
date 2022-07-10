import React, {useContext, useState} from 'react';
import {testiContext} from "../../contexts/testiContext";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const CommentCard = ({item}) => {

    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)

    const [likeActive, setLikeActive] = useState(false)
    const [disLikeActive, setDisLikeActive] = useState(false)

    function likef() {
        if (likeActive) {
            setLikeActive(false)
            setLike(like - 1)
        } else {
            setLikeActive(true)
            setLike(+1)
        }
        if (disLikeActive) {
            setDisLikeActive(false)
            setLike(like + 1)
            setDislike(like - 1)
        }
    }

    function dislikef() {
        if (disLikeActive) {
            setDisLikeActive(false)
            setDislike(dislike - 1)
        } else {
            setDisLikeActive(true)
            setDislike(+1)
        }
        if (likeActive) {
            setLikeActive(false)
            setDislike(dislike + 1)
            setLike(like - 1)
        }
    }

    const {deleteComment} = useContext(testiContext)


    return (
        <div>
            <div>
                <h4>{item.email}</h4>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <h3>{item.comment}</h3>
                    <div style={{
                        display: 'flex',
                        padding: '0 0 10px 10px'
                    }}>
                        <ThumbUpIcon
                            style={{
                                cursor: 'pointer'
                            }} onClick={likef}/>
                        <p style={{
                            marginRight: '15px'
                        }}>{like}</p>
                        <p>{dislike}</p>
                        <ThumbDownIcon onClick={dislikef}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentCard;
