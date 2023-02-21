export const closeModal = (modalName: string) => {
  const dialog = document.getElementById(
    `${modalName}-modal`
  ) as HTMLDialogElement;

  // 모달꺼지면 스크롤 방지 해제하는 용도
  document.querySelector("body")?.classList.remove("modal-open");
  dialog.close();
};

export const openModal = (modalName: string) => {
  const dialog = document.getElementById(
    `${modalName}-modal`
  ) as HTMLDialogElement;
  // 모달켜지면 스크롤 방지하는 용도
  document.querySelector("body")?.classList.add("modal-open");
  dialog.showModal();
};
