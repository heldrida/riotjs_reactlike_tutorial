<comment-box>
  <h1>Comments</h1>

  <comment-list comments={ comments } />
  <comment-form />

  this.comments = []
</comment-box>

<comment-list>
  <comment each={ opts.comments } />
</comment-list>

<comment-form>
  <form>
    <input type="text" name="name">
    <textarea name="message"></textarea>
    <input type="submit" value="Post">
  </form>
</comment-form>

<comment>
  <div>
    <h2>My name</h2>
    <p>My message</p>
  </div>
</comment>