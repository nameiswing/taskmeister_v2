<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Taskmeister</title>
        <script defer src="{{asset('/js/manifest.js')}}"></script>
        <script defer src="{{asset('/js/vendor.js')}}"></script>
        <script defer src="{{asset('/js/app.js')}}"></script>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
        <div id="root">
            {{-- React injects html here --}}
        </div>
    </body>
</html>
