import { useState } from 'react';
import './accordion.css'

const Accordion = () => {
    const sliceImg =[
        // {scr : 'Asset/Image/Capture.PNG'},
        // {scr : 'Asset/Image/Capture1.PNG'},
        // {scr : 'Asset/Image/Capture2.PNG'},
        // {scr : 'Asset/Image/Capture3.PNG'},
        // {scr : 'Asset/Image/Capture4.PNG'},
        // {scr : 'Asset/Image/Capture5.PNG'},
        // {scr : 'Asset/Image/Capture6.PNG'}
        <img className='img-fluid' src={require('Asset/Image/Capture.PNG')} alt="" />,
        <img className='img-fluid' src={require('Asset/Image/Capture1.PNG')} alt="" />,
        <img className='img-fluid' src={require('Asset/Image/Capture2.PNG')} alt="" />,
        <img className='img-fluid' src={require('Asset/Image/Capture3.PNG')} alt="" />,
        <img className='img-fluid' src={require('Asset/Image/Capture4.PNG')} alt="" />,
        <img className='img-fluid' src={require('Asset/Image/Capture5.PNG')} alt="" />,
        <img className='img-fluid' src={require('Asset/Image/Capture6.PNG')} alt="" />,
    ];
    const [indexImg,setindexImg]= useState(sliceImg[0]);

    const prePic = () =>{
        const currentIndexImg = sliceImg.findIndex(image => image.src = indexImg.src)
        if (currentIndexImg === 0){
            setindexImg(sliceImg[sliceImg.length - 1])
        } else {
            setindexImg(sliceImg[currentIndexImg - 1])
        }
    };
    
    return (
            <div className="accordion-wrapper">
                <div className="accordion-slice">
                    {indexImg}
                </div>
                <div className="prevSlider">
                    <i className="fa-solid fa-chevron-left" onClick={prePic}></i>
                </div>
                <div className="nextSlider">
                    <i className="fa-solid fa-chevron-right" ></i>
                </div>
            </div>
    );
}
 
export default Accordion;