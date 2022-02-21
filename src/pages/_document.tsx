import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
            <link rel="shortcut icon" href="https://lh3.googleusercontent.com/TtfcsCDrLKdKWUiO-hmy5A6T0rwSZjuCmxIenzhGtvleiFpyLQ04o99gvPg-aXg_d75oDjcCgyLU-6tMKjrujmHj2NH_I18T2-RMMHgHL7CWYMcrP_7i5_W4YdA7yMlJerp1mFhH-gQKfIFBkc5yrVOpwl1Gk5GyVgWseO1Uj51wVf9VHMndHDI-0A747nz1IQ7z24JBuEP4-B_zQ1ZBbKbFdcUXWrTHP_SqsJeCt2PiTP1L4SBxHKsOxq6wwTdlhtqzGE3Dja6TQozAciBpfWEdcmTrNV6NnmI2Xqa7YFtlQpxzKUEXzzplhAsIo5Liiyk_T4CulE4UatKos_KcS3ZyS6szF4rv7I-FtJf-ES_6oxGgYFxMq_mwGzITeexKeqVgecreg7WfNKisACBqRvZoyHxge_AANjgjz1u2ulYBczTxySXMcbhfwDVdm-JArqQD-h-JIAsg3Xd7pq2xxytXoYuQuRiiWdHNE_rNmEqL0vLF15TwHhViVrzNuq2pqZVq1NlWY0zptI-L2d_zREUxASiABejTkf2kFKTtKi_C8rT4LuwMBZ2qwDjnEDa4AMDqinsCk6IqrU6qDVq4nWyBEoZc2DCChEoJabUzZNiGhv-pro8t7I_wRdeC0lXB8aKPC38-2X-3PfVLiOfmmV0ptU7V5BGK7gqmIzfnuW0CqcUPBtBdruyMDOdPKcuSz-goyaJeyamhT0UOOIEvpC_3=s200-no?authuser=0" type="image/png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
