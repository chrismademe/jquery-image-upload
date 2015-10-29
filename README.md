# jQuery Image Upload

Simple jQuery plugin to provide instant image uploads via AJAX.


## Usage

The plugin was developed on version 1.9.1 of jQuery but I'm sure it'll work just fine on others.

__Include jQuery and the plugin:__
```
<script src="/path/to/jquery.js"></script>
<script src="/path/to/plugin/jquery.image-upload.js"></script>
```

_If you need them, include the base styles in the `<head>` of your page._
```
<link rel="stylesheet" href="/path/to/plugin/jquery.image-upload.css">
```

__Initialise the plugin:__
```
<script>
$(document).ready(function() {
    $('#file_input').imageUpload();
});
</script>
```

__All Options and Callbacks__
```
<script>
$(document).ready(function() {
    $('[data-rel="image"]').imageUpload({

        // Defaults to the parent of the file input
        container: '.container',

        // Array of allow extensions
        allowed: ['jpg', 'jpeg', 'gif', 'png'],

        // Form ID or element for the form data
        form: '#form',

        // Script to send AJAX request to
        handler: 'upload.php',

        // onInit Callback - fired on plugin initilisation
        onInit: function() {
            console.log('Plugin initialised');
        },

        // onSuccess Callback - fired on successful response from AJAX request
        onSuccess: function() {
            console.log('Yeeeaahh!!!');
        },

        // onFail Callback - fired on unsuccessful response from AJAX request
        onFail: function() {
            console.log('Ohh snap...');
        },

        // onError Callback - fired when there was an error sending the AJAX request
        onError: function() {
            console.log('It broke.');
        }
    });
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
