# Vòng lặp for

What? vòng lặp là dùng để lặp lại 1 đoạn logic kiểm tra cùng các điều kiện.

Vòng lặp có thể lặp số lần nhất định, vòng lặp có giới hạn điều kiện, hoặc lặp vô hạn.

\[table\]


# If else

`const thamNien = 0.5;`

`let thuong = 0;`

`if (thamNien >= 1 & thamNien < 3) {thuong = 100};`

`else if (thamNien < 6) {thuong = 200}`

`else {thuong = 500};`

# Git
| working directory | staging | repository |
| --- | --- | --- |
| git init | git add . | git commit --m"comment" |
| staging về working: git restore | repo ve working directory: git reset HEAD~1 | repo ve staging: git reset --soft HEAD~1 |


## Lệnh 1: lấy từ Staging -&gt; working directory

`git restore --staged <file_name1> <file_name2>`

`git restore --staged .`

## Lệnh 2: lấy từ repository về working directory:

- Mất commit + lấy các thay đổi về lại vùng *working directory*
- mỗi commit sẽ được sắp xếp theo thứ tự ghế xếp lên nhau. commit nào gần nhất thì ở trên. Nếu muốn lấy commit nào thì sẽ dùng câu lệnh tương ứng

 `git reset HEAD~1` //1 là lấy commit 1 if change = 2 =&gt; lấy commit 2.

## lệnh 3: lấy từ respository về staging

`git reset --soft HEAD~1`