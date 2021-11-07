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