# Date: 12/5/2026

## Git

1. what?\
   là phần mềm chạy trên máy tính của mình\
   là công cụ quản lý file ở các file, quản lý mọi thay đổi trong tệp tin
2. Where? trên máy tính của mình
3. Why? need: lưu lịch sử của dự án, khôi phục version nếu cần thiết, làm việc nhóm dễ dàng mà không bị ghi đè dữ liệu.

HOW? git hoạt động thế nào? three states ( working directory, staging area, Repository)

```plaintext
git init //khoi tao
git add . // commit all file
git a.txt b.txt //commit specific file. TIP nếu không muốn gõ tiếp thì gõ name file -> nhấn tab sẽ gợi ý ra các file khác tiếp
git commit -m "nội dung comment"
```

## GIT three states

working directory -&gt; (git add) staging area -&gt; (git commit) repository

**Three states:**

**modified (đã sửa đổi) - vùng làm việc (Working Directory)**

- what? là các tập tin thực tế đang hiển thị trên thư mục máy tính. Đang tiến hành làm mới, chỉnh sửa, xoá dữ liệu...
- Đặc điểm: GIT nhận thấy có sự thay đổi (so với bản trước đó) nhưng chưa ghi nhận vào history.

**Staged (dã chuẩn bị) - KHU vực chờ ( Staging area/index):**

- What? khi dùng lệnh `git add` -&gt; tập tin được đánh dấu là trạng thái *Staged*.
- Đặc điểm: là bước đệm lưu lại thay đổi

**Commited (đã cam kết) - KHO lưu trữ ( repository)**

- What? khi dùng lệnh `git commit`  -&gt; GIT lấy tệp ở trạng thái staged -vùng staging lưu vĩnh viễn vào cơ sở dữ liệu cục bộ
- Đặc điểm: dữ liệu được lưu trữ an toàn, có mã định danh(checksum) kiểu message rõ ràng là gì để sau có thể check lại được sự thay đổi.

## GIT config

có 2 loại: global, specific region

## GIT status

file màu xanh nằm trong vùng staging.

file màu đỏ nằm trong vùng working directory

Ví dụ: tạo ra 3 file a.txt b.txt c.txt

1. git init -&gt; git add a.txt -&gt; git status: lúc này sẽ thấy a.txt màu xanh, b.txt c.txt -&gt; màu đỏ
2. git init -&gt; git commit - m "add a.txt" -&gt; git status: không thấy a.txt nữa vì đã được đẩy lên repo rồi,  b.txt c.txt -&gt; màu đỏ

## GIT log

What? lưu lại lịch sử code đẩy lên.

## GIT- commit convention

**&lt;type&gt;: &lt;short_description&gt;**

**3 type:**

**chore:** sửa nhỏ lẻ, chính tả, xoá file không dùng tới.

**feat:** new features, thêm file...

**fix:** sửa code, sửa lỗi,....

---

**short_description**: khoảng &lt;=50 ký tự

Example:

git commit -m "chore: sửa comment từ Vietnamese sang English"

git commit -m "feat: add [00-key-takeways.md](http://00-key-takeways.md) file"

git commit -m "fix: sửa comment ngày 2 của giáo viên"

## GIT simple workflow

Nếu dùng global config:

init -&gt; -&gt; add -&gt; commit -&gt; push

Nếu dùng specific config:

init -&gt; config-&gt;commit -&gt; push

## Git Hub

 what?\
là nơi lưu trữ code\
Where

Hệ sinh thái của git hub:\
Github actions\
github teams\
copilot