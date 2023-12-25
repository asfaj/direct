import React from 'react'
import Grandchild from './Grandchild';
import Card from './Card';

export const Display = () => {
    const title1="hello world"
    const title2="new title"
    const description="second"
    const adding="new string"
return (
    <div>
        <h1>hello</h1>
        <Card title={title2} description={description} new={adding}/>
    </div>
)
}

export default Display;
