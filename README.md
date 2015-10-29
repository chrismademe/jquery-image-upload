# jQuery Image Upload

Simple jQuery plugin to provide instant image uploads via AJAX.


## Usage

The plugin was developed on version 1.9.1 of jQuery but I'm sure it'll work just fine on others.

Include jQuery and the plugin:
```
<script src="/path/to/jquery.js"></script>
<script src="/path/to/plugin/jquery.image-upload.js"></script>
```

If you need them, include the base styles in the `<head>` of your page.
```
<link rel="stylesheet" href="/path/to/plugin/jquery.image-upload.css">
```

Initialise the plugin:
```
<script>
$(document).ready(function() {
    $('#file_input').imageUpload();
});
</script>
```

## Handling files server-side

jQuery Image Upload is a UI tool, it simply makes uploading images instant and more visually pleasing. By default, the plugin will try to upload files to a PHP script `upload.php`. You can override this with the path to your script in when initialising the plugin.

```
<script>
$(document).ready(function() {
    $('#file_input').imageUpload({
        'handler': '/path/to/my/script.php'
    });
});
</script>
```
