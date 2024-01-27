import Image from "next/image";
import React from "react";

const Artists = ({ imageSrc, username, ethAmount }) => {
    return (
        <div className="item">
            <div className="card">
                <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                        <div className="avatar position-relative">
                            <Image src={imageSrc} alt="avatar" className="img-fluid rounded-circle" width='50' height={50} />
                        </div>
                    </div>
                    <div className="flex-grow-1 ms-2">
                        <h6 className="mb-1">
                            {username}
                        </h6>
                        <p className="mb-0 text-success fw-bold">{ethAmount} ETH</p>
                    </div>
                </div>
            </div>
        </div>
    );
    }

    export default Artists;