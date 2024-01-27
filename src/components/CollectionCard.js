import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Image from 'next/image';
import React from "react";

const CollectionCard = ({ href, images, title, artist, likes }) => {
    return (
        <div className="col-lg-4">
            <div className="collection-items mt-4">
                <div className="blog-box">
                    <a href={href}>
                    <div className="collection-image">
                        <div className="blog-image">
                            <div className="top-image d-flex justify-content-between">
                                {images.topImages.map((topImage, index) => (
                                    <Image key={index} src={topImage} alt="" className="img-fluid" layout='responsive' width={30} height={30} />
                                ))}
                            </div>
                            <div className="mt-3">
                                <Image src={images.mainImage} alt="" className="img-fluid w-100" layout='responsive' width={100} height={100} />
                            </div>
                        </div>
                    </div>
                    </a>
                    <div className="collection-content mt-3">
                        <div className="d-flex align-items-center">
                            <div className="collection-title">
                                <a href="" className="fw-bold h5">{title}</a>
                            </div>
                            <div className="collection-like-icon ms-auto">
                                <FavoriteBorderIcon />
                                {/*TODO: Implement Liking feature */}
                                <span className="fw-semibold mb-0">{likes}</span>
                            </div>
                        </div>
                        <div className='blog-profile mt-3'>
                            <h6 className='f-14 text-muted'>
                                Created By
                                <a href='' className='text-muted'>
                                    <Image src={artist.image} alt='' className='img-fluid rounded-circle avatar-xs mx-2' width={30} height={30}/>
                                    <span>@{artist.username}</span>
                                </a>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard;