import React from 'react';
import './Hours.css';

const Hours = (props) => {
    return (
        <div className='container col-12 md-top-padding'>
            <h1 className='wow animated fadeInDown' data-wow-duration='2.5s'><strong>Business Hours</strong></h1>
            <p className='wow animated fadeInDown' data-wow-duration='2.5s'>Perfect Nails is commited to providing you with nothing less than <strong><em>perfection</em></strong>.</p>
            <div className='wow animated fadeInUp' data-wow-duration='2.5s'>
                <table className="table-fill">
                    <thead>
                        <tr>
                            <th className="hours-th">Day</th>
                            <th className="hours-th">Hours</th>
                        </tr>
                    </thead>
                    <tbody clasName="table-hover">
                    <tr>
                        <td className="text-center">Monday</td>
                        <td className="text-center">9:00 AM - 7:00 PM</td>
                    </tr>
                    <tr>
                        <td className="text-center">Tuesday</td>
                        <td className="text-center">9:00 AM - 7:00 PM</td>
                    </tr>
                    <tr>
                        <td className="text-center">Wednesday</td>
                        <td className="text-center">9:00 AM - 7:00 PM</td>
                    </tr>
                    <tr>
                        <td className="text-center">Thursday</td>
                        <td className="text-center">9:00 AM - 7:00 PM</td>
                    </tr>
                    <tr>
                        <td className="text-center">Friday</td>
                        <td className="text-center">9:00 AM - 7:00 PM</td>
                    </tr>
                    <tr>
                        <td className="text-center">Saturday</td>
                        <td className="text-center">9:00 AM - 7:00 PM</td>
                    </tr>
                    <tr>
                        <td className="text-center">Sunday</td>
                        <td className="text-center">CLOSED</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <br/>
            <p><strong>Disclaimer</strong>: <em>Business hours may change without notice. Please call for more information.</em></p>
            <br/>
        </div>
    )
}

export default Hours;