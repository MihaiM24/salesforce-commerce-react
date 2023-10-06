/*
 * Copyright (c) 2022, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, {useEffect} from 'react'
import {useIntl, FormattedMessage} from 'react-intl'
import {useLocation} from 'react-router-dom'

// Components
import {
    Box,
    Heading,
    Button,
    SimpleGrid,
    HStack,
    VStack,
    Text,
    Flex,
    Stack,
    Container,
    Link
} from '@salesforce/retail-react-app/app/components/shared/ui'

// Project Components
import Hero from '@salesforce/retail-react-app/app/components/hero'
import Seo from '@salesforce/retail-react-app/app/components/seo'
import Section from '@salesforce/retail-react-app/app/components/section'
import ProductScroller from '@salesforce/retail-react-app/app/components/product-scroller'
import WeatherApp from '../weatherapp/WeatherApp'
import WeatherComponent from '../weatherapp/WeatherComponent'

// Others
import {getAssetUrl} from '@salesforce/pwa-kit-react-sdk/ssr/universal/utils'
import {heroFeatures, features} from '@salesforce/retail-react-app/app/pages/home/data'

//Hooks
import useEinstein from '@salesforce/retail-react-app/app/hooks/use-einstein'

// Constants
import {
    MAX_CACHE_AGE,
    HOME_SHOP_PRODUCTS_CATEGORY_ID,
    HOME_SHOP_PRODUCTS_LIMIT
} from '@salesforce/retail-react-app/app/constants'
import {useServerContext} from '@salesforce/pwa-kit-react-sdk/ssr/universal/hooks'
import {useProductSearch} from '@salesforce/commerce-sdk-react'

/**
 * This is the home page for Retail React App.
 * The page is created for demonstration purposes.
 * The page renders SEO metadata and a few promotion
 * categories and products, data is from local file.
 */
const Home = () => {
    const intl = useIntl()
    const einstein = useEinstein()
    const {pathname} = useLocation()

    const {res} = useServerContext()
    if (res) {
        res.set('Cache-Control', `max-age=${MAX_CACHE_AGE}`)
    }

    const {data: productSearchResult, isLoading} = useProductSearch({
        parameters: {
            refine: [`cgid=${HOME_SHOP_PRODUCTS_CATEGORY_ID}`, 'htype=master'],
            limit: HOME_SHOP_PRODUCTS_LIMIT
        }
    })

    /**************** Einstein ****************/
    useEffect(() => {
        einstein.sendViewPage(pathname)
    }, [])

    return (
        <Box data-testid="home-page" layerStyle="page">
            <Seo
                title="Home Page"
                description="Commerce Cloud Retail React App"
                keywords="Commerce Cloud, Retail React App, React Storefront"
            />
        <WeatherApp/>
            
        </Box>
    )
}

Home.getTemplateName = () => 'home'

export default Home
