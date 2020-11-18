// import React from "react"
// // import { Link } from "gatsby"
// // import Img from "gatsby-image" // to take image data and render it
// //
// // const Logo = (props) => {
// //     const data = useStaticQuery(graphql`
// //       query {
// //         file(relativePath: { eq: "/assets/migrato.jpg" }) {
// //           childImageSharp {
// //             fluid {
// //               base64
// //               aspectRatio
// //               src
// //               srcSet
// //               sizes
// //             }
// //           }
// //         }
// //       }
// //     `)
// //
// //     return (
// //         <div className="site-logo">
// //             <Img fluid={data.file.childImageSharp.fluid} alt="Logo" />
// //             <Link to="/">{props.title}</Link>
// //         </div>
// //     )
// // }
// //
// // export default Logo
//

//
//
// export default function Logo( props ) {
//     return (
//         <div>
//             <h1>Hello gatsby-image</h1>
//             <Img fixed={fixed} src={"assets/migrato.jpg"} />
//         </div>
//     )
// }

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Logo() {
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: {eq: "migrato.jpg"}) {
         childImageSharp {
            fixed(width: 75) {
              ...GatsbyImageSharpFixed
            }
          }
        }
    }
  `)
    return (
        <div>
            <Img fixed={data.file.childImageSharp.fixed} />
        </div>
    )
}






// export const query = graphql`
//   query {
//     file(relativePath: { eq: "assets/migrato.jpg" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `

// import { useStaticQuery, graphql } from "gatsby"
//
// // export default function Logo() {

// //     return (
// //         <div>
// //             <h1>Hello gatsby-image</h1>
// //             <Img
// //                 fixed={data.file.childImageSharp.fixed}
// //                 alt="Gatsby Docs are awesome"
// //             />
// //         </div>
// //     )
// // }