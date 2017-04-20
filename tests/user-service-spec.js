describe('User Functionality Tests', function(){
  beforeEach(module('app'));

  describe('isAdmin', function(){
    it('should return false if the roles array does not contain the admin entry', inject(function(userSvc){
      var user = new userSvc();
      expect(user.isAdmin()).to.be.falsey;
    }))

    it('should return true if the roles array does contain the admin entry', inject(function(userSvc){
      var user = new userSvc();
      user.roles = ['admin'];
      expect(user.isAdmin()).to.be.true;
    }))
  })
})
