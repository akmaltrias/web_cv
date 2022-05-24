import React from "react";
import { Typography } from "@mui/material";
import {CustomTimeline, CustomSeparator} from "../Timeline/Timeline.js";
import { resumeData } from "../../utils/resumeData.js";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

import "./Profile.css";

const CustomTimelineContent = ({title, value}) => (
    <TimelineItem className="timeline_content">
        <CustomSeparator />
            <TimelineContent>
                <Typography className="timelineItem_text">
                    <span>{title}: </span> {value}
                </Typography>
            </TimelineContent>
    </TimelineItem>
);

const Profile = () => {
    return(
        <div className="profile container_shadow">
            <div className="profile_name">
                    <Typography className="name">{resumeData.nama}</Typography>
                    <Typography className="title">{resumeData.title}</Typography>
            </div>
           
            <div className="profile_image">
                <img src={require("../../assets/images/profile_image.jpeg")} alt="" />
            </div>

            <div className="profile_information">
                <CustomTimeline icon={<PersonRoundedIcon />} >
                    <CustomTimelineContent title="Nama" value={resumeData.nama}/>
                    <CustomTimelineContent title="Telepon" value={resumeData.telp}/>
                    <CustomTimelineContent title="Email" value={resumeData.email}/>
                    <CustomTimelineContent title="Alamat" value={resumeData.alamat}/>
                </CustomTimeline>

            </div>
        </div>
    )
}

export default Profile;