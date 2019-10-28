import React from 'react';
import './Prices.css';

const Prices = (props) => {
    return (
        <div className='container col-lg-12 col-md-12 md-top-padding'>
            <div className='col-lg-12 col-md-12 col-sm-12' style={{ background: '#3C6478', paddingBottom: '1.5%' }}>
                <h1 className='wow animated fadeInDown' data-wow-duration='2.5s'><strong>Services & Prices</strong></h1>
                <p className='wow animated fadeInDown' data-wow-duration='2.5s'><em>Prices may vary (updated for 2019 - 20).</em></p>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 left-float wow animated fadeInLeft' data-wow-duration='2.5s'>
                <table className="table-fill">
                    <thead>
                    <tr>
                    <th>Manicure & Pedicure</th>
                    <th>Price</th>
                    </tr>
                    </thead>
                    <tbody clasName="table-hover">
                    <tr>
                        <td>Manicure & Pedicure w/ Spa</td>
                        <td>$27.00</td>
                    </tr>
                    <tr>
                        <td>Deluxe Pedicure (Sea Salt)</td>
                        <td>$25.00</td>
                    </tr>
                    <tr>
                        <td>Spa Pedicure</td>
                        <td>$17.00</td>
                    </tr>
                    <tr>
                        <td>Manicure</td>
                        <td>$12.00</td>
                    </tr>
                    <tr>
                        <td>Regular Pedicure</td>
                        <td>$16.00</td>
                    </tr>
                    <tr>
                        <td>Gel Manicure</td>
                        <td>$25.00</td>
                    </tr>
                    <tr>
                        <td>Color Gel</td>
                        <td>$15.00</td>
                    </tr>
                    <tr>
                        <td>Gel Polish Change</td>
                        <td>$18.00</td>
                    </tr>
                    <tr>
                        <td>French Gel (French Tip)</td>
                        <td>$20.00</td>
                    </tr>
                    <tr>
                        <td>Gel Polish Take Off (Removal)</td>
                        <td>$6.00</td>
                    </tr>
                    <tr>
                        <td>French Polish Change</td>
                        <td>$10.00</td>
                    </tr>
                    <tr>
                        <td>French Manicure (Polish)</td>
                        <td>$5.00 EXTRA</td>
                    </tr>
                    <tr>
                        <td>Polish Change</td>
                        <td>$8.00</td>
                    </tr>
                    <tr>
                        <td>Nail Art (Per One Nail)</td>
                        <td>$3.00 and Up</td>
                    </tr>
                    <tr>
                        <td>Toe Nail Repair</td>
                        <td>$5.00</td>
                    </tr>
                    <tr>
                        <td>Callus Treatment</td>
                        <td>$5.00 EXTRA</td>
                    </tr>
                    </tbody>
                </table>
                <br/>
                <br/>
            </div>

            <div className='col-lg-6 col-md-6 col-sm-12 right-float wow animated fadeInRight' data-wow-duration='2.5s'>
                <table className="table-fill">
                    <thead>
                    <tr>
                    <th>Nails Care</th>
                    <th>Price</th>
                    </tr>
                    </thead>
                    <tbody clasName="table-hover">
                    <tr>
                        <td>Full Set of Pink & White</td>
                        <td>$35.00 and Up</td>
                    </tr>
                    <tr>
                        <td>Fill of Pink & White</td>
                        <td>$28.00 and Up</td>
                    </tr>
                    <tr>
                        <td>Full Set of Acrylic</td>
                        <td>$23.00 and Up</td>
                    </tr>
                    <tr>
                        <td>Fill of Acrylic</td>
                        <td>$16.00 and Up</td>
                    </tr>
                    <tr>
                        <td>Full Set of Silk Wrap</td>
                        <td>$40.00</td>
                    </tr>
                    <tr>
                        <td>Fill of Silk Wrap</td>
                        <td>$30.00</td>
                    </tr>
                    <tr>
                        <td>Full Set of Gel (Builder Gel)</td>
                        <td>$35.00</td>
                    </tr>
                    <tr>
                        <td>Fill of Gel (Builder Gel)</td>
                        <td>$28.00</td>
                    </tr>
                    <tr>
                        <td>Acrylic Overlay (Coating)</td>
                        <td>$20.00</td>
                    </tr>
                    <tr>
                        <td>Nail Cut Down (With Fill)</td>
                        <td>$2.00 EXTRA</td>
                    </tr>
                    <tr>
                        <td>Nail Cut Down Only</td>
                        <td>$6.00</td>
                    </tr>
                    <tr>
                        <td>Nail Take Off (Removal)</td>
                        <td>$10.00</td>
                    </tr>
                    <tr>
                        <td>Nail Take Off (with Full Set)</td>
                        <td>$6.00 EXTRA</td>
                    </tr>
                    <tr>
                        <td>Nail Repair</td>
                        <td>$4.00</td>
                    </tr>
                    <tr>
                        <td>Airbrush Design</td>
                        <td>$8.00 and Up</td>
                    </tr>
                    <tr>
                        <td>Gel Top Coat</td>
                        <td>$5.00</td>
                    </tr>
                    </tbody>
                </table>
                <br/>
                <br/>
            </div>
        </div>
    )
}

export default Prices;