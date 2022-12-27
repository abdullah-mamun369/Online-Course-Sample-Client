import React, { useEffect, useState } from 'react';
import "./Home.css"
import { FaSearch } from 'react-icons/fa';

const BannerHome = () => {

    const [sentence, setSentence] = useState('');
    const [showCursor, setShowCursor] = useState('|');
    const fullSentences = ['Graphic Design', 'Programming', 'Web Design', 'Marketing', 'Social Skill'];

    useEffect(() => {
        let i = 0;
        let j = 0;
        let isReverse = false;
        const forwardTimer = 120;
        const backwardTimer = 20;
        const stopTimer = 1000;
        const cursorTimer = 300;

        const updateTimer = (intervalTime, timeOut = false) => {
            clearInterval(interval);
            if (timeOut) {
                const cursorInterval = setInterval(() => {
                    setShowCursor((prev) => !prev)
                }, cursorTimer);

                setTimeout(() => {
                    clearInterval(cursorInterval);

                    interval = setInterval(typeWriter, intervalTime);
                    clearInterval(cursorInterval);
                }, stopTimer)
            } else {
                interval = setInterval(typeWriter, intervalTime);
            }
        }

        const typeWriter = () => {
            if (i > fullSentences[j].length) {
                isReverse = true;
                i--;
                updateTimer(backwardTimer, true);
            }
            if (isReverse && i === 0) {
                isReverse = false;
                i = 0;
                j = (j + 1) % fullSentences.length;
                setSentence('');
                updateTimer(forwardTimer);
            }
            // setSentence(fullSentences[j].substring(0, i) + '|');
            setSentence(fullSentences[j].substring(i, 0));
            i = isReverse ? i - 1 : i + 1;
        }

        let interval = setInterval(typeWriter, forwardTimer);

        return () => clearInterval(interval);
    }, [])


    return (
        <div className='banner-image w-screen h-[800px] flex justify-center items-center mt-[-80px]'>
            <div className='color-overlay'></div>
            <div className='z-10 '>
                <div className='flex justify-center'>
                    <div className='text-white'>
                        <h1 className=' text-5xl text-center font-bold leading-[60px]'>Learn your way with <br /> <span className='text-left'> WR Academy to <span className='text-primary ease-in duration-300'>{sentence}{showCursor ? '' : ''}</span></span></h1>
                        <p className='text-center text-2xl font-semibold my-8'>More than 100 Online courses</p>
                    </div>
                </div>
                <div>
                    <p className='text-center'><input type="text" placeholder="Search Course" className="input w-full max-w-xs" /></p>
                </div>
            </div>
        </div>

    );
};

export default BannerHome;