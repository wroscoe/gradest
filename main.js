// Load the model.
use.load().then(model => {

    counter = function () {
        var value = $('#text').val();

        if (value.length == 0) {
            $('#wordCount').html(0);
            $('#totalChars').html(0);
            $('#charCount').html(0);
            $('#charCountNoSpace').html(0);
            return;
        }

        var sentences = value.match(/[^\.!\?]+[\.!\?]+/g);
        $('#sentenceArray').html(sentences);

        if (sentences.length > 0) {
            model.embed(sentences).then(embeddings => {
                // `embeddings` is a 2D tensor consisting of the 512-dimensional embeddings for each sentence.
                // So in this example `embeddings` has the shape [2, 512].
                embeddings.array().then(array => $('#embeddingsArray').html(array));

            });

        }


        var regex = /\s+/gi;
        var wordCount = value.trim().replace(regex, ' ').split(' ').length;
        var totalChars = value.length;
        var charCount = value.trim().length;
        var charCountNoSpace = value.replace(regex, '').length;

        $('#wordCount').html(wordCount);
        $('#totalChars').html(totalChars);
        $('#charCount').html(charCount);
        $('#charCountNoSpace').html(charCountNoSpace);
    };


    $('#text').keyup(counter);
});