module.exports = {
  // yarn create next-app . --template [~~.git]
  // ProjectName을 모두 [앱이름] 으로 바꿉니다.
  // 바꾸는 파일들 => package.json, index.json, android/, ios/
  placeholderName: "ProjectName",

  // values.xml and Info.plist 에 있는 title 값을 변경합니다.
  // rn 초기 스플래시 화면에서 나오는 타이틀을 변경합니다.
  titlePlaceholder: "Hello Pentacle Nextjs Template",
  // 템플릿 폴더를 지정합니다.
  templateDir: "./template",

  // init 완료후 실행할 스크립트 파일입니다.
  postInitScript: "./script.js",
};
