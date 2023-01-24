module.exports = {
  src: ".",
  // 현재 schema 파일의 위치
  schema: "schema.graphql",
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  language: "typescript",
  // 아래 artifactDirectory설정 때문에 relay-compiler 커맨드 안먹히면 직접 그 경로에 __generated__ 폴더를 생성하고 해볼것
  // artifactDirectory: "./__generated__",
};
