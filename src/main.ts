import { invoke } from "@tauri-apps/api/tauri";

let greetInputEl: HTMLInputElement | null;
let greetMsgEl: HTMLElement | null;

async function greet() {
  try {
    if (greetMsgEl && greetInputEl) {
      // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
      greetMsgEl.textContent = await invoke("greet", {
        name: greetInputEl.value,
      });
    }
  } catch (error) {
    console.log(`Caught by try/catch ${error}`);
  }
 
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document
    .querySelector("#greet-button")
    ?.addEventListener("click", () => greet());
});
