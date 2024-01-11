import { invoke } from "@tauri-apps/api";
import { isTauriApp } from "./isTauriApp";

export async function exit() {
  if (isTauriApp()) {
    await invoke("exit");
  } else {
    window.close();
  }
}
