(function ( $ ) {

    $.fn.imageUpload = function(options) {

        /**
         * Default Settings
         */
        var defaults = {
            'container' : this.parent(),
            'allowed'   : ['jpg', 'jpeg', 'gif', 'png'],
            'form'      : '#form',
            'handler'   : 'upload.php'
        }

        /**
         * Settings Object
         */
        var settings = $.extend( {}, defaults, options );

        /**
         * Image Upload
         */
        this.on('change', function() {

            // Remove old alerts
            $(settings.container).find('.iu-alert').remove();

            // Show loading spinner
            $(settings.container).append('<span class="iu-spinner"><img src="working.gif" width="20" height="20"></span>');

            // Get File Info
            var file_name       = $(this).val(),
                file_ext        = file_name.substr(file_name.indexOf('.') + 1),
                file_is_valid   = false;

            // Validate file extension
            $.each(settings.allowed, function(key, value) {
                if ( file_ext === value ) {
                    file_is_valid = true;
                    return;
                }
            });

            // Upload!
            if ( file_is_valid ) {

                data = new FormData($(settings.form)[0]);

                $.ajax({
                    url: settings.handler,  // Server script to process data
                    type: 'POST',
                    xhr: function() {  // Custom XMLHttpRequest
                        var myXhr = $.ajaxSettings.xhr();
                        return myXhr;
                    },

                    //Ajax events
                    success: function(response) {
                        console.log(response);

                        if ( response.code === 200 ) {
                            $(settings.container).append('<span class="iu-alert iu-success">Upload complete.</span>');
                        } else {
                            console.log(response);
                            $(settings.container).append('<span class="iu-alert iu-error">Something went wrong, your image was not uploaded.</span>');
                        }

                        $('.iu-spinner').remove();

                    },
                    error: function(response) {
                        console.log(response);
                        $(settings.container).append('<span class="iu-alert iu-error">Something went wrong, your image was not uploaded.</span>');
                        $('.iu-spinner').remove();
                    },

                    // Form data
                    data: data,

                    // Options to tell jQuery not to process data or worry about content-type.
                    cache: false,
                    contentType: false,
                    processData: false
                });


            } else {
                $(settings.container).append('<span class="iu-alert iu-error">Provided file is invalid.</span>');
                $(settings.container).find('.iu-spinner').remove();
            }

        });

        console.log(settings);

    }

}( jQuery ));
