import { denoLib, log, wasmLib } from "../deps.ts";

/**
 * Logs out some greetings.
 */
export async function hello(): Promise<void> {
  // init WASM module
  await wasmLib.default();

  log.info("Hello");
  denoLib.world();
  log.info("Hello");
  log.info(`World ${wasmLib.add(2, 2)}`);
}
