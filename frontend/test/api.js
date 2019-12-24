before(done => {
    console.log('\n\n-----------------------\n--\n-- START TEST\n--\n-------------------------');
    done();
});


describe('#Asynchronous user crud test', () => {
    it('get "users" record', done => {
        chai.request(main)
            .get('/')
            .end(function (err, res) {
                if(err) done(err);
                done();
                console.log('status code: %s, users: %s',res.statusCode, res.body.length)
            });
    }).timeout(0);
  })


  after(done => {
      console.log('\n\n-----------------------\n--\n-- END TEST\n--\n-------------------------');
      done();
  });
