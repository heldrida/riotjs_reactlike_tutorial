riot.tag('comment-box', '<h1>Comments</h1> <comment-list comments="{ comments }"></comment-list> <comment-form ></comment-form>', function(opts) {

  this.comments = []

});

riot.tag('comment-list', '<comment each="{ opts.comments }"></comment>', function(opts) {

});

riot.tag('comment-form', '<form> <input type="text" name="name"> <textarea name="message"></textarea> <input type="submit" value="Post"> </form>', function(opts) {

});

riot.tag('comment', '<div> <h2>My name</h2> <p>My message</p> </div>', function(opts) {

});