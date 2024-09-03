import React from 'react';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const QZone = () => {
     return (
          <div>
               <h4 className='mt-5'>Q-Zone</h4>
               <div className='text-center' style={{backgroundColor: '#F3F3F3'}}>
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
               </div>
          </div>
     );
};

export default QZone;