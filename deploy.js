const ghpages = require('gh-pages');

ghpages.publish(
  'dist',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/LimJaYoung/fanpodo-app.git',
    remote: 'origin',  // 명시적으로 추가
    user: {
      name: 'LimJaYoung',
      email: 'your@email.com'  // 여긴 본인 GitHub 계정 이메일로 바꿔줘
    }
  },
  function (err) {
    if (err) {
      console.error('❌ 배포 실패:', err);
    } else {
      console.log('🎉 배포 성공!');
    }
  }
);