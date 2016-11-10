(function(module) {
  var reposObj = {};

  reposObj.requestRepos = function(callback) {
    // NOTE: refactor this request into an $.get call
    $.when(
     $.get('/github/users/amosboldor/repos', function (data) {
       reposObj.allRepos = data;
     }),
     $.get('/github/amosboldor/followers', function (data) {
       reposObj.followers = data;
     })
    ).done(callback);
  };

  reposObj.withTheAttribute = function(attr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.reposObj = reposObj;
})(window);
