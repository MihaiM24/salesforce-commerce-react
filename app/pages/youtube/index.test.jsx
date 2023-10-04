import React from "react";
import { renderWithProviders } from "../../utils/test-utils";
import Youtube from "./index";

test('Youtube component renders with the correct video URL', () =>{
    const {getByTitle} = renderWithProviders(<Youtube/>)
    const videoPlayer = getByTitle('hello world')

    expect (videoPlayer).toBeInTheDocument()
    expect (videoPlayer).toHaveAttribute('src', 'https://www.youtube.com/embed/Yw6u6YkTgQ4')

})
test('Youtube component renders an iframe element', () =>{
    const {container} = renderWithProviders(<Youtube />)
    const iFrameElement = container.querySelector('iFrame')
    expect(iFrameElement).toBeInTheDocument()
})
