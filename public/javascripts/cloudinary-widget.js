
$(function() {

    document.getElementById("upload_widget_opener").addEventListener("click", function() {

        var cloudinaryOptions = {
            cloud_name:     'dyfaki2cl',
            upload_preset:  'qixtsz5x',
            theme:          'white',
            multiple:       'false',
            text: {
                "sources.local.title": "My files",
                "sources.local.drop_file": "Déposer un fichier ici",
                "sources.local.drop_files": "Déposer des fichiers ici",
                "sources.local.drop_or": "Ou",
                "sources.local.select_file": "Sélectionner",
                "sources.local.select_files": "Sélectionner",
                "sources.url.title": "URL",
                "sources.url.note": "URL publique d'une image :",
                "sources.url.upload": "Envoyer",
                "sources.url.error": "Merci de saisir une URL valide.",
                "sources.camera.title": "Appareil photo",
                "sources.camera.note": "Assurez-vous d'avoir autorisé votre navigateur a accéder à votre appareil photo.",
                "sources.camera.capture": "Envoyer",
                "progress.uploading": "Envoi ...",
                "progress.upload_cropped": "Envoyer",
                "progress.processing": "En cours ...",
                "progress.retry_upload": "Réessayer",
                "progress.use_succeeded": "Succès",
                "progress.failed_note": "Une erreur s'est produite."
            }
        };

        cloudinary.openUploadWidget(cloudinaryOptions, handlePhotoUpload);

    }, false);

    function handlePhotoUpload(error, results) {

        $.each(results, function(index, image) {

            var image_id = image.public_id.concat('.').concat(image.format);

            $('#image').val(image_id);

            //$('#upload_preview').html(cloudinary.image(image_id, { transformation: 'compress_318_180' })[0]);
        })
    }
});
