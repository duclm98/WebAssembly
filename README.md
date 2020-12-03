# WebAssembly
## Webassembly có thể làm gì
WebAssembly (gọi tắt wasm) là một loại bytecode cấp độ thấp và hiệu quả cho web.<br>
WASM cho phép bạn sử dụng ngôn ngữ khác Javascript (như C, C++, Rust...), viết chương trình với những ngôn ngữ đó, và biên dịch trước (ahead of time) sang WebAssembly.<br>
Kết quả là webapp sẽ load và thực thi rất nhanh.
## Thời gian tải
Để load Javascript, trình duyệt phải load tất cả file .js đúng nguyên văn bản.<br>
WebAssembly load nhanh hơn trong trình duyệt bởi vì chỉ có những file wasm đã được biên dịch là được truyền tải qua internet. Và bởi vì wasm là ngôn ngữ bậc thấp gần giống assembly có format nhị phân rất nhỏ gọn.
## Ví dụ thời gian phản hồi khi gọi API
Giả sử có API đếm số lượng số nguyên tố nhỏ hơn 500000
### Khi được viết bằng javascript:
![](https://github.com/minhduc1612112/WebAssembly/blob/main/API/result/js.PNG)
### Khi được viết bằng WASM:
![](https://github.com/minhduc1612112/WebAssembly/blob/main/API/result/c.PNG)
