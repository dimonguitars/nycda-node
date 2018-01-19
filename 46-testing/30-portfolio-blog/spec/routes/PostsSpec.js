describe("post routes", function() {
  var request = require('request');
  it("should list blog posts", function(done) {
    request("http://localhost:3333/posts/7", function(error, response, body){
      expect(body).toContain("<h1>Jasmine Testing</h1>");
      expect(body).toContain("<p>Oh yeah</p>");
      done();
    });
  });
});
