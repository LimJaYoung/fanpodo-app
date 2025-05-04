const ghpages = require('gh-pages');
const path = require('path');

ghpages.publish(
  path.join(__dirname, 'dist'),
  {
    branch: 'gh-pages',
    repo: 'https://github.com/LimJaYoung/fanpodo-app.git',
    remote: 'origin',
    user: {
      name: 'LimJaYoung',
      email: 'jjjh523@nate.com' // ← 너의 깃허브 이메일로 바꿔줘!
    },
    cwd: path.join(__dirname) // ✅ 현재 작업 디렉토리 명시!
  },
  function (err) {
    if (err) {
      console.error('❌ 배포 실패:', err);
    } else {
      console.log('🎉 배포 성공!');
    }
  }
);