<!DOCTYPE html>
<html lang="en">
  <head>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <title>Kaizen News Network</title>
    <meta charset="utf-8" />
    @env('local')
      @viteReactRefresh
      @vite('resources/js/index.jsx')
      @vite('resources/css/app.css')
    @endenv
    @env('production')
      <link rel="stylesheet" src="{{ env('PRODUCTION_URL') }}/build/assets/app.css"></link>
    @endenv
  </head>
  <body>
    <div id="root"></div>
    @env('production')
      <script src="{{ env('PRODUCTION_URL') }}/build/assets/index.js"></script>
    @endenv
  </body>
</html>