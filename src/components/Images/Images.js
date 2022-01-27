import React, { useEffect, useState } from 'react';

const User = ({ ids }) => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${ids}`)
            .then((res) => res.json())
            .then((image) => setImages(image));
    }, [ids]);
    return (
        <div>
            <div>
                {<img style={{ width: '100%' }} src={images.url} alt={images.title} />}
                <h4 className="p-2">{images.title}</h4>
            </div>
        </div>
    );
};

export default User;
