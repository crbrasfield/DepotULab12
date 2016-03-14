$(document).ready(function() {
    function getData() {
        $.ajax({
            method: 'GET',
            url: 'messages',
        }).done(function(list) {
            var array = list.split('\n');
            //console.log(array);
            for (i = 0; i < array.length; i++) {
                var tweet = array[i];
                //console.log(tweet);
                var parsedTweet = JSON.parse(tweet);
                //console.log(parsedTweet);
                var finalTweet = "USER: " + parsedTweet.text;
                $('.incoming-tweets').prepend('<li>' + finalTweet + '</li>')
            };
        });
    };
    getData();
});

$('#button').click(function() {
    if ($('#new-tweet').val().length === 0) {
        alert('You did not enter a tweet to post!');
        return;
    } else {
        postData();
    }

    });

function postData() {
    var user = 'USER: '
    var incTweet = {
        text: $('#new-tweet').val(),
        userName: user
    };
    $.ajax({
        method: 'POST',
        url: 'messages',

    }).then(function() {
        $('.incoming-tweets').prepend('<li>' + user + incTweet.text + '</li>')
    });
    $('#new-tweet').val('');
}