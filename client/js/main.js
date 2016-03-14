$(document).ready(function() {
    console.log('ready');

    $('#button').click(function() {
        var post = $('#newtweet').val();
        console.log(post);
    });

    function postData() {

    }

    function getData() {
        $.ajax({
            method: 'GET',
            url: 'messages',
        }).done(function(list) {
            var array = list.split('\n');
            console.log(array);
            for (i = 0; i < array.length; i++) {
                var tweet = array[i];
                console.log(tweet);
                var parsedTweet = JSON.parse(tweet);
                console.log(parsedTweet);
                var finalTweet = "USER: " + parsedTweet.text;
                $('.incoming-tweets').prepend('<li>'+finalTweet+'</li>')
            };
        });
    };
    getData();
});