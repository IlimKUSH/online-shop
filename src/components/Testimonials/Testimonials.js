import React from 'react';
import Comments from "./Comments";

const Testimonials = () => {
    return (
        <div>
            <h4>username:caption</h4>
            <div className="post__comments">
                <Comments />
            </div>
        </div>
    );
};

export default Testimonials;
