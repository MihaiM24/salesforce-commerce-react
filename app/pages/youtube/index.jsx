import React from 'react'
import { AspectRatio } from '../../components/shared/ui/index'

function Youtube(){
    return (
        <>
            <h1>Youtube page</h1>
            <AspectRatio maxW='740px' mt='10' ratio={4/3}>
            <iframe 
                src="https://www.youtube.com/embed/Yw6u6YkTgQ4" 
                title="hello world" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
            </AspectRatio>
        </>
    )
}
export default Youtube