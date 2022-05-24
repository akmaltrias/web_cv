import React from 'react';
import { Grid, Paper } from '@mui/material';
import { Typography } from "@mui/material";
import { resumeData } from '../../utils/resumeData';
import {CustomTimeline, CustomSeparator} from "../../components/Timeline/Timeline.js";
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';

import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import { styled } from '@mui/material/styles';

import "./Resume.css"
import { TimelineDot } from '@mui/lab';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
}));

const Resume = () => {
  return (
   <>
   {/* about me */}
   <Grid container className='section'>
     <Grid item className="section_title" style={{ marginBottom: 25 }}>
       <span></span>
       <h6 variant="h6" className="section_title_text">Tentang Saya</h6>
     </Grid>
     <Grid item xs={12}>
       <Typography className="aboutme_text">
          {resumeData.tentang}
       </Typography>
     </Grid>
   </Grid>

   {/* education/experience */}
   <Grid container className="section">
     <Grid item className="section_title" style={{ marginBottom: 25 }}>
       <span></span>
       <h6 variant="h6" className="section_title_text">Pendidikan dan Prakerin</h6>
     </Grid>

       
     <Grid item xs={12}>
     <Grid container className='resume_timeline' style={{ marginTop: 30 }}>
        {/* pendidikan */}
         <Grid item sm={12} md={6}>
         <CustomTimeline title={"Pendidikan"} icon={<SchoolRoundedIcon />}>
              {resumeData.pendidikan.map( (d) =>
                <TimelineItem>
                  <CustomSeparator />
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'>{d.title}</Typography>
                      <Typography variant="caption" className='timeline_date'>{d.date}</Typography>
                      <Typography variant="body2" className='timeline_desc'>{d.desc}</Typography>
                    </TimelineContent>
                </TimelineItem>
              )}
            </CustomTimeline>
         </Grid>

         {/* pengalaman prakerin */}
         <Grid item sm={12} md={6}>
            <CustomTimeline title={"Prakerin"} icon={<WorkRoundedIcon />}>
              {resumeData.pengalaman.map( (p) =>
                <TimelineItem>
                  <CustomSeparator />
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'>{p.title}</Typography>
                      <Typography variant="caption" className='timeline_date'>{p.date}</Typography>
                      <Typography variant="body2" className='timeline_desc'>{p.desc}</Typography>
                    </TimelineContent>
                </TimelineItem>
              )}
            </CustomTimeline>
         </Grid>
       </Grid>
     </Grid>
    </Grid>

    {/* Skills */}
   <Grid container className="section graybg">
   <Grid item className="section_title" 
   style={{ marginBottom: 80 }}>
       <span></span>
       <h6 variant="h6" className="section_title_text">Tech Stack</h6>
     </Grid>

     <Grid item xs={12}>
       <Grid container spacing={3} justifyContent="space-around" >
        {resumeData.tech.map((te) => (
            <Item elevation={2} className='tech'> 
              <Typography variant={"h6"} className="tech_title">
                {te.title}
              </Typography>
              {te.desc.map( (element) =>(
                <Typography variant="body2" className="tech_desc">
                  <TimelineDot variant='outlined' className='timeline_dot' />
                    {element}
                </Typography>
              ))}
            </Item>
        ))}
       </Grid>
     </Grid>
    

   </Grid>

    
   </>
  )
}

export default Resume