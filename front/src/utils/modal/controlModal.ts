export const closeModal = (modalName: string) => {
  const dialog = document.getElementById(
    `${modalName}-modal`
  ) as HTMLDialogElement;

  // 모달꺼지면 스크롤 방지 해제하는 용도
  document.querySelector("body")?.classList.remove("modal-open");
  dialog.close();
  dialog.style.cssText = ``;
};

export const openModal = (modalName: string) => {
  const dialog = document.getElementById(
    `${modalName}-modal`
  ) as HTMLDialogElement;
  // 모달켜지면 스크롤 방지하는 용도
  document.querySelector("body")?.classList.add("modal-open");
  dialog.showModal();

  // 모달 내의 버튼이 맨 아래에 위치하기 위해서 Modal에 반드시 아래 CSS가 필요함.
  // 이렇게 한 이유는 모달이 꺼져있을 때도 display:flex가 입혀지면 화면에 나타나게 됨
  // 따라서 모달이 켜졌을 때만 flex 속성을 갖게 함
  dialog.style.cssText = `flex-direction:column; display:flex;`;
};
