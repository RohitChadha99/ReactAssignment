import React from "react";
import './Home.css';
import image from './Assets/graph.png';
import Card from "./Components/Card";
import { HomeRepairServiceOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ProfileCard from "./Components/ProfileCard";
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import { FaUser, FaUsers, FaCalendarAlt, FaTachometerAlt } from 'react-icons/fa';
import CelebrationIcon from '@mui/icons-material/Celebration';
import EventIcon from '@mui/icons-material/Event';
import Drawer from "./Components/Drawer";

const Home = () => {
    return <div class="wrapper">
        <div class="box1" style={{ background: '#4ba4dd' }}>
            <img
                style={{ marginTop: '10px', marginLeft: '20px' }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABdCAYAAADnnTU+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUE5NUQxNjU1RDQwMTFFRDlEQ0U5MDVCRjNDMDA2NTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUE5NUQxNjY1RDQwMTFFRDlEQ0U5MDVCRjNDMDA2NTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1QTk1RDE2MzVENDAxMUVEOURDRTkwNUJGM0MwMDY1NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QTk1RDE2NDVENDAxMUVEOURDRTkwNUJGM0MwMDY1NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmD8370AAAJsSURBVHja7JxLSxthFIa/mRjTtCqKUStVpLVeIBTrxgtihRYKrdSV4I/oT+lvKHTnsgsRuunChYLLrrq1C0FKQcH7JU7fwxwhhLGZmQY9o++BJxeYJPPMdzszzIkXBMGMc+4DGABHLlvRAn6C5SY8PAdvwTC4yJhIHvSA7yLSDDrAI5fNaAc5Hw8nSlbjFJyLiOfuQPjujgRFKEKReyQi028uww6y756vLwoZFpHMxPeQNI7hxStQSvElAaiAB2AejCX4rGQTm2BNvyNtr9gG3yTX+qH8b3QlFNkHq+CTtcGeNHM+U8zNWl6K385ZE/Fu+HNcEClCEYpQhCIUoQhFKEIRilCEIhShCEUoQhGKUIQiFKEIRShCEYpQhCIUoQhFKEKRmxQJUmwfWBRpSbF9sVE/3tTgFjmOeZTlPq1DcGlNRHb+K9iK2WXkzjm5p3HDYovsgh09ynFEDlSmISG3y3LWoghFKEIRitx7kXor+1X5a2sjM9Wki7YLKyH2lFQiL8AiKLuwWCW4JRFhBXxOKyJVOh+1RW47cirzO+kYKWhLtBoZBlJvP+uuqTn5l8hL8MTQeB4Er11YzxVbRM7cFsCoIZGHYMKFhfixRdq0GTuNzbKPwXRUq1wnMgJ6DS4XUmL4zoUVdnVFunTjkkERaYmpqIMcJSJ98L0L/0vBYojEeG33ihJ5Bp4azkZkWXgDhlxVaa5fs+D06SC3XLsr+zmn03ExSkSmNylRXdIcy3J0676Wo1KUPp2t+vV9xXCLSEzq83qtiCRmv8AXzTat/mvNVTXpn+q8q/q6VrOK5TN0GiK9Ri70ub8CDACk4FV6MaqkBgAAAABJRU5ErkJggg=="
                alt=""
                width='20px'
            />
            <Drawer/>
        </div>
        <div class="box2">
            <p style={{ paddingTop: '5px', paddingLeft: '5px', marginLeft: '10px', fontSize: '15px' }}> Welcome, Rohit</p>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <ProfileCard displayReporter='true' displayEmail='true' />
                <Card title='Manage Leaves'>
                    <img src={image} style={{ width: '250px', padding: '10px' }} alt="Graph" />
                    {/* <p style={{ textAlign: 'center', paddingTop: '50px' }}>No Leave Balance</p> */}
                </Card>
                <Card title='Recent Applied Leaves'>
                    <div style={{ fontSize: '12px', textAlign: 'center' }}>
                        <LaptopChromebookOutlinedIcon style={{ color: 'gray', fontSize: '80px', textAlign: 'center' }} />
                        <p style={{ fontSize: '12px' }}>No Leaves Applied Recently</p>
                    </div>
                </Card>
                <Card title='Todays Attendence'>
                    <p style={{ textAlign: 'center' }}>00:00:00 Hrs</p>
                </Card>
                <Card title='All Posts'>
                    <div style={{ display: 'flex' }}>
                        <EventIcon style={{ paddingTop: '23px', paddingLeft: '10px' }} />
                        <p style={{ textAlign: 'center', padding: '10px' }}>Webinar on Migraine and Brain Health at Work</p>
                    </div>
                </Card>
            </div>
        </div>
        <div class="box3" style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex' }}>
                <CelebrationIcon style={{ paddingTop: '13px', paddingLeft: '100px', paddingRight: '10px' }} />
                <p>Events</p>
            </div>
            <ProfileCard wish='Happy Birthday' displayReporter='false' displayEmail='false'></ProfileCard>
        </div>
    </div>
}

export default Home;