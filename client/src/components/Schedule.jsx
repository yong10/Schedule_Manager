import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';


const ScheduleForm = props => {
    const [activity, setActivity] = useState("");
    const [description, setDescription] = useState("");
    const [start, setStart] = useState("");
    const [duration, setDuration] = useState(1);
    const [units, setUnits] = useState("minutes");
    const [errors, setErrors] = useState({})


    const CreateSchedule = e => {
        e.preventDefault();
        const scheduleItem = {activity, description, start, duration, units};
        axios.post("http://localhost:8000/api/schedule", scheduleItem)
            .then(res => {
                console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors)
                } else {
                    navigate("/");
                }
            }).catch(err => console.log(err));
    }

    return(
        <div className="row my-3">
            <form className="col-sm-8 offset-sm-2" onSubmit={CreateSchedule}>
                <div className="form-group mb-3">
                    <label>Activity</label>
                    <input type="test" className="form-control" onChange={e => setActivity(e.target.value)}/>
                    {errors.activity ? <p className="text-danger">{errors.activity.properties.message}</p>: "" }
                </div>
                <div className="form-group mb-3">
                    <label>Description</label>
                    <textarea className="form-control" onChange={e => setDescription(e.target.value)}></textarea>
                    {errors.description ? <p className="text-danger">{errors.description.properties.message}</p>: "" }
                </div>
                <div className="form-group mb-3">
                    <label>Start</label>
                    <input type="datetime-local" className="form-control" onChange={e => setStart(e.target.value)}/>
                    {errors.start ? <p className="text-danger">{errors.start.properties.message}</p>: "" }
                </div>
                <div className="row mb-3">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Duration</label>
                            <input type="number" className="form-control" onChange={e => setDuration(e.target.value)} value={duration}/>
                            {errors.duration ? <p className="text-danger">{errors.duration.properties.message}</p>: "" }
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Units</label>
                            <select className="form-control" onChange={e => setUnits(e.target.value)}>
                                <option>minutes</option>
                                <option>hours</option>
                                <option>days</option>
                            </select>
                        </div>
                    </div>
                </div>
                <input type="submit" className="btn btn-dark w-100" value="Add to Schedule" />
            </form>
        </div>

    )

}

export default ScheduleForm;