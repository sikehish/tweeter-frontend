import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReadNotifyAction } from "../../react-redux/actions/Notifications";
import avatar from "../Assets/avatar.svg"

function Notify(props) {

    const mention = props.type;
    const notifId = props.notifId;
    const tweetId = props.tweetID;
    const isRead = props.isRead;
    const index = props.indexx;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const notify = useSelector((n) => n.NotificationReducer)
    const { notifyread } = notify;
    function handleToTweet(tweetId) {
        console.log(tweetId)
        navigate(`/totweet/${tweetId}`)
    }
    function handleNotify(notifId) {
        console.log(notifId)
        document.getElementsByClassName("notifyCard")[index].style.backgroundColor = "rgb(26, 28, 30)"
        dispatch(ReadNotifyAction(notifId))
        // document.getElementsByClassName("notifyCard")[index].style.backgroundColor = "rgba(255, 255, 255, 0.1)"
        // if()
    }
    useEffect(() => {
        if (isRead) {
            document.getElementsByClassName("notifyCard")[index].style.backgroundColor = "rgb(26, 28, 30)"
        }
        else {
            document.getElementsByClassName("notifyCard")[index].style.backgroundColor = "rgba(255, 255, 255, 0.1)"
        }
    }, [isRead])

    return <>
        <div className="notifyCard" onClick={() => {
            handleNotify(notifId)
        }}>
            <hr id="notifyLine" />
            <div className="notify1">
                <div className="notifyInfo">
                    <img src={avatar} className="notifyPic" />
                    <div className="notify2">
                        <p className="notifyName">{props.name}</p>
                        <p className="notifyUsername">{props.username}
                        </p>
                    </div>
                </div>
                {mention == "mention" ? <p className="notifyMsg">Mentioned in <b onClick={() => {
                    handleToTweet(tweetId)
                }} className="notifTweet">#Tweet</b></p> : null}
                {/* <p className="notifyMsg">There is no new cj:nullbcjhdbjlastestfyy bgguiyh mesjhbj,hvbvhhhh,nhghhjftcsage</p> */}
            </div>

        </div>


    </>
}

export default Notify