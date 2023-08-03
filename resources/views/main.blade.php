<!DOCTYPE html>
<html lang="en">
  <head>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <title>Kaizen News Network</title>
    <meta charset="utf-8" />
    <!-- @env('local')
      @viteReactRefresh
      @vite('resources/js/index.jsx')
      @vite('resources/css/app.css')
    @endenv -->
    @env('production')
      <link rel="stylesheet" href="{{ asset('assets/app.css') }}"></link>
      <link rel="stylesheet" href="{{ asset('assets/index.css') }}">
    @endenv
  </head>
  <body>
    <div id="root"></div>
    @env('production')
      <script src="{{ asset('assets/app.js') }}"></script>
    @endenv
  </body>
</html>