import React from 'react'
import {Link } from 'gatsby'

import Layout from '../layout'


const IndexPage = props =>{

    console.log(props)
    console.log(props.pageContext)
    const {content, title} = props.pageContext


    return (
        <Layout>
            <h1>{title}</h1>
           <article>{content}</article>

            <Link to='/'>to home</Link>
        </Layout>
    )


}


export default IndexPage