({
  "manifest": {
    "id": "custom-chart",
    "name": "Custom Chart",
    "version": "1.0.0",
    "description": "A sample custom visualization",
    "iconUrl": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE5IDE5SDVWMThIMTlWMTlNNyAxNlYxNEwxMiAxOUwxNyAxNFYxNkgyTjdNMTIgMTNMMSAgN0wyMyA3TDEyIDEzWiIvPjwvc3ZnPg==",
    "dataDependencies": [
      {
        "required": true,
        "dataType": "NUMBER",
        "name": "metric",
        "supportedTypes": ["METRIC"]
      }
    ],
    "script": "https://bmmishra.github.io/community-viz/index.js",
    "html": "https://bmmishra.github.io/community-viz/index.html"
  }
})