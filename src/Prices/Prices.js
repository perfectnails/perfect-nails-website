import React from 'react';
import './Prices.css';

const Prices = (props) => {
    return (
        <div className='container col-lg-12 col-md-12 md-top-padding'>
            <div className='col-lg-12 col-md-12 col-sm-12' style={{ background: '#3498DB', paddingBottom: '1.5%' }}>
                <h1 className='wow animated fadeInDown' data-wow-duration='2.5s'><strong>Services & Prices</strong></h1>
                <p className='wow animated fadeInDown' data-wow-duration='2.5s'><em>Prices may vary.</em></p>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 left-float wow animated fadeInLeft' data-wow-duration='2.5s'>
                <table className="table-fill">
                    <thead>
                    <tr>
                    <th>Service (Manicure & Pedicure)</th>
                    <th>Price</th>
                    </tr>
                    </thead>
                    <tbody clasName="table-hover">
                    <tr>
                        <td>Manicure & Pedicure w/ Spa</td>
                        <td>$20.00</td>
                    </tr>
                    <tr>
                        <td>Manicure</td>
                        <td>$10.00</td>
                    </tr>
                    <tr>
                        <td>Spa Pedicure</td>
                        <td>$14.00</td>
                    </tr>
                    <tr>
                        <td>Regular Pedicure</td>
                        <td>$13.00</td>
                    </tr>
                    <tr>
                        <td>French Manicure</td>
                        <td>$4.00 EXTRA</td>
                    </tr>
                    <tr>
                        <td>American Manicure</td>
                        <td>$4.00 EXTRA</td>
                    </tr>
                    <tr>
                        <td>Polish Change</td>
                        <td>$5.00</td>
                    </tr>
                    <tr>
                        <td>French Polish Change</td>
                        <td>$7.00</td>
                    </tr>
                    <tr>
                        <td>American Polish Change</td>
                        <td>$7.00</td>
                    </tr>
                    <tr>
                        <td>Nails Art</td>
                        <td>$2.00 & up per nail</td>
                    </tr>
                    <tr>
                        <td>Nail Repair</td>
                        <td>$3.00 & up</td>
                    </tr>
                    <tr>
                        <td>Toe Nail Repair</td>
                        <td>$4.00</td>
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
                    <th>Service (Nails Care)</th>
                    <th>Price</th>
                    </tr>
                    </thead>
                    <tbody clasName="table-hover">
                    <tr>
                        <td>Full Set of Acrylic</td>
                        <td>$20.00 & up</td>
                    </tr>
                    <tr>
                        <td>Fill of Acrylic</td>
                        <td>$12.00 & up</td>
                    </tr>
                    <tr>
                        <td>Full Set of Pink & White</td>
                        <td>$28.00 & up</td>
                    </tr>
                    <tr>
                        <td>Fill of Pink & White</td>
                        <td>$22.00 & up</td>
                    </tr>
                    <tr>
                        <td>Full Set of Silk Wrap</td>
                        <td>$30.00</td>
                    </tr>
                    <tr>
                        <td>Fill of Silk Wrap</td>
                        <td>$20.00</td>
                    </tr>
                    <tr>
                        <td>Full Set of Gel</td>
                        <td>$28.00</td>
                    </tr>
                    <tr>
                        <td>Fill of Gel</td>
                        <td>$18.00</td>
                    </tr>
                    <tr>
                        <td>Coating (Acrylic)</td>
                        <td>$17.00</td>
                    </tr>
                    <tr>
                        <td>Cut Down</td>
                        <td>$2.00 EXTRA</td>
                    </tr>
                    <tr>
                        <td>Nail Take Off</td>
                        <td>$8.00</td>
                    </tr>
                    <tr>
                        <td>Airbrush Design</td>
                        <td>$5.00 & up</td>
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