<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Cooktopia</title>
    @viteReactRefresh
    @vite(['resources/js/app.jsx'])
</head>

<body>
    @inertia

</body>

</html>