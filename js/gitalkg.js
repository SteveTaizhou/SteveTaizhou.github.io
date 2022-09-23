var gitalk = new Gitalk({
  clientID: '830ef52cb61a8719455f', // GitHub Application Client ID
  clientSecret: 'b539c6117355b6ceeb52669a805e9d4387c068ff', // GitHub Application Client Secret
  repo: 'steveblog-gitalk-contain',      // 存放评论的仓库
  owner: 'SteveTaizhou',          // 仓库的创建者，
  admin: ['SteveTaizhou'],        // 如果仓库有多个人可以操作，那么在这里以数组形式写出
  id: location.pathname      // 用于标记评论是哪个页面的，确保唯一，并且长度小于50
});
gitalk.render('gitalk-container');    // 渲染Gitalk评论组件
