import AddIcon from '@mui/icons-material/Add';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import BrushIcon from '@mui/icons-material/Brush';
import MoodIcon from '@mui/icons-material/Mood';
import CollectionsIcon from '@mui/icons-material/Collections';
import { RestartAlt } from '@mui/icons-material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React, { useState, useEffect } from 'react';

const ExploreTab = () => {
    const [value, setValue] = useState('1');
    const [tabData, setTabData] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            const dataForTabs = [
                // Tab 1 data
                {
                    title: 'All',
                    icon: <AddIcon />,
                    content: [
                        {
                            title: 'Robotic Body Art',
                            artist: '@Artist_1',
                            artistImage: '/images/slider/user/img-1.jpg',
                            price: '0.54 ETH',
                            image: '/images/explore/img-1.png',
                        },
                        {
                            title: 'Liquid Wave',
                            artist: '@Artist_2',
                            artistImage: '/images/slider/user/img-2.jpg',
                            price: '2.15 ETH',
                            image: '/images/explore/img-4.png',
                        },
                        {
                            title: 'Maccky Alex',
                            artist: '@Artist_3',
                            artistImage: '/images/slider/user/img-8.jpg',
                            price: '1.1 ETH',
                            image: '/images/explore/img-7.png',
                        },
                        {
                            title: 'Memes',
                            artist: '@Artist_4',
                            artistImage: '/images/slider/user/img-6.jpg',
                            price: '0.54 ETH',
                            image: '/images/explore/img-4.png',
                        },
                        {
                            title: 'Collection',
                            artist: '@Artist_5',
                            artistImage: '/images/slider/user/img-7.jpg',
                            price: '0.54 ETH',
                            image: '/images/explore/img-8.png',
                        }
                    ],
                },
                // Tab 2 data
                {
                    title: 'Games',
                    icon: <SportsEsportsIcon />,
                    content: [
                        {
                            title: 'Liquid Wave',
                            artist: '@Artist_2',
                            artistImage: '/images/slider/user/img-2.jpg',
                            price: '2.15 ETH',
                            image: '/images/explore/img-4.png',
                        },
                        {
                            title: 'Maccky Alex',
                            artist: '@Artist_3',
                            artistImage: '/images/slider/user/img-8.jpg',
                            price: '1.1 ETH',
                            image: '/images/explore/img-7.png',
                        },
                        {
                            title: 'Memes',
                            artist: '@Artist_4',
                            artistImage: '/images/slider/user/img-6.jpg',
                            price: '0.54 ETH',
                            image: '/images/explore/img-10.png',
                        }
                    ],
                },
                // Tab 3 data
                {
                    title: 'Art',
                    icon: <BrushIcon />,
                    content: [
                        {
                            title: 'Maccky Alex',
                            artist: '@Artist_3',
                            artistImage: '/images/slider/user/img-8.jpg',
                            price: '1.1 ETH',
                            image: '/images/explore/img-7.png',
                        },
                        {
                            title: 'Memes',
                            artist: '@Artist_4',
                            artistImage: '/images/slider/user/img-6.jpg',
                            price: '0.54 ETH',
                            image: '/images/explore/img-10.png',
                        },
                        {
                            title: 'Collection',
                            artist: '@Artist_5',
                            artistImage: '/images/slider/user/img-7.jpg',
                            price: '0.54 ETH',
                            image: '/images/explore/img-13.png',
                        }
                    ],
                },
                // Tab 4 data
                {
                    title: 'Memes',
                    icon: <MoodIcon />,
                    content: [
                        {
                            title: 'Collection',
                            artist: '@Artist_5',
                            artistImage: '/images/slider/user/img-7.jpg',
                            price: '0.54 ETH',
                            image: '/images/explore/img-13.png',
                        },
                        {
                            title: 'Robotic Body Art',
                            artist: '@Artist_1',
                            artistImage: '/images/slider/user/img-1.jpg',
                            price: '0.54 ETH',
                            image: '/images/explore/img-1.png',
                        },
                        {
                            title: 'Liquid Wave',
                            artist: '@Artist_2',
                            artistImage: '/images/slider/user/img-2.jpg',
                            price: '2.15 ETH',
                            image: '/images/explore/img-4.png',
                        }
                    ],
                },
                // Tab 5 data
                {
                    title: 'Collection',
                    icon: <CollectionsIcon />,
                    content: [
                        {
                            title: 'Liquid Wave',
                            artist: '@Artist_2',
                            artistImage: '/images/slider/user/img-2.jpg',
                            price: '2.15 ETH',
                            image: '/images/explore/img-4.png',
                        },
                        {
                            title: 'Maccky Alex',
                            artist: '@Artist_3',
                            artistImage: '/images/slider/user/img-8.jpg',
                            price: '1.1 ETH',
                            image: '/images/explore/img-7.png',
                        },
                        {
                            title: 'Memes',
                            artist: '@Artist_4',
                            artistImage: '/images/slider/user/img-6.jpg',
                            price: '0.54 ETH',
                            image: '/images/explore/img-10.png',
                        }
                    ],
                }

            ];
            setTabData(dataForTabs);
        };

        fetchdata();
    }, []);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='nav nav-tabs align-items-center justify-content-center row' id='nav-tab' role='tablist'>
            <TabContext value={value}>
            <TabList onChange={handleChange} aria-label="Explore section Tab" centered>
                {tabData.map((tab, index) => (
                    <Tab key={index} icon={tab.icon} label={tab.title} value={(index + 1).toString()} />
                ))}
            </TabList>

            {tabData.map((tab, index) => (
                <TabPanel key={index} value={(index + 1).toString()}>
                    <div className='row'>
                    {tab.content.map((item, itemIndex) => (
                        <div key={itemIndex} className='col-lg-3 mt-4'>
                            {/* Render content for each item in the tab */}
                            <div className='tab-content p-4 border-0'>
                                <div className='header d-flex align-items-center justify-cotent-start'>
                                    <div className='avatar-xs'>
                                        <img src={item.artistImage} alt='' className='img-fluid rounded-circle'></img>
                                    </div>
                                    <h6 className='mb-0 ms-2 fw-semibold text-muted f-14'>{item.artist}</h6>
                                </div>
                                <div className='card-image mt-3'>
                                    <img src={item.image} alt='' className='img-fluid'></img>
                                </div>
                                <div className='body-content mt-3'>
                                    <h6 className='fw-bold'>{item.title}</h6>
                                    <div className='d-flex'>
                                        <p className='ms-auto text-muted'>Price: <span className='text-success'>{item.price}</span></p>
                                    </div>
                                    <hr />
                                    <div className='d-flex mt-3 align-items-center'>
                                        <div className='history'>
                                            <RestartAlt /> View history
                                        </div>
                                        <div className='bid-button ms-auto'>
                                            <button className='btn btn-sm btn-primary rounded-pill'>Bid</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='mt-5'>
                        <div className='col-lg-12'>
                            <div className='text-center'>
                                <button className='btn btn-white text-dark shadow'>
                                    <RestartAlt /> View all items
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                </TabPanel>
            ))}
    </TabContext>
    </div>
    )
}
export default ExploreTab;