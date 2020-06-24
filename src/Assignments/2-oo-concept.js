const twoOOConcepts = function () {
        function Author(name, bestSeller) {
            let favoriteIcecream = 'chocolate';
            let secretBio = function () {
                alert('SSHHHH! THIS IS A SECRET');
            };

            this.name = name;
            this.bestSeller = bestSeller;

            this.bio = function () {
                alert('Hi! I\'m ' + this.name + ', and I\'m the writer of best selling book ' + this.bestSeller + '!');
            };
    }

    let arthur = new Author('Arthur C. Clarke', '2001: A Space Odyssey');
    let george = new Author('George R. R. Martin', 'ALL OF GAME OF THRONES');

    arthur.bio();
    george.bio();

    console.log(george.favoriteIcecream); // shows 'undefined' as this is a private variable.
    george.secretBio(); //throws an error, as this is a private function.
};
