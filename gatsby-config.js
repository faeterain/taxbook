require("dotenv").config({
  path: `env/.env.${process.env.NODE_ENV}`,
})
if (process.env.STAGING) {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}.staging`,
  })
} else {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}
module.exports = {
    siteMetadata: {
      title: `Taxbook`,
      description: `Taxbook - Dịch vụ Kế toán & Thuế`,
      author: `Phat Nguyen`,
      menuLinks:[
          {
						name: `Trang chủ`,
						link: `/`
          },
          {
            name: `Sản phẩm`,
            link: `/Product`
        	},
          {
            name: `Blog`,
            link: `/Blog`
        	},
          {
            name: `Chuyên gia`,
            link: `/Prof`
        	}
      ]
    },
    plugins: [`gatsby-plugin-sass`]
  }