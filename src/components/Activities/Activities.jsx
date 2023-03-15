import React from 'react';
import Activity from './Activity';
import { useState, useEffect } from 'react';
import fetchData from '../../funtion/fetchData';

const Activities = () => {
        const [activities, setActivities] = useState(null)
    useEffect(() => {
        const data = async () => {
            const ActivData = await fetchData('activities');
                setActivities(ActivData)
        };
        data()
    }, []);

    if (activities) {
        return (
            <section className='activities'>
                <h1>Activités à Marseille</h1>
                <div className='list'>
                    {activities.map(activity =>
                        <Activity key={activity._id} name={activity.name} img={activity.img} />
                    )}
                </div>
            </section>
        );
    }
}

export default Activities;
