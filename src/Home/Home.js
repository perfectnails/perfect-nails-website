import React from 'react';
import './Home.css';

const Header = (props) => {
    return (
        <div className='container col-12 md-top-padding' style={{ background: '#3C6478', height: '85vh', marginTop: '5%' }} id='header'>
            <h1 className='perfect-nails wow animated fadeInDown' data-wow-duration='2.5s'><span><strong>Perfect Nails</strong></span></h1>
            <div className='wow animated fadeInDown' data-wow-duration='2.5s'>
                <h5 className='wow animated pulse infinite'>Where your nails deserve perfection.</h5>
            </div>
            
            <hr style={{ color: '#ffffff' }} />

            <h5 className='sm-top-padding sm-bottom-padding'>
                68955 Ramon Rd Suite #5<br/>
                Cathedral City, CA 92234<br/>
                (760) 321 - 4532
            </h5>

            <p className='sm-bottom-padding wow animated'>
                Please call if you're interested in making an appointment!
                <br/>
                <br/>
                <a href="https://perfectnailscc.com/#/hours">Important information regarding the long wait times.</a>
            </p>

            <div className='wow animated fadeInUp' data-wow-duration='2.5s'>
                <p>
                    <span><a href="https://www.google.com/search?rlz=1C5CHFA_enUS782US782&ei=47KtW8-WPNPF0PEPrc6SgA8&q=perfect+nails+cathedral+city&oq=perfect+nails+cathedral+city&gs_l=psy-ab.3..35i39l2.1579.3387..3528...0.0..1.311.2315.0j9j4j1......0....1..gws-wiz.......0j0i71j0i20i264j0i22i30.ZVf0kjGJoao#lrd=0x80db1d1899e4a32d:0xf850b7b22d42ad35,1,,," target="_blank" rel='noreferrer noopener'><i className="fa fa-google fa-2x mr-4"></i></a></span>
                    <span><a href="https://www.facebook.com/pages/Perfect-Nails/148491745180194" target="_blank" rel='noreferrer noopener'><i className="fa fa-facebook fa-2x ml-4 mr-4"></i></a></span>
                    <span><a href="https://www.yelp.com/biz/perfect-nails-cathedral-city?osq=perfect+nails" target="_blank" rel='noreferrer noopener'><i className="fa fa-yelp fa-2x ml-4"></i></a></span>                
                </p>
            </div>
        </div>
    )
}

export default Header;