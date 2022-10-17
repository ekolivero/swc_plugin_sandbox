# Steps to compile
- Run the following command to compile to WASM
```shell
cargo build --release --target=wasm32-wasi
```
- This will create a `target/wasm32-wasi/release/pci-compliance.wasm` as specified in package.json `main` field. 