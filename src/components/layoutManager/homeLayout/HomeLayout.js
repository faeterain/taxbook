import React from "react"
import NavBar from "../../NavBar/NavBar"
import Seo from "../../Seo/seo"
import {StaticQuery, graphql} from "gatsby"
import "./HomeLayout.scss"

const HomeLayout = ({title, children}) =>{
	return (
    <StaticQuery
			query={graphql`
				query MyQuery {
					site(siteMetadata: {}) {
						id
						siteMetadata {
							menuLinks {
								name
								link
							}
							title
						}
					}
				}
			`}
			render= {data =>{
				return (
					<>
            <Seo title={title} />
						<div className="header-container">
							<NavBar navClass="header-padding" menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
						</div>
            {children}
        	</>
				)
			}}
		/>
	)
}

export default HomeLayout