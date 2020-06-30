const user = data => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Kemono</title>
      <link rel="stylesheet" type="text/css" href="https://unpkg.com/normalize.css@8.0.1/normalize.css">
      <link rel="stylesheet" type="text/css" href="/css/index.css">
      <meta name="service" content="${data.service}"/>
    </head>
    <body>
      <div class="main" id="main">
        <ul class="header">
          <li><a href="/">Kemono</a></li>
          <li class="current-page"><a href="/">Posts</a></li>
          <li><a href="/help">Help</a></li>
          <li><a href="https://liberapay.com/kemono.party" target="_blank">Donate</a></li>
        </ul>
        <ul class="subheader">
          <li><a href="/">List</a></li>
          <li><a href="/importer">Import</a></li>
          <li><a href="/random">Random</a></li>
          <li><a href="/help/posts">Help</a></li>
        </ul>
        <div class="sidebar">
          <input
            id="search-input"
            type="text"
            placeholder="search for posts..."
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
          >
          <h1>Information</h1>
          <div class="results" id="results">
            <div id="info-block"></div>
            <div id="extra-info-block"></div>
          </div>
        </div>
        <div class="paginator" id="paginator">

        </div>
        <div class="content" id="content">

        </div>
        <noscript>
          <h1 class="subtitle">Javascript is disabled.</h1>
        </noscript>
      </div>
      <script src="https://unpkg.com/unfetch@4.1.0/polyfill/index.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js"></script>
      <script src="/js/utils.js"></script>
      <script src="/js/user.js"></script>
    </body>
  </html>
`

const post = data => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Kemono</title>
      <link rel="stylesheet" type="text/css" href="https://unpkg.com/normalize.css@8.0.1/normalize.css">
      <link rel="stylesheet" type="text/css" href="/css/index.css">
      <meta name="service" content="${data.service}"/>
    </head>
    <body>
      <div class="main">
        <ul class="header">
          <li><a href="/">Kemono</a></li>
          <li class="current-page"><a href="/">Posts</a></li>
          <li><a href="/help">Help</a></li>
          <li><a href="https://liberapay.com/kemono.party" target="_blank">Donate</a></li>
        </ul>
        <ul class="subheader">
          <li><a href="/">List</a></li>
          <li><a href="/importer">Import</a></li>
          <li><a href="/random">Random</a></li>
          <li><a href="/help/posts">Help</a></li>
        </ul>
        <div class="views">
          <div class="sidebar" style="margin-right: 20px;">
            <span class="subtitle">Click on the thumbnails to reveal the original resolution image.</span>
            <h1>Information</h1>
            <div class="results" id="results">

            </div>
          </div>
          <div class="page" id="page">
            <noscript>
              <h1 class="subtitle">Javascript is disabled.</h1>
            </noscript>
          </div>
        </div>
      </div>
      <script src="https://unpkg.com/unfetch@4.1.0/polyfill/index.js"></script>
      <script src="/js/expander.js"></script>
      <script src="/js/post.js"></script>
    </body>
  </html>
`

const server = () => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <title>Discord Archive</title>
      <link rel="stylesheet" type="text/css" href="https://unpkg.com/normalize.css@8.0.1/normalize.css">
      <link rel="stylesheet" type="text/css" href="/css/compatibility.css">
      <link rel="stylesheet" type="text/css" href="/css/discord.css">
      <script src="https://unpkg.com/unfetch@4.1.0/polyfill/index.js"></script>
      <script src="/js/discord.js"></script>
    </head>
    <body>
      <div class="discord-main">
        <div class="channels" id="channels"></div>
        <div class="messages" id="messages">
          <noscript>
            <div class="message">
              <p>You need JavaScript to view archived Discord messages.</p>
            </div>
          </noscript>
        </div>
      </div>
    </body>
  </html>
`

module.exports = { post, user, server };