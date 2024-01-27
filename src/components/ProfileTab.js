import { RestartAlt } from '@mui/icons-material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SellIcon from '@mui/icons-material/Sell';
import { data } from 'autoprefixer';
import Image from 'next/image';

const ProfileTab = ({href, image, title}) => {

    return (
            <div className='col-lg-4 mt-4'>
            <div className='tab-box p-4 border-0'>
                <div className='card-image mt-2 position-relative'>
                    <a href={href}>
                    <img src={image} alt='NFT Image' className='img-fluid' layout='responsive'/>
                    <div className='position-absolute top-0 end-0 me-3 mt-3'>
                    </div>
                    </a>
                </div>
                <div className='body-content mt-3'>
                    <h6 className='fw-bold'>{title}</h6>
                    <div className='ms-auto'>
                    </div>
                    <hr className='my-3' />

                </div>
            </div>
        </div>
    )
}

export default ProfileTab;