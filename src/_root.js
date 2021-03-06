import React from 'react'

export default function Root({ main, state }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SpaceX Launch Programs | browse all launches by SpaceX program</title>
        <meta
          name="description"
          content="An application which would help users list and browse all launches by SpaceX program."
        />
        <meta name="keywords" content="SpaceX, Launches" />
        <meta name="author" content="Kushal Mukherjee" />
        <meta property="og:title" content="SpaceX Launch Programs" />
        <meta
          property="og:description"
          content="An application which would help users list and browse all launches by SpaceX program."
        />
        <link rel="apple-touch-icon" sizes="57x57" href="assets/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="assets/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="assets/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="assets/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="assets/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="assets/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="assets/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="assets/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="assets/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="assets/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="assets/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#eee" />
        <meta name="msapplication-TileImage" content="assets/ms-icon-144x144.png" />
        <meta name="theme-color" content="#eee" />
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <div id="app">{main}</div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__STATE__= ${JSON.stringify(state)}`,
          }}
        />
        <script src="main.js" />
      </body>
    </html>
  )
}
