function shakeMagic8Ball(){
    const question = prompt('Ask the Magic 8-Ball a question');
    if(question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question!';
        document.getElementById('response-text').classList = 'display text-danger';
        document.getElementById('reponse-img').src = '#replac/ewithbadimg' //fix later//
    }

    if(!question.trim()) {
        alert('Please enter a valid question');
        return
    }


}