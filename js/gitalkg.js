var gitalk = new Gitalk({
  clientID: '4cd6e43662bad7fefe96', // GitHub Application Client ID
  clientSecret: '5b438157b509585bb60bb57fe3687b59716afd77', // GitHub Application Client Secret
  repo: 'steveblog-gitalk-contain',      // 存放评论的仓库
  owner: 'SteveTaizhou',          // 仓库的创建者，
  admin: ['SteveTaizhou'],        // 如果仓库有多个人可以操作，那么在这里以数组形式写出
  id: location.pathname      // 用于标记评论是哪个页面的，确保唯一，并且长度小于50
});
gitalk.render('gitalk-container');    // 渲染Gitalk评论组件
